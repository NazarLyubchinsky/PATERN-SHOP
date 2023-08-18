import React from 'react';
import Header from '../Header';
// import SecondLine from '../Header/SecondLine';
// import { useSelector } from 'react-redux';
// import TopLine from '../Header/TopLine';

const Home = () => {
	// const user = useSelector(state => state.auth.user);
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center'
		}}>
			{/* <h1>This is home page</h1>
			<p>user:  {user.name}</p> */}
			< Header />
		</div >
	);
};

export default Home;