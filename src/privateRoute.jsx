import { Navigate } from "react-router-dom";
import { useAuthCheck} from "./useAuthCheck"

const PrivateRoute = ({ children }) => {
	const {login,isLoading } = useAuthCheck()

	if(isLoading) return <h1>Loading....</h1>
	return login ? children : <Navigate to="/login" />;
	
};

export default PrivateRoute;
