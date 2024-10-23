import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import UserList from "../../component/userList/userList";
import "./allUsers.css"
const AllUser=()=>{
  const {users}=useContext(AuthContext);

    return(
        <div className="bg-red-500 w-full h-full" >
        <UserList users={users}/>

        </div>
    )
}
export default AllUser