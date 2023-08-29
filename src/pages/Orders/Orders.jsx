import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import OrderSelect from "../Catalog/OrderSelect/OrderSelect";
// import OrdersSelect from "../../components/OrdersSelect/OrdersSelect";
// import OrdersRadio from "../../components/OrdersRadio/OrdersRadio";
import { useForm } from "react-hook-form";
import s from './Orders.module.scss'

const Orders = () => {
	const {
		// reset,
		// handleSubmit,
		register
	} = useForm(

		)
	const navigate = useNavigate()
	const [delivery, setDelivery] = useState('delivery')
	const [buy, setBuy] = useState('online')
	const [time, setTime] = useState('time1')
	return (
		<div className={s.orders}>
			<div className={s.container}>
				<div className={s.orders__content}>
					<button className={s.orders__back} onClick={() => navigate(-1)}>
						в корзину
					</button>
					{/* <Title title='Оформление заказа' /> */}
					<div className={s.orders__contact}>
						<h3 className={s.orders__contact_title}>
							1. Контактная информация
						</h3>
						<label className={s.orders__contact_label}>
							<input type="text" className={s.orders__contact_input} placeholder='Имя*' {...register('name')} />
							<input type="text" className={s.orders__contact_input} placeholder='Телефон*'{...register('number')} />
						</label>
					</div>
					<div className={s.orders__contact}>
						<h3 className={s.orders__contact_title}>
							1. Контактная информация
						</h3>
						<div className={s.orders__contact_btns}>
							<button className={s.orders__contact_btn} onClick={() => setDelivery('delivery')}>
								Доставка
							</button>
							<button className={s.orders__contact_btn} onClick={() => setDelivery('pickup')}>
								Самовывоз
							</button>
						</div>
						{
							delivery === 'delivery' ? <>
								<h3 className={s.orders__contact_title}>
									Адрес доставки
								</h3>
								<label className={s.orders__contact_label}>
									<input type="text" className={s.orders__contact_input} placeholder='Укажите улицу*' {...register('street')} />
									<input type="text" className={s.orders__contact_input} placeholder='Номер дома*'{...register('home')} />
								</label>
								<label className={s.orders__contact_label}>
									<input type="text" className={s.orders__contact_input} placeholder='№ квартиры/офиса' {...register('numberHome')} />
									<input type="text" className={s.orders__contact_input} placeholder='Подъезд' {...register('Entranceway')} />
									<input type="text" className={s.orders__contact_input} placeholder='Этаж' {...register('Floor')} />

								</label>
								<label className={s.orders__contact_label}>
									<input type="text" className={s.orders__contact_input} placeholder='Комментарий' {...register('comment')} />
								</label>
							</> : <>
								<h3 className={s.orders__contact_title}>
									Выберите ресторан
								</h3>
								{/* <OrdersSelect /> */}
							</>
						}
						<div className={s.orders__contact}>
							<h3 className={s.orders__contact_title}> Оплатить
							</h3>
							<div className={s.orders__contact_btns}>
								<button className={s.orders__contact_btn} onClick={() => setBuy('online')}>
									Оплата онлайн
								</button>
								<button className={s.orders__contact_btn} onClick={() => setBuy('card')}>
									Курьеру картой
								</button>
								<button className={s.orders__contact_btn} onClick={() => setBuy('nal')}>
									Самовывоз
								</button>
							</div>
							{
								buy === 'online' ?
									<input type="text" className={s.orders__contact_input} placeholder='online' {...register('online')} />
									: buy === 'card' ? <input type="text" className={s.orders__contact_input} placeholder='card number' />
										: <input type="text" className={s.orders__contact_input} placeholder='Сдача с' {...register('numberCard')} />

							}
						</div>
						<div className={s.orders__contact}>
							<h3 className={s.orders__contact_title}>
								3. Оплатить
							</h3>
							<div className={s.orders__contact_btns}>
								<button className={s.orders__contact_btn} onClick={() => setTime('time1')}>
									В ближайшее время
								</button>
								<button className={s.orders__contact_btn} onClick={() => setTime('time2')}>
									Ко времени
								</button>
								<input type="number" className={s.orders__contact_input} placeholder='Укажите время' {...register('time')} />
							</div>
							{
								time === 'time1' ?
									<input type="number" className={s.orders__contact_input} placeholder='Кол-во персон' {...register('person')} />
									: <input type="number" className={s.orders__contact_input} placeholder='Кол-во персон' {...register('')} />
							}
							<h3 className={s.orders__contact_title}>
								Хотите мы позвоним?
							</h3>
							{/* <OrdersRadio /> */}
						</div>
						<div className={s.orders__contact}>
							<p className={s.orders__contact}>
								Я согласен на обработку моих перс. данных в соответствии с Условиями
							</p>
							<button className={s.orders__contact_btn} type='submit'>
								Оформить заказ
							</button>
						</div>

					</div>
				</div>
			</div >

		</div >
	);
};

export default Orders;