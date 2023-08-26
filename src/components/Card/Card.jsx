import React from 'react';
import s from './Card.module.scss'
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Card = ({ item }) => {
	const navigate = useNavigate()

	const handleImageClick = () => {
		navigate(`${ROUTES.PRODUCT}/${item.id}`);
	};
	return (

		<div className={s.catalog__card}>
			<div className={s.card} key={item.id}>
				<img onClick={handleImageClick} className={s.card__img} src={item.images} alt={item.title} />
				<div className={s.card__text}>
					<p className={s.card__text_title}>{item.title}</p>
					<p>{item.price}</p>
					<div className={s.card__text_button}>
						<button className={`${s.card__text_btn} ${s.header__btn}`}>
							В корзину
							<BsCart3 size={30} />
						</button>
					</div>
				</div>
			</div>


		</div>

	);
};

export default Card;