import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function OrdersSelect() {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">store</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={age}
					label="store"
					onChange={handleChange}
				>
					<MenuItem value={10}>store1</MenuItem>
					<MenuItem value={20}>store2</MenuItem>
					<MenuItem value={30}>store3</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
export default OrdersSelect