import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useParams } from "react-router-dom";
import { CATEGORIES } from '../../../utils/MenuCategories/Categories';
import s from '../Catalog.module.scss'

// Material UI
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from '@mui/material/styles';
import { MaterialUi } from '../../../components/MaterialUi/MaterialUi';

function CategorySelect() {
	const navigate = useNavigate()
	const { category } = useParams()

	const handleChange = (e) => {
		navigate(`/catalog/${e.target.value}`)
	};

	return (
		<ThemeProvider theme={MaterialUi} >
			<Box sx={{ minWidth: 120 }} className={s["demo-box"]}>
				<FormControl color='primary' fullWidth className={s["demo-control"]} >
					<Select
						className={s["demo-select"]}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={category}
						onChange={handleChange}
					>
						<MenuItem
							className={s["demo-menuitem"]}
							value={'all'}>All Categories</MenuItem>
						{
							CATEGORIES.map((item) => (
								<MenuItem className={s.catalog__aside_item} key={item} value={item}>{item}</MenuItem>
							))
						}
					</Select>
				</FormControl>
			</Box>
		</ThemeProvider>
	);
}

export default CategorySelect;
