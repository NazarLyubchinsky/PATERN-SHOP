import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRootComponent from '../../pages/auth'
import PrivateRoute from '../../utils/router/privateRoute'
import Home from '../Home/Home'

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<PrivateRoute />}>
				<Route path="/" element={<Home />} />
				{/* <Route path="/watchlist" element={<WatchlistComponent />} /> */}
				{/* <Route path="/news" element={<NewsComponent />} /> */}
				{/* <Route path="/settings" element={<SettingsComponent />} /> */}
			</Route>
			<Route path="login" element={<AuthRootComponent />} />
			<Route path="register" element={<AuthRootComponent />} />
		</Routes>
	)
}

export default AppRoutes