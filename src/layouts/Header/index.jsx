import React from 'react'

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
			</div>
		</div>
	)
}

export default Header