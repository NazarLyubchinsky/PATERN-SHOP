import React, { useState } from 'react'
import s from './BurgerModal.module.scss'
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import NavigateList from './NavigateList/NavigateList';

const BurgerModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleButtonClick = () => {
		setIsModalOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = 'auto';
		
	};

	return (
		<>
			<div className={s.modal_button_container}>
				<div className={s.open_modal_button} onClick={handleButtonClick}>
					<MenuIcon />
				</div>

				{isModalOpen && (
					<>
						<div className={s.modal_overlay} onClick={closeModal}>
						</div>
						<div className={s.modal_content}>
							<section className={s.sidebar} >
								<span className={s.close_modal_button} onClick={closeModal}>
									&times;
								</span>
								<Link to='/' className={s.title} onClick={closeModal}>PATERN</Link>
								<nav className={s.nav}>
									<ul className={s.menu}>
											<li >
												<NavLink
													className={({ isActive }) =>
														`${s.link} ${isActive ? s.active : ''}`
													}
													onClick={closeModal}
												>
												</NavLink>
											</li>
									</ul>
									<NavigateList styleProp='list__modal' closeModal={closeModal}  />


									<ul className={s.user}>
										{/* <li className={s.account}>
											<NavLink to={ROUTES.FAVORITE} className={({ isActive }) =>
												`${s.favourites} ${isActive ? s.active : ''}`
											} onClick={closeModal}>
												<img src={favoriteImg} alt={favoriteImg} />Favourites

											</NavLink>
										</li> */}
									</ul>
								</nav>
							</section >

						</div>
					</>
				)}
			</div>
		</>
	)
}

export default BurgerModal