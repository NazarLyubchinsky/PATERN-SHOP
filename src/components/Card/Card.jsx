import React, { useContext } from 'react';
import s from './Card.module.scss'
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { CustomContext } from '../../utils/context/Context';

const Card = ({ item }) => {
	const navigate = useNavigate()

	const handleImageClick = () => {
		navigate(`${ROUTES.PRODUCT}/${item.id}`);
	};

	const { addBasket, basket } = useContext(CustomContext)
	return (

		<div className={s.catalog__card}>
			<div className={s.card} key={item.id}>
				<img onClick={handleImageClick} className={s.card__img} src={item.images} alt={item.title} />
				<div className={s.card__text}>
					<p className={s.card__text_title}>{item.title}</p>
					<p>{item.price} USD</p>
					<div className={s.card__text_button}>
						{
							basket.findIndex(product => product.id === item.id) > -1
								? <button type='button' className={`${s.card__text_btn} ${s.header__btn}`}>
									Аdded
									<BsCart3 size={20} />
								</button>
								: <button
									onClick={() => addBasket(item)}
									className={`${s.card__text_btn} ${s.header__btn}`}>
									Basket
									<BsCart3 size={30} />
								</button>
						}
					</div>
				</div>
			</div>


		</div >

	);
};

export default Card;