import { createContext, useState } from "react";
import Alluser from "../utils/data"
export const AuthContext=createContext({
  isLogin:false,
  login:()=>{},
  loginout:()=>{},
})

export const AuthProvider=({children})=>{
  const [users, setUsers] = useState(Alluser);
  const [isLogin, setIsLogin] = useState(false);

    const login=(user)=>{
      localStorage.setItem("userData", JSON.stringify({userName:user}))

      setIsLogin(true)
    }
    const logOut=()=> {
      localStorage.removeItem("userData");
      setIsLogin(false)
    }
    const value={users, setUsers,isLogin,login,logOut}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }
