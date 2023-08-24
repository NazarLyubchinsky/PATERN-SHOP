import { useEffect, useState } from 'react';
import axios from '../axios/axios';

function DataProducts({ url, children }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios(url)
			.then(({ data }) => {
				setData(data);
			})
			.catch((err) => {
				console.log('Data not fetched');
			});
	}, [url]);

	return children(data);
}

export default DataProducts;
