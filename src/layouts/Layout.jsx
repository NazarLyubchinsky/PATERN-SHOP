import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer';
import Header from './Header/index'

import s from './Layout.module.scss'

const Layout = () => {
	return (
		<div className={s.layout}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
export default Layout