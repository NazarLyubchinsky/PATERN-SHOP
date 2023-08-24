import React from 'react'

// loader
import OverlayLoader from "overlay-loading-react";

const Preloader = () => {
	return (
		<div className="preloader" style={{
			padding: '50px',
			display: 'block',
			width: '100%'
		}}>
			<OverlayLoader overlayContainerStyle={{
				position: 'unset',
				backgroundColor: 'unset'
			}} loadingText='Loading...' active />

		</div>
	)
}

export default Preloader