import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import s from '../Catalog.module.scss';

// marial ui
import { ThemeProvider } from '@mui/material/styles';
import { MaterialUi } from '../../../components/MaterialUi/MaterialUi';




function OrderSelect({ order, setOrder }) {

	const handleChange = (e) => {
		setOrder(e.target.value)
	};

	return (
		<ThemeProvider theme={MaterialUi} >
			<Box sx={{ minWidth: 120 }} className={s["demo-box"]}>
				<FormControl color='primary' fullWidth>
					<Select
						className={s["demo-select"]}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={order}
						onChange={handleChange}
					>
						<MenuItem className={s["demo-menuitem"]} value={'default'}>По умолчанию</MenuItem>
						<MenuItem className={s["demo-menuitem"]} value={'desc'}>По убыванию</MenuItem>
						<MenuItem className={s["demo-menuitem"]} value={'asc'}>По возрастанию</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</ThemeProvider>
	);
}

export default OrderSelect