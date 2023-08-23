import React, { useEffect, useState } from 'react'
import s from './NewArrivals.module.scss'

import WATCH from '../../assets/img/NewSeason/Watch.png'
import axios from '../../utils/axios/axios'
import { BsCart3 } from "react-icons/bs";
const NewArrivals = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios(`/products`)
			.then(({ data }) => setProducts(data))
			.catch((err) => console.log('данные не получены'))
	}, [])
	return (
		<section className={s.arrivals}>
			<h2 className={s.arrivals__title}>New Arrivals</h2>
			<ul className={s.arrivals__list}>
				{products.slice(0, 8).map((product) => (
					<div className={s.card} key={product.id}>
						<div className={s.card__img}>
							{/* <img src={product.images} alt={product.title} /> */}
							<img src={WATCH} alt={product.title} />
						</div>
						<div className={s.card__text}>
							<p className={s.card__text_title}>{product.title}</p>
							<p>{product.price}</p>
							<button className={`${s.card__text_btn} ${s.header__btn}`}>
								В корзину
								<BsCart3 size={30} />
							</button>
						</div>
					</div>
				))}
			</ul>
		</section>
	)
}

export default NewArrivals