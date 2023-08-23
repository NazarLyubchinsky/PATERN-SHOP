import React from 'react';
import Collection from '../../layouts/Collection/Collection';
import HeaderMain from '../../layouts/Header/HeaderMain';
import NewArrivals from '../../layouts/NewArrivals/NewArrivals';
import NewSeason from '../../layouts/NewSeason/NewSeason';

// import Header from '../Header';

const Home = () => {
	return (
		<div >
			<HeaderMain />
			<NewSeason />
			<Collection />
			<NewArrivals />
		</div >
	);
};

export default Home;