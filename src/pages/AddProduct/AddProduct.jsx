/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form";
import s from './AddProduct.module.scss'
import axios from '../../utils/axios/axios'
import { CATEGORIES } from '../../utils/MenuCategories/Categories'

const AddProduct = () => {
	const navigate = useNavigate();

	const {
		register,
		reset,
		handleSubmit,
		formState: {
			errors
		}
	} = useForm({
		mode: "onBlur"
	})
	const handleAddProduct = (data) => {
		const newProduct = {
			...data,
			calories: data.protein * 4 + data.fats * 9 + data.carbohydrates * 4
		}

		axios.post('/products', newProduct)
			.then(() => {
				navigate('/')
				reset()
			}).catch((err) => alert(err.message))

	}
	return (
		<section className={s.addProduct}>
			<div className={s.container}>
				<div className={s.addProduct__content}>
					<form noValidate className={s.form} onSubmit={handleSubmit(handleAddProduct)}>
						<h2 className={s.form__title}>Добавление продукта</h2>

						<label className={s.form__label} >
							<span className={s.form__label_title}>Название</span>
							<input {...register('title', {
								required: true
							})} placeholder='Введите название' className={s.form__field} type="text" />
						</label>

						<label className={s.form__label} >
							<span className={s.form__label_title}>Картинка</span>
							<input  {...register('image', {
								required: true
							})} placeholder='Введите ссылку ' className={s.form__field} type="text" />
						</label>


						<label className={s.form__label} >
							<span className={s.form__label_title}>Описание</span>
							<input  {...register('description', {
								required: true
							})} placeholder='Введите описание' className={s.form__field} type="text" />
						</label>

						<div className={s.form__block}>
							<label className={s.form__label}>
								<span className={s.form__label_title}>Цена</span>
								<input  {...register('price', {
									required: true
								})} defaultValue='0' className={s.form__field} type="number" />
							</label>

							<label className={s.form__label} >
								<span className={s.form__label_title}>Вес</span>
								<input  {...register('weight', {
									required: true
								})} defaultValue='0' className={s.form__field} type="number" />
							</label>
						</div>

						<div className={s.form__block}>
							<label className={s.form__label} >
								<span className={s.form__label_title}>Белки</span>
								<input  {...register('protein', {
									required: true
								})} defaultValue='0' className={s.form__field} type="number" />
							</label>
							<label className={s.form__label} >
								<span className={s.form__label_title}>Жиры</span>
								<input  {...register('fats', {
									required: true
								})} defaultValue='0' className={s.form__field} type="number" />
							</label>
							<label className={s.form__label} >
								<span className={s.form__label_title}>Углеводы</span>
								<input  {...register('carbohydrates', {
									required: true
								})} defaultValue='0' className={s.form__field} type="number" />
							</label>
						</div>


						<label className={s.form__label}>
							<span className={s.form__label_title}>Категория</span>
							<select  {...register('category', {
								required: true
							})} className={s.form__select}>
								<option disabled value="">Выберите категорию</option>
								{
									CATEGORIES.map((item) => (
										<option key={item} value={item}>{item}</option>
									))
								}
							</select>
						</label>

						<button className={s.form__btn} type='submit'>Создать продукт</button>

					</form>
				</div>

			</div>
		</section>
	)
}

export default AddProduct