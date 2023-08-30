import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useParams } from "react-router-dom";
import { CATEGORIES } from '../../utils/MenuCategories/Categories';
import s from '../Catalog/Catalog.module.scss'

function CategorySelect() {

	const navigate = useNavigate()

	const { category } = useParams()

	const handleChange = (e) => {
		navigate(`/catalog/${e.target.value}`)
	};

	return (
		<Box sx={{ minWidth: 120 }} className={s.catalog__aside_wrapper}>
			<FormControl fullWidth>
				<InputLabel 	style={{ color: '#fff' }} id="demo-simple-select-label">Категория</InputLabel>
				<Select
			
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					className={s.catalog__aside_select}
					value={category}
					label="Категория"
					onChange={handleChange}
					style={{ color: 'grey' }}
				>
					<MenuItem  className={s.catalog__aside_item} value={'all'}>Все категории</MenuItem>
					{
						CATEGORIES.map((item) => (
							<MenuItem  className={s.catalog__aside_item} key={item} value={item}>{item}</MenuItem>
						))
					}

				</Select>
			</FormControl>
		</Box>
	);
}

export default CategorySelect