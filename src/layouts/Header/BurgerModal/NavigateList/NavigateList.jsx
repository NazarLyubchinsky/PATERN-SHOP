import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../../../utils/routes'

import s from './NavigateList.module.scss'

const NavigateList = ({ styleProp, closeModal, styleLink }) => {
	return (
		<ul className={`${s.list} ${s[styleProp]}`}>
			<li className={s.item}>
				<NavLink onClick={closeModal} to={ROUTES.ADD} style={({ isActive }) => ({
					color: isActive ? 'greenyellow' : 'white'
				})}>Add product</NavLink>
			</li>
			<li className={s.item}>
			<NavLink onClick={closeModal} to={'/catalog/all'} style={({ isActive }) => ({
								color: isActive ? 'greenyellow' : 'white'
							})}>Catalog</NavLink>
			</li>
			<li className={s.item}>
			<NavLink onClick={closeModal} to={ROUTES.CETE} style={({ isActive }) => ({
								color: isActive ? 'greenyellow' : 'white',
							})}>Personal information</NavLink>
			</li>
		</ul>
	)
}

export default NavigateList