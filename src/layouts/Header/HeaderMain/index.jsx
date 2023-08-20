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
			
		</section>
	)
}

export default HeaderMain