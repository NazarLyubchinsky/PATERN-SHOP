import axios from '../../utils/axios/axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CATEGORIES } from '../../utils/MenuCategories/Categories'
import Card from '../../components/Card/Card'

import s from './Catalog.module.scss'
import Preloader from '../../components/Preloader/Preloader'
import CategorySelect from './CategorySelect/CategorySelect'
import OrderSelect from './OrderSelect/OrderSelect'
import TitleSearch from './TitleSearch/TitleSearch'

const Catalog = () => {
	const [products, setProducts] = useState([])
	const [order, setOrder] = useState('default')

	const [title, setTitle] = useState('')

	const { category } = useParams();
	useEffect(() => {
		const selectOrder = () => {
			switch (order) {
				case 'asc': {
					return `_sort=price&_order=asc&`
				}
				case 'desc': {
					return `_sort=price&_order=desc&`
				}

				case 'default': {
					return ''
				}
				default: {
					return '';
				}
			}
		}
		let orders = selectOrder()
		let titleFilter = `${title.length !== 0 ? 'title_like=' + title + '&' : ''}`
		let categories = category !== 'all' ? `/products?category=${category}&${orders}${titleFilter}` : `/products?${orders}${titleFilter}`;
		axios(categories)
			.then(({ data }) => setProducts(data))
			.catch((err) => console.log('данные не получены'))
	}, [category, order, title])
	return (
		<section className={s.catalog}>
			<div className={s.container}>
				<div className={s.catalog__content}>
					<aside className={s.catalog__aside} >
						<div className={s.catalog__aside_item}  >
							<CategorySelect />
						</div>
						<div className={s.catalog__aside_item} >
							<OrderSelect order={order} setOrder={setOrder} />
						</div>
						<div className={s.catalog__aside_item} >
							<TitleSearch title={title} setTitle={setTitle} />
						</div>
					</aside>
					<div className={s.catalog__right}>
						<h2 className={s.catalog__crumbs}>
							<Link to='/'>Home</Link> / {
								category !== 'all' ? CATEGORIES.find(item => item === category) : 'All Products'
							}
						</h2>
						<div className={s.catalog__row}>
							{
								!products ? (
									<Preloader />
								) : (
									products.map((item) => (
										<Card key={item.id} item={item} />
									))
								)}
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Catalog