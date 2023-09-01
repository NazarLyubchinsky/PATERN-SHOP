import React from 'react'
import { Link } from 'react-router-dom'
import s from './Collection.module.scss'

const Collection = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0); // Прокрутити до верху сторінки
	};
	return (
		<section className={s.collection}>
			<div className={s.collection__left}>
				<div className={s.collection__left_img}>
				</div>
			</div>
			<div className={s.collection__right}>
				<h3 className={s.collection__right_title}>Collection 2023</h3>
				<p className={s.collection__right_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam.</p>
				<Link to={'/catalog/all'} className={s.collection__right_btn} onClick={scrollToTop}>View Collection</Link>
			</div>
		</section>
	)
}

export default Collection