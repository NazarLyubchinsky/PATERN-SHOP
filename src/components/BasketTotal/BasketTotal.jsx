import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CustomContext } from '../../utils/context/Context';

import s from './BasketTotal.module.scss'

const BasketTotal = () => {
	const navigate = useNavigate()
	const { basket } = useContext(CustomContext)
	console.log(basket)
	const hundleCreate = () => {
		if (basket.length) {
			navigate('/orders')
		} else {

		}
	}

	return (
		<div className={s.basketTotal}>
			{basket.length ?
				<p className={s.basket}>
					Total: {

						basket.reduce((acc, rec) =>
							acc + parseFloat(rec.price.replace(/,/g, '')) * rec.count
							, 0)
					} USD
				</p>: ''
}
			<button className={s.basketTotal__create} onClick={hundleCreate}>
				{basket.length ? 'Place an order' : 'Cart is empty'}
			</button>
		</div>
	);
};

export default BasketTotal;