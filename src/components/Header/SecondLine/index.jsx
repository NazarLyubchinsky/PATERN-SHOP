import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'
// style
import s from './index.module.scss'

const SecondLine = () => {
	return (
		<section className={s.secondLine}>
			<div className={s.secondLine__wrapper}>
				<div className={s.secondLine__logo}>PATERN</div>
				<div className={s.secondLine__navigation}>
					<ul className={s.secondLine__list}>
						<li className={s.secondLine__item}>
							<NavLink to={ROUTES.HOME} style={({ isActive }) => ({
								color: isActive ? 'greenyellow' : 'white'
							})}>Liked</NavLink>
						</li>
						<li className={s.secondLine__item}>
							<NavLink to={ROUTES.CET} style={({ isActive }) => ({
								color: isActive ? 'greenyellow' : 'white'
							})}>	Personal account</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.CETE} style={({ isActive }) => ({
								color: isActive ? 'greenyellow' : 'white'
							})}>Settings</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default SecondLine