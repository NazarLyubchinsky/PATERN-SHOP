import React from 'react'

import s from './NewSeason.module.scss'

// images
import WATCH from '../../assets/img/NewSeason/Watch.png'
const NewSeason = () => {
	return (
		<section className={s.season}>
			<div className={s.season__left}>
				<h2 className={s.season__left_title}>СЕЗОН 2022/23</h2>
				<div className={s.season__left_cards}>
					<div className={s.card}>
						<div className={s.card__img}>
							<img src={WATCH} alt={WATCH} />
						</div>
						<div className={s.card__text}>
							<p >Louis XVI ATHOS</p>
							<p>165 000 руб.  </p>
						</div>
					</div>
					<div className={s.card}>
						<div className={s.card__img}>
							<img src={WATCH} alt={WATCH} />
						</div>
						<div className={s.card__text}>
							<p >Louis XVI ATHOS</p>
							<p>165 000 руб.  </p>
						</div>
					</div>
					<div className={s.card}>
						<div className={s.card__img}>
							<img src={WATCH} alt={WATCH} />
						</div>
						<div className={s.card__text}>
							<p >Louis XVI ATHOS</p>
							<p>165 000 руб.  </p>
						</div>
					</div>
				</div>
			</div>
			<div className={s.season__right}>
				<div className={s.season__right_img}>
					{/* <img src={bgRight} alt={bgRight} /> */}
				</div>
			</div>
		</section>
	)
}

export default NewSeason