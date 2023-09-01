import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import BasketZero from '../../../components/BasketZero/BasketZero'
import { CustomContext } from '../../../utils/context/Context'
import { ROUTES } from '../../../utils/routes'
import BurgerModal from '../BurgerModal/BurgerModal'
// style
import s from './index.module.scss'

const SecondLine = () => {

	const { user, setUser, basket } = useContext(CustomContext)

	const navigate = useNavigate()

	const [show, setShow] = useState(false);


	const logOutUser = () => {
		setUser({
			email: ''
		})
		localStorage.removeItem('user')
		navigate('/register')
	}
	return (
		<section className={s.secondLine}>
			<div className={s.secondLine__wrapper}>
				<div className={s.secondLine__title}>
					<Link to='/' className={s.secondLine__logo}>PATERN</Link>
				</div>
				<div className={s.secondLine__navigation}>
					<ul className={s.secondLine__list}>
						<li className={s.secondLine__item}>
							<NavLink to={ROUTES.ADD} style={({ isActive }) => ({
								color: isActive ? 'greenyellow' : 'white'
							})}>Add product</NavLink>
						</li>
						<li className={s.secondLine__item}>
							<NavLink to={'/catalog/all'} style={({ isActive }) => ({
								color: isActive ? 'greenyellow' : 'white'
							})}>Catalog</NavLink>
						</li>
						<li className={s.secondLine__item}>
							<NavLink to={ROUTES.CETE} style={({ isActive }) => ({
								color: isActive ? 'greenyellow' : 'white',
							})}>Personal information</NavLink>
						</li>

					</ul>
					{
						user.email.length ? <span onClick={logOutUser} className={s.secondLine__user}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="11.5788" cy="7.27803" r="4.77803" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								<path fillRule="evenodd" clipRule="evenodd" d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							Exit
						</span> :
							<NavLink className={s.secondLine__user} to='/login'>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="11.5788" cy="7.27803" r="4.77803" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path fillRule="evenodd" clipRule="evenodd" d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								Log in
							</NavLink>

					}
					<div className={s.secondLine__basket} onClick={() => {
						if (basket.length) {
							navigate('/basket')
						} else {
							setShow(true)
						}
					}}>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.0035 6.81175C19.9192 6.6899 19.8066 6.59031 19.6754 6.5215C19.5441 6.45269 19.3982 6.41672 19.25 6.41667H6.72193L5.66409 3.8775C5.52539 3.54312 5.29052 3.25746 4.98927 3.05673C4.68801 2.856 4.33393 2.74925 3.97193 2.75H1.83334V4.58334H3.97193L8.32059 15.0196C8.39025 15.1866 8.50775 15.3292 8.65831 15.4295C8.80887 15.5298 8.98575 15.5834 9.16668 15.5833H16.5C16.8823 15.5833 17.2242 15.3459 17.3589 14.9893L20.1089 7.656C20.1609 7.51724 20.1785 7.36794 20.1601 7.22091C20.1417 7.07387 20.088 6.93348 20.0035 6.81175ZM15.8648 13.75H9.77809L7.48643 8.25H17.9273L15.8648 13.75Z" fill="white" />
							<path d="M9.625 19.25C10.3844 19.25 11 18.6344 11 17.875C11 17.1156 10.3844 16.5 9.625 16.5C8.86561 16.5 8.25 17.1156 8.25 17.875C8.25 18.6344 8.86561 19.25 9.625 19.25Z" fill="white" />
							<path d="M16.0417 19.25C16.801 19.25 17.4167 18.6344 17.4167 17.875C17.4167 17.1156 16.801 16.5 16.0417 16.5C15.2823 16.5 14.6667 17.1156 14.6667 17.875C14.6667 18.6344 15.2823 19.25 16.0417 19.25Z" fill="white" />
						</svg>
						{basket.length}
					</div>
					<BasketZero show={show} setShow={setShow} />
				<BurgerModal />
				</div>
			</div>
		</section >
	)
}

export default SecondLine