import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CustomContext } from '../../utils/context/Context';

import s from './BasketTotal.module.scss'

const BasketTotal = () => {
	const navigate = useNavigate()
	const { basket } = useContext(CustomContext)
	console.log(basket)

	return (
		<div className={s.basketTotal}>
			<p className={s.basket}>
			Total: {
				
					basket.reduce((acc, rec) =>
						acc + parseFloat(rec.price.replace(/,/g, '')) * rec.count
						, 0) 
				} USD
			</p>
			<button className={s.basketTotal__create} onClick={() => navigate('/orders')}>
			Place an order
			</button>
		</div>
	);
};

export default BasketTotal;