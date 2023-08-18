import React from 'react'

// style 
import s from './index.module.scss'

const TopLine = () => {
	return (
		<section className={s.TopLine}>
			<ul className={s.TopLine__list}>
				<li className={s.TopLine__item}>+(380) 962-21-32</li>
				<span>    |    </span>
				<li className={s.TopLine__item}> We work 7 days a week </li>
				<span>    |    </span>
				<li className={s.TopLine__item}> 9:00 — 18:00</li>
			</ul>
		</section>
	)
}

export default TopLine