import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Catalog.module.scss'

// marial ui
import { ThemeProvider } from '@mui/material/styles';
import { MaterialUi } from '../../../components/MaterialUi/MaterialUi';
import FormControl from '@mui/material/FormControl';
import { useMediaQuery } from '@mui/material';


function TitleSearch({ title, setTitle }) {
	const [inputValue, setInputValue] = useState(title);
	const isMobileScreen = useMediaQuery('(max-width:576px)');
	useEffect(() => {
		const delayTimer = setTimeout(() => {
			setTitle(inputValue);
		}, 500);

		return () => clearTimeout(delayTimer);
	}, [inputValue, setTitle]);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	}

	const [isActive, setIsActive] = useState(false);
	const handleFocus = () => {
		setIsActive(true);
	};

	const handleBlur = () => {
		setIsActive(false);
	};

	return (
		<ThemeProvider theme={MaterialUi} >
			<FormControl >
				<Box
					sx={{
						minWidth: 120,
					}}
					component="form"
					noValidate
					autoComplete="off"
					style={{ width: isMobileScreen ? '100%' : 'auto' }}

				>
					<TextField
					
						onFocus={handleFocus}
						onBlur={handleBlur}
						color='primary'
						defaultValue={title}
						onChange={handleChange}
						id="outlined-basic" label={'Search'}
						InputLabelProps={{ style: { color: '#fff' } }}
						InputProps={{ style: { border: isActive ? '1px solid #191b1c' : '1px solid gray' } }}
						variant="outlined"

					/>
				</Box>
			</FormControl>
		</ThemeProvider>
	);
}

export default TitleSearch