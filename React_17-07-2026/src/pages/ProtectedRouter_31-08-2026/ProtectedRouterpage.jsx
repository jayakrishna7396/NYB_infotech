import Dashboard from "../../components_25-08-2026/ProtectedRouter_31-08-2026/Dashboard"
import Login from "../../components_25-08-2026/ProtectedRouter_31-08-2026/Login"
import ProtectedRoute from "../../components_25-08-2026/ProtectedRouter_31-08-2026/ProtectedRoute"

const ProtectedRouterpage =()=>{
    return(
        <div>
            <Dashboard/>
            <Login/>
            <ProtectedRoute/>
        </div>
    )
}
export default ProtectedRouterpage
