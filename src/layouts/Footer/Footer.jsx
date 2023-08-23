import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../../utils/MenuCategories/MenuCategories'
import { ROUTES } from '../../utils/routes'
import s from './Footer.module.scss'



const Footer = () => {

	const navigate = useNavigate();
	return (
		<footer className={s.footer}>
			<div className={s.footer__row}>
				<h3 className={s.footer__row_title}>About the Store</h3>
				<p className={s.footer__row_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. I always live, now a tortor lectus, now nothing nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. And in the mi ultrices nisi, now in sit mi ultrices nisi, now.</p>
			</div>
			<div className={s.footer__row}>
				<h3 className={s.footer__row_title}>Categories</h3>
				<ul className={s.footer__row_list}>
					{
						CATEGORIES.map(i => (
							<li key={i} className={s.list__item} onClick={() => {
								navigate(`${ROUTES.CATALOG}/${i}`)
							}}>
								<Link className={s.list__item_link} to='/'>{i}</Link>
							</li>
						))
					}
				</ul>
			</div>
			<div className={s.footer__row}>
				<div className={s.footer__row_wrapper}>
					<div className={s.footer__row_info}>
						<h3 className={s.footer__row_title}>Newsletter</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. I always live, now a tortor lectus, now nothing nibh.</p>
					</div>
					<div className={s.footer__row_newslette}>
						<input placeholder='Your email' className={s.newslette__input} type="email" />
						<button className={s.newslette__btn}>SUBSCRIBE</button>
					</div>
				</div>
			</div>
		</footer>

	)
}

export default Footer