import React from 'react'
import { Link } from 'react-router-dom'
import s from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footer__row}>
				<h3 className={s.footer__row_title}>О магазине</h3>
				<p className={s.footer__row_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
			</div>
			<div className={s.footer__row}>
				<h3 className={s.footer__row_title}>Категории</h3>
				<ul className={s.footer__row_list}>
					<li className={s.list__item}> <Link className={s.list__item_link} to='/'>loodw</Link></li>
					<li className={s.list__item}> <Link className={s.list__item_link} to='/'>loodw</Link></li>
					<li className={s.list__item}> <Link className={s.list__item_link} to='/'>loodw</Link></li>
					<li className={s.list__item}> <Link className={s.list__item_link} to='/'>loodwdwdww</Link></li>
					<li className={s.list__item}> <Link className={s.list__item_link} to='/'>loodw</Link></li>
					<li className={s.list__item}> <Link className={s.list__item_link} to='/'>loodw</Link></li>
				</ul>
			</div>
			<div className={s.footer__row}>
				<div className={s.footer__row_wrapper}>
					<div className={s.footer__row_info}>
						<h3 className={s.footer__row_title}>Newslette</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
					</div>
					<div className={s.footer__row_newslette}>
						<input placeholder='You email' className={s.newslette__input} type="email" />
						<button className={s.newslette__btn}>ПОДПИСАТЬСЯ</button>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer