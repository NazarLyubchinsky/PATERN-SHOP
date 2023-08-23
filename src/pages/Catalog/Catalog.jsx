import axios from '../../utils/axios/axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CATEGORIES } from '../../utils/MenuCategories/MenuCategories'
import Card from './CatalogCard/CatalogCard'

import s from './Catalog.module.scss'

const Catalog = () => {
	const [products, setProducts] = useState([])

	const { category } = useParams();
	useEffect(() => {
		axios(`/products?category=${category}`)
			.then(({ data }) => setProducts(data))
			.catch((err) => console.log('данные не получены'))
	}, [category])
	return (
		<section className={s.catalog}>
			<div className={s.container}>
				<div className={s.catalog__content}>
					<aside className={s.catalog__aside}>
WD
					</aside>
					<div className={s.catalog__right}>
						<h2 className={s.catalog__crumbs}>
							<Link className={s.catalog__crumbs_link} to='/'>Главная</Link>
							<div>/</div>
							<div>{CATEGORIES.find(item => item === category)}</div>
						</h2>
						<div className={s.catalog__row}>
							{
								products.map((item) => (
									<Card key={item.id} item={item} />
								))
							}
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Catalog