
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import axios from "../../utils/axios/axios";
import { CustomContext } from "../../utils/context/Context";

import s from './Form.module.scss'

const Form = () => {

	const [status, setStatus] = useState(false)
	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState(false);
	const [eye, setEye] = useState(false);

	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);



	const navigate = useNavigate()


	const { setUser } = useContext(CustomContext)


	const isEmailValid = (email) => {
		const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
		return regex.test(email);
	}

	const registerUser = (e) => {
		e.preventDefault();

		if (password.length < 6) {
			setPasswordError(true);
			return;
		}

		let newUser = {
			email,
			password: e.target[0].value
		};

		axios.get(`/users?email=${email}`)
			.then(response => {
				const existingUser = response.data[0];
				if (existingUser) {
					alert("User with this email already exists");
				} else {
					axios.post('/users', newUser)
						.then(({ data }) => {
							setUser(data);
							localStorage.setItem('user', JSON.stringify(data));
							navigate('/');
						})
						.catch((err) => console.log(err.message));
				}
			})
			.catch(error => console.log(error.message));
	};



	return (
		<div className={s.content}>
			<form className={s.form} onSubmit={registerUser}>

				{
					status &&
					<p className={s.form__email} onClick={() => setStatus(false)}> {email}
						{/* <FaPencilAlt /> */}
					</p>
				}

				<h2 className={s.form__title}>
					{
						status ? 'Create a password to access your account on any device' : 'Registration'
					}
				</h2>

				{status && (
					<>
						<div className={s.form__password}>
							<input
								className={s.form__field}
								placeholder='Create a password'
								type={eye ? 'text' : 'password'}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<span className={s.form__eye} onClick={() => setEye(prev => !prev)}>
								{eye ? <AiFillEyeInvisible /> : <AiFillEye />}
							</span>
						</div>
						{passwordError && <p className={s.form__error}>Password must be at least 6 characters long.</p>}
						<button className={s.form__btn} type='submit' >Create Account</button>
					</>
				)}

				{
					!status &&
					<>
						<input value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								setEmailError(false);
							}}
							className={s.form__field}
							placeholder='Enter Email'
							type="email"
							required />
						{emailError && <p className={s.form__error}>Enter a valid email.</p>}
						<button
							type='submit'
							onClick={(e) => {
								e.preventDefault();

								if (email.trim() === '' || !isEmailValid(email)) {
									setEmailError(true);
								} else {
									setEmailError(false);
									setStatus(true);
								}
							}}
							className={s.form__btn}
							disabled={emailError}
						>
							Continue
						</button>
						<Link to='/login'>I already have an account</Link>
					</>
				}
			</form>
		</div>
	);
};

export default Form;





