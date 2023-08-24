import React, { memo } from 'react'
import { BsCart3 } from "react-icons/bs";
import DataProducts from '../../utils/data/DataProducts';
import Preloader from '../../components/Preloader/Preloader';

import s from './NewArrivals.module.scss'

// images
import WATCH from '../../assets/img/NewSeason/Watch.png'

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
								<div className={s.card} key={product.id}>
									<div className={s.card__img}>
										<img src={product.images} alt={product.title} />
										{/* <img src={WATCH} alt={product.title} /> */}
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
							));
						}
					}}
				</DataProductsMemo>
			</ul>
		</section>
	)
}
const DataProductsMemo = memo(DataProducts);
export default NewArrivals