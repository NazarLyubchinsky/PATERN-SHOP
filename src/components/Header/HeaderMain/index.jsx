import React from 'react'
import s from './index.module.scss'

// images
// import BG  from '../../../assets/img/Header/HeaderMain.png'

const HeaderMain = () => {
	return (
		<section className={s.headerMain}>
			<div className={s.headerMain__wrapper}>
				<div className={s.headerMain__title}>
					<div className={s.title__top}>
						PATERN
					</div>
					<div className={s.title__bottom}>
						Ukrain
					</div>
				</div>
			</div>
				<div className={s.headerMain__subtitle}>
					<p className={s.headerMain__subtitle__text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Harum reprehenderit ullam asperiores pariatur delectus, nostrum eligendi magnam, cumque inventore quos ducimus explicabo quidem suscipit
						fugiat perspiciatis? Ea veniam deserunt quod.</p>
				</div>
		</section>
	)
}

export default HeaderMain