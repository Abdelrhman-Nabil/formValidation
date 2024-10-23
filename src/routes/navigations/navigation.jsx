import { Fragment } from "react"
import {NavLink, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import "./navigation.css"
const Navigation=()=>{
  const {isLogin,logOut}=useContext(AuthContext)
return(
    <Fragment>
<div className='navigation'>
 <div className='nav-links'>
 <NavLink to={'/home'}>Home</NavLink>
 <NavLink to={'/allUsers'}>All Users</NavLink>
  {isLogin?
    <NavLink to={"/"} onClick={()=>{logOut()}}> Log Out</NavLink>:
    <NavLink to={"/"} > Sign In</NavLink>}

 </div>

</div>
<Outlet/>
</Fragment>
)
}

export default Navigation