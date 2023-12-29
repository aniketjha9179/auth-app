/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Protected({ children, authentication = true }) {
  cosnt[(loader, setLoader)] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    // todo make it more easy

    // if(authStatus===true){
    //     navigate('/')
    // }else if(auth===false){
    //     navigate('/login')
    // }

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>Loading... </h1> : <>{children} </>;
}
