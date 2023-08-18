import React from 'react'

// styles 
import s from '../index.module.scss'

const RegisterPage = ({ setEmail, setPassword, setRepeatPassword, setName, navigate }) => {
	return (
		<div className={s.wrapper}>
			{/* <div className={s.close} onClick={closeForm}>
				<svg className="icon">
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
				</svg>
			</div> */}

			<div className={s.title}>Sign Up</div>

			<div className={s.form}>
				{/* <form className={s.form} onSubmit={handleSubmit}> */}
				<div className={s.group}>
					<input
						type="text"
						placeholder="Your name"
						name="name"
						// value={values.name}
						autoComplete="off"
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
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

				<div className={s.group}>
					<input
						type="password"
						placeholder="Repeat password"
						name="password"
						// value={values.password}
						autoComplete="off"
						onChange={(e) => setRepeatPassword(e.target.value)}
						required
					/>
				</div>

				<div className={s.link}
					onClick={() => navigate('/login')}
				>I already have an account</div>

				<button type="submit" className={s.submit}>
					Create an account
				</button>
				{/* </form> */}
			</div>
		</div>
	)
}

export default RegisterPage