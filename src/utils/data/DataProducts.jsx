import { useEffect, useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';
import axios from '../axios/axios';

function DataProducts({ url, children }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios(url)
			.then(({ data }) => {
				setData(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log('Data not fetched');
				setLoading(false);
			});
	}, [url]);
	if (loading) {
		return <Preloader />;
	}

	return children(data);
}

export default DataProducts;
