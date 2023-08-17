import { useSelector } from "react-redux"

export const useAuth = () => {
	const { isLogged } = useSelector((state) => state.auth)
	
	return isLogged
}