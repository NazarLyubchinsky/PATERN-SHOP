import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import s from './Orders.module.scss'
import OrdersSelect from '../../components/OrdersSelect/OrdersSelect';
import OrdersRadio from '../../components/OrdersRadio/OrdersRadio';

const Orders = () => {
	const {
		reset,
		handleSubmit,
		register,
	} = useForm();
	const navigate = useNavigate();
	const [delivery, setDelivery] = useState('delivery');
	const [buy, setBuy] = useState('online');



	const onSubmit = (data) => {
		// Handle form submission here
		alert('Successfully, look console')
		console.log(data);
		reset();
	};

	return (
		<div className={s.orders}>
			<div className={s.container}>
				<div className={s.orders__content}>
					<div className={s.orders__back}>
						<button className={s.orders__back_btn} onClick={() => navigate(-1)}>
							Back to Cart
						</button>
					</div>
					{/* <Title title='Order Placement' /> */}
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={s.orders__contact}>
							<h3 className={s.orders__contact_title}>
								1. Contact Information
							</h3>
							<label className={s.orders__contact_label}>
								<input type="text" required className={s.orders__contact_input} placeholder='Name*' {...register('name')} />
								<input type="text" required className={s.orders__contact_input} placeholder='Phone*' {...register('number')} />
							</label>
						</div>
						<div className={s.orders__contact}>
							<h3 className={s.orders__contact_title}>
								2. Delivery Options
							</h3>
							<div className={s.orders__contact_btns}>
								<div className={`${s.orders__contact_btn} ${delivery === 'delivery' ? s.active_btn : ''}`}
									onClick={() => setDelivery('delivery')}>
									Delivery
								</div>
								<div className={`${s.orders__contact_btn} ${delivery === 'pickup' ? s.active_btn : ''}`}
									onClick={() => setDelivery('pickup')}>
									Pickup
								</div>
							</div>
							{
								delivery === 'delivery' ? <>
									<h3 className={s.orders__contact_title}>
										Delivery Address
									</h3>
									<label className={s.orders__contact_label}>
										<input type="text" required className={s.orders__contact_input} placeholder='Street*' {...register('street')} />
										<input type="text" required className={s.orders__contact_input} placeholder='House Number*' {...register('home')} />
									</label>
									<label className={s.orders__contact_label}>
										<input type="text" required className={s.orders__contact_input} placeholder='Apartment/Office No.' {...register('numberHome')} />
										<input type="text" required className={s.orders__contact_input} placeholder='Entrance' {...register('Entranceway')} />
										<input type="text" required className={s.orders__contact_input} placeholder='Floor' {...register('Floor')} />
									</label>
									<label className={s.orders__contact_label}>
										<input type="text" required className={s.orders__contact_input} placeholder='Comment' {...register('comment')} />
									</label>
								</> : <>
									<h3 className={s.orders__contact_title}>
										Choose Store
									</h3>
									<OrdersSelect />
								</>
							}
							<div className={s.orders__contact}>
								<h3 className={s.orders__contact_title}> Payment
								</h3>
								<div className={s.orders__contact_btns}>
									<div className={`${s.orders__contact_btn} ${buy === 'online' ? s.active_btn : ''}`}
										onClick={() => setBuy('online')}>
										Pay Online
									</div>
									<div className={`${s.orders__contact_btn} ${buy === 'card' ? s.active_btn : ''}`}
										onClick={() => setBuy('card')}>
										Card Payment to Courier
									</div>
									<div className={`${s.orders__contact_btn} ${buy === 'cash' ? s.active_btn : ''}`}
										onClick={() => setBuy('cash')}>
										Cash on Pickup
									</div>
								</div>
								{
									buy === 'online' ?
										<input type="text" required className={s.orders__contact_input} placeholder='online payment' {...register('online')} />
										: buy === 'card' ? <input type="text" required className={s.orders__contact_input} placeholder='card number' />
											: <input type="text" required className={s.orders__contact_input} placeholder='Change from' {...register('numberCard')} />
								}
							</div>
							<div className={s.orders__contact}>
								<h3 className={s.orders__contact_title}>
									Would You Like Us to Call?
								</h3>
								<OrdersRadio />
							</div>
							<div className={s.orders__contact}>
								<label className={s.orders__contact_label} >
									<div className={s.orders__contact_checkbox} >
										<input
											type='checkbox'
											required
											value='I agree to the processing of my personal data in accordance with the Terms'
											{...register('agree')}
											className={s.orders__contact_hidden}
										/>
										<span className={s.orders__contact_checkmark}>	I agree to the processing of my personal data in accordance with the Terms</span>

									</div>
								</label>
								<div style={{
									display: 'flex',
									justifyContent: 'center',
									marginTop: '15px'
								}}>
									<button className={`${s.orders__contact_btn} ${s.hover}`} type='submit' style={{
									}}>
										Place Order
									</button>
								</div>
							</div>
						</div>
					</form>
				</div >
			</div >
		</div >
	);
};

export default Orders;
