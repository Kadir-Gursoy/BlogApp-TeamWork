import { Navigate } from "react-router-dom"
import { Outlet } from "react-router-dom"


const PrivaterRouter = () => {


const currentUser = true



  return currentUser ? <Outlet/> : <Navigate to="login"/>
}

export default PrivaterRouter