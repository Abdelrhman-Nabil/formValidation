import { Route, Routes } from "react-router-dom";
import AuthPage from "./routes/auth/auth";
import Navigation from "./routes/navigations/navigation";
import HomePage from "./routes/home/home";
import NotFound from "./routes/notFound/notFound";
import AllUser from "./routes/allUsers/allUsers";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext";
const App = () => {
  const {login}=useContext(AuthContext)
  useEffect(()=>{
    const storeData=JSON.parse(localStorage.getItem('userData'));
    if(storeData){
      login(storeData.userName)
    }
  },[login])

  return (
    <Routes>
    <Route index element={<AuthPage />} />
    <Route path="/" element={<Navigation />}>
    <Route path="home" element={<HomePage />} />
    <Route path="allUsers" element={<AllUser />} />
    </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
