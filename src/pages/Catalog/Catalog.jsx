// import axios from '../../utils/axios/axios'
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { CATEGORIES } from '../../utils/MenuCategories/Categories'
// import Card from '../../components/Card/Card'

// import s from './Catalog.module.scss'
// import Preloader from '../../components/Preloader/Preloader'

// const Catalog = () => {
// 	const [products, setProducts] = useState([])

// 	const { category } = useParams();
// 	useEffect(() => {
// 		axios(`/products?category=${category}`)
// 			.then(({ data }) => setProducts(data))
// 			.catch((err) => console.log('данные не получены'))
// 	}, [category])
// 	return (
// 		<section className={s.catalog}>
// 			<div className={s.container}>
// 				<div className={s.catalog__content}>
// 					<aside className={s.catalog__aside}>
// 						WD
// 					</aside>
// 					<div className={s.catalog__right}>
// 						<h2 className={s.catalog__crumbs}>
// 							<Link className={s.catalog__crumbs_link} to='/'>Home</Link>
// 							<div>/</div>
// 							<div>{CATEGORIES.find(item => item === category)}</div>
// 						</h2>
// 						<div className={s.catalog__row}>
// 							{
// 								!products ? (
// 									<Preloader /> 
// 								) : (
// 									products.map((item) => (
// 										<Card key={item.id} item={item} />
// 									))
// 								)}
// 						</div>
// 					</div>

// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// export default Catalog





import axios from '../../utils/axios/axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CATEGORIES } from '../../utils/MenuCategories/Categories'
import Card from '../../components/Card/Card'

import s from './Catalog.module.scss'
import Preloader from '../../components/Preloader/Preloader'
import CategorySelect from '../CategorySelect/CategorySelect'

const Catalog = () => {
	const [products, setProducts] = useState([])
	const [order, setOrder] = useState('default')

	const [title, setTitle] = useState('')


	const { category } = useParams();
	useEffect(() => {
		let categories = `${category !== 'all' ? 'categories=' + category + '&' : ''}`

		const selectOrder = () => {
			switch (order) {
				case 'asc': {
					return `_sort=price&_order=asc&`
				}
				case 'desc': {
					return `_sort=price&_order=desc&`
				}
				case 'abc': {
					return `_sort=title&_order=asc&`
				}
				case 'weight': {
					return `_sort=weight&_order=asc&`
				}
				case 'calories': {
					return `_sort=calories&_order=asc&`
				}
				case 'default': {
					return ''
				}
				default: {
					return ''; // Handle the default case
				}
			}
		}
		let orders = selectOrder()
		let titleFilter = `${title.length !== 0 ? 'title_like=' + title + '&' : ''}`
		axios(`/products?${categories}${orders}${titleFilter}`)
			.then(({ data }) => setProducts(data))
			.catch((err) => console.log('данные не получены'))
	}, [category, order, title])
	return (
		<section className={s.catalog}>
			<div className={s.container}>
				<div className={s.catalog__content}>
					<aside className={s.catalog__aside} >
					<CategorySelect/>
					</aside>
					<div className={s.catalog__right}>
						<h2 className={s.catalog__crumbs}>
							<Link to='/'>Home</Link> / {
								category !== 'all' ? CATEGORIES.find(item => item === category) : 'Все продукты'
							}
							{/* <Link className={s.catalog__crumbs_link} to='/'>Home</Link> */}
							{/* <div>/</div>
							<div>{CATEGORIES.find(item => item === category)}</div> */}
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