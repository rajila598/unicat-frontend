import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ role }){
    // let user = useSelector((store) => store.user.value)
    let user = JSON.parse(localStorage.getItem("user"))
    if(user?.role == role){
        return <Outlet />;
    }
    console.log(user)
    return <Navigate to="/login" />
}