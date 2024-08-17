import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/authContext"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ()=>{
    const {isAuthenticated} = useContext(AuthContext);
    return isAuthenticated ? <Outlet/> : <Navigate to="/login" replace />
}

export default PrivateRoutes