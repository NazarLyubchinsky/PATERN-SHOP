import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../../../../utils/MenuCategories/Categories'
import { ROUTES } from '../../../../utils/routes'

import s from './NavigateList.module.scss'

const NavigateList = ({ styleProp, closeModal }) => {

	const handleCategoryClick = (category) => {
		closeModal();
		navigate(`${ROUTES.CATALOG}/${category}`);
	};
	const navigate = useNavigate();
	return (
		<ul className={`${s.list} ${s[styleProp]}`}>
			<li className={s.item}>
				<NavLink className={s.link} to={ROUTES.ADD} onClick={closeModal} style={({ isActive }) => ({
					color: isActive ? 'greenyellow' : 'white'
				})}>Add product</NavLink>
			</li>
			<li className={s.item}>
				<NavLink className={s.link} onClick={closeModal} to={'/catalog/all'} style={({ isActive }) => ({
					color: isActive ? 'greenyellow' : 'white'
				})}>Catalog</NavLink>
			</li>
			{
				CATEGORIES.map(i => (
					<li key={i} className={s.item} onClick={() => handleCategoryClick(i)}>
						<NavLink className={s.link} onClick={closeModal} style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white'
						})} to={`${ROUTES.CATALOG}/${i}`}>{i}</NavLink>
					</li>
				))
			}
		</ul>
	)
}

export default NavigateList