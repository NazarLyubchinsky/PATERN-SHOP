import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from "../hook/index";
// import { ROUTES } from '../routes';

const PrivateRoute = () => {
	const auth = useAuth()
	return (

		auth ? <Outlet /> : <Navigate to="login" />
		// auth ? <Outlet /> : <Navigate to={ROUTES.HOME} />
	);
};

export default PrivateRoute;