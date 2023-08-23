import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../../layouts/Layout'
import Catalog from '../../pages/Catalog/Catalog'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import { CustomContext } from '../../utils/context/Context'
import { ROUTES } from '../../utils/routes'
import Home from '../Home/Home'


const AppRoutes = () => {
	const { user } = useContext(CustomContext);
	return (

		<Routes>
			{user && user.email ?
				<Route path={''} element={<Layout />} >
					<Route path='/' element={<Home />} />
					<Route path={`${ROUTES.CATALOG}/:category`} element={<Catalog />} />
				</Route>
				:
				<Route path="/" element={<Register />} />}

			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.REGISTER} element={<Register />} />
		</Routes>


	)
}

export default AppRoutes