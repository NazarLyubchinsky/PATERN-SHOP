
import axios from '../../utils/axios/axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import s from './Product.module.scss';
import img from '../../assets/img/NewSeason/bgRight.png'
import img2 from '../../assets/img/NewSeason/Watch.png'
import { CustomContext } from '../../utils/context/Context';

const Product = () => {
	const [product, setProduct] = useState({});
	const [currentImage, setCurrentImage] = useState('');

	const { id } = useParams();
	const navigate = useNavigate()

	useEffect(() => {
		axios(`/products/${id}`)
			.then(({ data }) => setProduct(data))
			.catch((err) => alert('Error retrieving product'));

		setCurrentImage(''); // Clear currentImage when changing products
	}, [id]);

	const { addBasket, basket } = useContext(CustomContext)
	const isProductInBasket = basket.some((item) => item.id === product.id);
	const handleAddToCart = () => {
		if (!isProductInBasket) {
			addBasket(product); // Add the current product to the basket
		}
	};

	if (!product.id) {
		return <h2>Product not found</h2>;
	}
	return (
		<section className={s.product}>
			<div className={s.product__images}>
				<div
					className={s.product__images_current}
					style={{
						backgroundImage: `url(${currentImage || product.images})`,
					}}
				/>

				<div className={s.product__images_list}>
					{/* Since there is no database, we have to handle it this way. */}
					{product.images && (
						<div
							className={`${s.image} ${currentImage === '' ? s.active : ''}`}
							style={{ backgroundImage: `url(${product.images})` }}
							onClick={() => setCurrentImage('')}
						/>
					)}
					{product.images && (
						<div
							className={`${s.image} ${currentImage === '' ? s.active : ''}`}
							style={{ backgroundImage: `url(${img})` }}
							onClick={() => setCurrentImage(img)}
						/>
					)}
					{product.images && (
						<div
							className={`${s.image} ${currentImage === '' ? s.active : ''}`}
							style={{ backgroundImage: `url(${img2})` }}
							onClick={() => setCurrentImage(img2)}
						/>
					)}
				</div>
			</div>
			<div className={s.product__info}>
				<h1 className={s.product__info_title}>{product.title}</h1>
				<div className={s.product__info_price}>{product.price} USD</div>
				<div className={s.product__info_warranty}>Warranty: 1 year</div>
				<div className={s.product__info_description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur in a corrupti totam! Architecto itaque doloremque corporis nisi nemo commodi reiciendis quis, quidem, impedit quasi autem delectus. Assumenda, magni at!</div>
				<div className={s.product__info_actions}>
					<button
						onClick={handleAddToCart}
						className={`${s.add} ${isProductInBasket ? s.added : ''}`}
					>
						{isProductInBasket ? "Added to Cart" : "Add to Cart"}
					</button>
				</div>

				<div className={s.product__info_bottom}>
					<div className={s.purchase}>19 people purchased</div>

					<button className={s.btn} type='button' onClick={() => navigate(-1)}>Return to store</button>
				</div>
			</div>
		</section>
	);
};

export default Product;
