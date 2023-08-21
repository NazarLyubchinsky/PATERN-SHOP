import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import { FaPencilAlt } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import axios from "../../utils/axios/axios";
import { CustomContext } from "../../utils/context/Context";

import s from './Form.module.scss'

const Form = () => {

	const [status, setStatus] = useState(false)
	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState(false);


	const navigate = useNavigate()

	const [eye, setEye] = useState(false)

	const { user, setUser } = useContext(CustomContext)


	console.log(user)
	const registerUser = (e) => {
		e.preventDefault()

		let newUser = {
			email,
			password: e.target[0].value
		}
		axios.post('/register', newUser)
			.then(({ data }) => {
				setUser({
					token: data.accessToken,
					...data.user
				})

				localStorage.setItem('user', JSON.stringify({
					token: data.accessToken,
					...data.user
				}))
				navigate('/home')
			})
			.catch((err) => console.log(err.message))

	}

	return (
		<div className={s.content}>
			<form  className={s.form} onSubmit={registerUser}>

				{
					status && <p className={s.form__email} onClick={() => setStatus(false)}>{email}
						{/* <FaPencilAlt /> */}
					</p>
				}

				<h2 className={s.form__title}>
					{
						status ? 'Create a password to access your account on any device' : 'Registration'
					}
				</h2>

				{
					status && <>
						<div className={s.form__password}>
							<input className={s.form__field} placeholder='Create a password' type={eye ? 'text' : 'password'} required />
							<span className={s.form__eye} onClick={() => setEye(prev => !prev)}>
								{
									eye ? <AiFillEyeInvisible /> : <AiFillEye />
								}

							</span>
						</div>

						<button className={s.form__btn} type='submit'>Create Account</button>
					</>
				}

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
						<button type='submit'
							onClick={() => {
								if (email.trim() === '') {
									setEmailError(true);
								} else {
									setEmailError(false);
									setStatus(true);
								}
							}}
							className={s.form__btn}
							disabled={emailError}>Continue</button>
						<Link to='/login'>I already have an account</Link>
					</>
				}

			</form>
		</div>
	);
};

export default Form;
