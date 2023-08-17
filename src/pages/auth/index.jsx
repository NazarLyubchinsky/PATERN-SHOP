import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// 
import LoginPage from './login/LoginPage'
import RegisterPage from './register/RegisterPage'

// styles
import s from './index.module.scss'
import { instance } from '../../utils/axios/axios'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../../stores/slice/authSlice'


const AuthRootComponent = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('')
	const [name, setName] = useState('')

	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (location.pathname === '/login') {
			try {
				const userData = {
					name: "і",
					email,
					password,
					avatar: "https://example.com/avatar.jpg"
				}
				const user = await axios.post('https://api.escuelajs.co/api/v1/users', userData)
				await dispatch(login(user.data))
				navigate('/')
			} catch (e) {
				return e
			}
		} else {
			if (password === repeatPassword) {
				const userData = {
					name,
					email,
					password,
					avatar: "https://example.com/avatar.jpg",
					repeatPassword
				}
				const newUser = await axios.post('https://api.escuelajs.co/api/v1/users', userData)
				console.log(newUser)
			} else {
				alert("passwords don't match")
			}
		}
	}
	return (
		<div className={s.auth}>
			<div className={s.overlay}
			//  onClick={closeForm} 
			>
				<form className={s.forms} onSubmit={handleSubmit}>

					{location.pathname === '/login' ?
						<LoginPage
							setEmail={setEmail}
							setPassword={setPassword}
						/>
						: location.pathname === '/register' ?
							<RegisterPage
								setEmail={setEmail}
								setPassword={setPassword}
								setRepeatPassword={setRepeatPassword}
								setName={setName}
							// setUsername={setUsername}
							/>
							: null}
				</form>
			</div>
		</div >
	)
}

export default AuthRootComponent