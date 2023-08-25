import React, { memo } from 'react'
import DataProducts from '../../utils/data/DataProducts';
import Preloader from '../../components/Preloader/Preloader';

import s from './NewArrivals.module.scss'
import Card from '../../components/Card/Card';

// images

const NewArrivals = () => {

	return (
		<section className={s.arrivals}>
			<h2 className={s.arrivals__title}>New Arrivals</h2>
			<ul className={s.arrivals__list}>
				<DataProductsMemo url="/products">
					{(products) => {
						if (!products) {
							return <Preloader />;
						} else {
							const watchProducts = products.filter(
								(product) => product.category === 'Watches'
							);
							return watchProducts.slice(1, 9).map((product) => (
								<Card key={product.id} item={product} />
							)
							);
						}
					}}
				</DataProductsMemo>
			</ul>
		</section>
	)
}
const DataProductsMemo = memo(DataProducts);
export default NewArrivals