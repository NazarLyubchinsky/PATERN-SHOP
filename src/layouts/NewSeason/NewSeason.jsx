import React, { useEffect, useState } from 'react'

import s from './NewSeason.module.scss'

// images
import WATCH from '../../assets/img/NewSeason/Watch.png'
import axios from '../../utils/axios/axios'

const NewSeason = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios(`/products`)
			.then(({ data }) => setProducts(data))
			.catch((err) => console.log('данные не получены'))
	}, [])
	return (
		<section className={s.season}>
			<div className={s.season__left}>
				<h2 className={s.season__left_title}>SEASON 2022/23</h2>
				<div className={s.season__left_cards}>

					{products.slice(5, 8).map((product) => (
						<div className={s.card} key={product.id}>
							<div className={s.card__img}>
								{/* <img src={product.images} alt={product.title} /> */}
								<img src={WATCH} alt={product.title} />
							</div>
							<div className={s.card__text}>
								<p>{product.title}</p>
								<p>{product.price}</p>
							</div>
						</div>
					))}
				
				</div>
			</div>
			<div className={s.season__right}>
				<div className={s.season__right_img}>
				</div>
			</div>
		</section>
	)
}

export default NewSeason

