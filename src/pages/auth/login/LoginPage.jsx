import React from 'react'

// style
import s from '../index.module.scss'

const LoginPage = ({ setEmail, setPassword,  }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.close}
			//  onClick={closeForm}
			>
				{/* <svg className="icon">
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
				</svg> */}
			</div>

			<div className={s.title}>Log In</div>

			<div className={s.form}>
				{/* <form className={s.form} onSubmit={handleSubmit}> */}
				<div className={s.group}>
					<input
						type="email"
						placeholder="Your email"
						name="email"
						// value={values.email}
						autoComplete="off"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				<div className={s.group}>
					<input
						type="password"
						placeholder="Your password"
						name="password"
						// value={values.password}
						autoComplete="off"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<div
					// onClick={() => toggleCurrentFormType("signup")}
					className={s.link}
				>
					Create an account
				</div>

				<button type="submit" className={s.submit}>
					Login
				</button>
				{/* </form> */}
			</div>

		</div>
	)
}

export default LoginPage