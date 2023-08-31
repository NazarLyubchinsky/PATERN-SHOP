import { createTheme } from "@mui/material";

export const MaterialUi = createTheme({
	components: {
		MuiSelect: {
			styleOverrides: {
				root: {
					border: '1px solid grey'
				},
			}
		}

	},
	palette: {
		primary: {
			main: '#cfd8dc',
		},
		secondary: {
			main: '#E0C2FF',
			light: '#F5EBFF',
			contrastText: '#47008F',
		},
	},
});