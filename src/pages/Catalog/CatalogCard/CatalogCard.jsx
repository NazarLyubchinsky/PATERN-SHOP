import React from 'react';
import s from './CatalogCard.module.scss'
import { BsCart3 } from "react-icons/bs";

const Card = ({ item }) => {

	// const navigate = useNavigate()
	return (
		// <div className={s.catalog__card}>
		// 	<img
		// 		onClick={() => navigate(`/product/${item.id}`)}
		// 		src={`${item.images}`}
		// 		alt={item.title}
		// 		className={s.catalog__card_img}
		// 	/>
		// 	<div className={s.catalog__card_info}>
		// 		<div className={s.catalog__card_name}>
		// 			<h3 className={s.catalog__card_title}>
		// 				{item.title}
		// 			</h3>
		// 		</div>
		// 		<p className={s.catalog__card_desc}>
		// 			{item.description}
		// 		</p>
		// 		<div className={s.catalog__card_buy}>
		// 			<p className={s.catalog__card_price}>
		// 				{item.price} ₽
		// 			</p>
		// 			<button className={`${s.catalog__card_btn} ${s.header__btn}`}>
		// 				В корзину
		// 				<BsCart3 size={20} />
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>
		<div className={s.catalog__card}>
			<div className={s.card} key={item.id}>
				<img className={s.card__img} src={item.images} alt={item.title} />
				<div className={s.card__text}>
					<p className={s.card__text_title}>{item.title}</p>
					<p>{item.price}</p>
					<button className={`${s.card__text_btn} ${s.header__btn}`}>
						В корзину
						<BsCart3 size={30} />
					</button>
				</div>
			</div>


		</div>

	);
};

export default Card;