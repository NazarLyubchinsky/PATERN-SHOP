import React from 'react'
import s from './PageNone.module.scss'

const PageNone = () => {
	return (
		<div className={s.error}>
			<div className={s.error__top}>
				<div className={s.text}>404 ERROR</div>
				<h1 className={s.subtext}>Page Not Found</h1>
			</div>
			<div className={s.error__center}>
				<div className={s.information__wrapper}>
					<span style={{ fontSize: '20px', color: 'grey' }}>Oops! It looks like the page you were looking for is not here. Here are some possible reasons why:</span>
					<ul className={s.list}>
						<li>The page may have been moved or deleted.</li>
						<li>You may have mistyped the URL.</li>
						<li>There may be a temporary problem with our server.</li>
					</ul>
					<span style={{ fontSize: '20px', color: 'grey', }}>You can try the following options to find what you&#39;re looking for:</span>
					<ul className={s.list}>
						<li>Check the URL for typos or errors and try again.</li>
						<li>Go back to our homepage and browse from there.</li>
					</ul>
				</div>
				<span style={{ fontSize: '20px', color: 'grey',}}>If you believe there&#39;s an issue with our website, please{" "}</span>
			</div>
		</div>
	)
}

export default PageNone