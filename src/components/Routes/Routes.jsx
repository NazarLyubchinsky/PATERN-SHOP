import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../../layouts/Layout'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import { CustomContext } from '../../utils/context/Context'
import Home from '../Home/Home'



const AppRoutes = () => {
	const { user } = useContext(CustomContext);
	console.log(user)
	return (


		<Routes>
			{user && user.email ?
				<Route path='/' element={<Layout />} >
					<Route path='/' element={<Home />} />
				</Route>
				:
				<Route path="/" element={<Register />} />}

			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>


	)
}

export default AppRoutes