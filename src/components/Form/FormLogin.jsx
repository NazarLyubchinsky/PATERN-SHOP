import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios/axios";
import { CustomContext } from "../../utils/context/Context";

import s from './Form.module.scss'

const Login = () => {

	const { setUser } = useContext(CustomContext)
	const navigate = useNavigate()

	const loginUser = (e) => {
		e.preventDefault()
		let newUser = {
			email: e.target[0].value,
			password: e.target[1].value
		}

		axios.post('/users', newUser)
			.then(({ data }) => {
				setUser(
					// {
					// 	// token: data.accessToken,
					// 	// ...data.user
					// }
					data
				)

				localStorage.setItem('user', JSON.stringify(
					// 	{
					// 	// token: data.accessToken,
					// 	// ...data.user
					// }
					data
				))
				navigate('/')
			})
			.catch((err) => console.log(err.message))

	}

	return (
		<div className={s.content}>
			<form action="" className={s.form} onSubmit={loginUser}>
				<h2 className={s.form__title}>Вход на LOGOS</h2>
				< input placeholder='Email' type="email" className={s.form__field} />
				<input placeholder='Пароль' type="password" className={s.form__field} />
				<div className={s.form__create}>
					<Link to='/register'>Создать аккаунт</Link>
				</div>

				<button className={s.form__btn} type='submit'>Войти</button>
			</form>
		</div>
	);
};

export default Login;