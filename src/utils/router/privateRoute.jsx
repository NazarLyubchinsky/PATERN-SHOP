import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from "../hook/index";

const PrivateRoute = () => {
	const auth = useAuth()
	return (
		auth ? <Outlet /> : <Navigate to="login" />
	);
};

export default PrivateRoute;