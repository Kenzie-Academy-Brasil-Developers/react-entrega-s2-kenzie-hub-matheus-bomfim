import {Switch,Route} from "react-router-dom"
import DashBoard from "../Pages/DashBoard"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
function Routers(){
    return(
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route exact path="/dashboard:id">
                <DashBoard/>
            </Route>
        </Switch>
    )
}
export default Routers