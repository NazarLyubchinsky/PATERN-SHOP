import React from 'react'
import HeaderMain from './HeaderMain'
import SecondLine from './SecondLine'
import TopLine from './TopLine'

const Header = () => {
	return (
		<div style={{
			width: '100%',
		}}>
			<TopLine />
			<div style={{
				backgroundColor: '#0f0f0f',

			}}>
				<SecondLine />
				{/* <HeaderMain /> */}
			</div>
		</div>
	)
}

export default Header