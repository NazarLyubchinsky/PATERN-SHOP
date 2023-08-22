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
		const email = e.target[0].value;
		const password = e.target[1].value;

		axios.get('/users').then((response) => {
			const users = response.data;
			const user = users.find((u) => u.email === email);

			if (user && user.password === password) {
				setUser(user);
				localStorage.setItem('user', JSON.stringify(user));
				navigate('/');
			} else {
				alert("Неправильний email або пароль");
			}
		})
			.catch((err) => console.log(err.message));
	};

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