import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import debounce from "@material-ui/core/utils/debounce";
import s from '../Catalog.module.scss'

// marial ui
import { ThemeProvider } from '@mui/material/styles';
import { MaterialUi } from '../../../components/MaterialUi/MaterialUi';

function TitleSearch({ title, setTitle }) {

	const handleChange = (e) => {
		setTitle(e.target.value)
	}

	return (
		<ThemeProvider theme={MaterialUi} >
			<Box
		className={s["demo-select"]}
				component="form"
				noValidate
				autoComplete="off"
			>
				<TextField 
				color='primary' defaultValue={title} onChange={debounce(handleChange, 500)} className={s["demo-menuitem"]} id="outlined-basic" label={'Название'} variant="outlined" />
			</Box>
		</ThemeProvider>
	);
}

export default TitleSearch