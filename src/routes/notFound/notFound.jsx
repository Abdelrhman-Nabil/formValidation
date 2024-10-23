import { useContext } from 'react'
import './notFound.css'
import { AuthContext } from '../../context/authContext'
export default function NotFound() {
  const {isLogin}=useContext(AuthContext) 
  console.log(isLogin)
  return (
     <>

       <main className="Main">
         <div className="main-dev">
           <p className="">404</p>
           <h1 className="">
             Page not found
           </h1>
           <p className="">
             Sorry, we couldn’t find the page you’re looking for.
           </p>
           <div className="">
             {isLogin?<a
              href="/home"
              className=""
            >
              Go back home
            </a>:
            <a
            href="/"
            className=""
          >
            Go back home
          </a>}

           </div>
         </div>
       </main>
     </>
   )
 }
 