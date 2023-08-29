/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import s from './AddProduct.module.scss';
import axios from '../../utils/axios/axios';
import { CATEGORIES } from '../../utils/MenuCategories/Categories';

const AddProduct = () => {
	const navigate = useNavigate();
	const [selectedImage, setSelectedImage] = useState(null);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
	});

	const handleAddProduct = async (data) => {
		try {
			if (!selectedImage) {
				alert('Please select an image.');
				return;
			}

			const base64Image = await convertImageToBase64(selectedImage);

			const newProduct = {
				...data,
				images: base64Image,
			};

			await axios.post('/products', newProduct);
			const selectedCategory = data.category;
			if (selectedCategory) {
				navigate(`/catalog/${selectedCategory}`);
			} else {
				navigate('/');
			}
			reset();
		} catch (error) {
			alert(error.message || 'An error occurred while adding the product.');
		}
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		setSelectedImage(file);
	};

	const convertImageToBase64 = (image) => {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.readAsDataURL(image);
		});
	};
	return (
		<section className={s.addProduct}>
			<div className={s.container}>
				<div className={s.addProduct__content}>
					<form noValidate className={s.form} onSubmit={handleSubmit(handleAddProduct)}>
						<h2 className={s.form__title}>Add Product</h2>
						<label className={s.form__label} >
							<span className={s.form__label_title}>Title</span>
							<input {...register('title', {
								required: true
							})} placeholder='Enter title' className={s.form__field} type="text" />
						</label>
						<label className={s.form__label} >
							<span className={s.form__label_title}>Image</span>
							<input
						
								type="file"
								accept="image/*"
								onChange={handleImageChange}
								className={s.form__field}
							/>
						</label>
						<label className={s.form__label} >
							<span className={s.form__label_title}>Description</span>
							<input  {...register('description', {
								required: true
							})} placeholder='Enter description' className={s.form__field} type="text" />
						</label>
						<div className={s.form__block}>
							<label className={s.form__label}>
								<span className={s.form__label_title}>Price</span>
								<input  {...register('price', {
									required: true,
									validate: (value) => {
										if (value.startsWith('0')) {
											return "Please remove leading zeros";
										}
										return true;
									}
								})} defaultValue='0' className={s.form__field} type="number" inputMode="numeric" pattern="[0-9]*" />
								{errors.price && (
									<p className={s.error}>{errors.price.message}</p>
								)}
							</label>
						</div>
						<label className={s.form__label}>
							<span className={s.form__label_title}>Category</span>
							<select  {...register('category', {
								required: true
							})} className={s.form__select}>
								<option disabled value="">Select category</option>
								{
									CATEGORIES.map((item) => (
										<option key={item} value={item}>{item}</option>
									))
								}
							</select>
						</label>
						<div className={s.form__btn}>
							<button className={s.button} type='submit'>Create Product</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default AddProduct;
