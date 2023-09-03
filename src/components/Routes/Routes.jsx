import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from '../../layouts/Layout'
import AddProduct from '../../pages/AddProduct/AddProduct'
import Basket from '../../pages/Basket/Basket'
import Catalog from '../../pages/Catalog/Catalog'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login'
import Orders from '../../pages/Orders/Orders'
import Product from '../../pages/Product/Product'
import Register from '../../pages/Register/Register'

import { CustomContext } from '../../utils/context/Context'
import { ROUTES } from '../../utils/routes'
import PageNone from '../PageNone/PageNone'


const AppRoutes = () => {
	const { user } = useContext(CustomContext);

	return (

		<Routes>
			{user && user.email ?
				<Route path={''} element={<Layout />} >
					<Route path='/' element={<Home />} />
					<Route path={`${ROUTES.CATALOG}/:category`} element={<Catalog />} />
					<Route path={`${ROUTES.PRODUCT}/:id`} element={<Product />} />
					<Route path={`${ROUTES.ADD}`} element={<AddProduct />} />
					<Route path={`${ROUTES.BASKET}`} element={<Basket />} />
					<Route path={`${ROUTES.ORDERS}`} element={<Orders />} />
					<Route path='*' element={<PageNone status={404}/>} />
					{/* <Route path="*" element={<PageNone status={404} />} */}
				</Route>
				:
				<Route path="/" element={<Register />} />}

			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.REGISTER} element={<Register />} />
		</Routes>


	)
}

export default AppRoutes