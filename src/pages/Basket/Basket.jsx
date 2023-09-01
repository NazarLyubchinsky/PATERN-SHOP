import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BasketTotal from '../../components/BasketTotal/BasketTotal';
import { CustomContext } from '../../utils/context/Context';
import { ROUTES } from '../../utils/routes';
import s from './Basket.module.scss'

const Basket = () => {
	const { basket, minusOneBasket, plusOneBasket, delBasket } = useContext(CustomContext)

	const navigate = useNavigate()

	return (
		<section className={s.basket}>
			<div className={s.container}>
				<div className={s.basket__top}>
					<Link className={s.basket__back} to='/catalog'>Back to menu</Link>
					<p className={s.basket__count}>(in the basket {basket.length} items)</p>
				</div>

				<ul className={s.basket__list}>
					{basket.map((item) => (
						<li key={item.id} className={s.basket__item}>
							<img className={s.basket__item_img} src={item.images} alt="" />
							<p onClick={() => {
								navigate(`${ROUTES.PRODUCT}/${item.id}`);
							}} className={s.basket__item_title}>{item.title}</p>

							<div className={s.basket__item_right}>
								<div className={s.basket__item_count}>
									<button type='button' onClick={() => minusOneBasket(item.id)} className={s.basket__item_minus}>-</button>
									<span className={s.basket__item_count_num}>
										{item.count}
									</span>
									<button type='button' onClick={() => plusOneBasket(item.id)} className={s.basket__item_plus}>+</button>
								</div>

								<p className={s.basket__item_price}>
									{item.price * item.count} USD
								</p>

								<button type='button' onClick={() => delBasket(item.id)} className={s.basket__item_del}>X</button>
							</div>
						</li>
					))}
				</ul>
				<BasketTotal />
			</div>
		</section>
	);
};

export default Basket;