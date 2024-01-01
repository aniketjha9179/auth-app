/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import {login, logout} from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";




const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch= useDispatch()

  useEffect((  )=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
    
  },[])
  return !loading ? (
    <div className=" min-h-screen flex flex-wrap content-between  place-content-center   bg-slate-100 radial-blue  	  ">
      <div className=" w-full block">
        <Header />
        <main>
       {/* <p className=" flex justify-center items-center font-semibold  text-[#F13C6F]"> All posts </p> */}
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
  
  
};

export default App;
 