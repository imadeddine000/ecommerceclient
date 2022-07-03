import React from 'react'
import Control from '../src/components/control'
import Login from '../src/components/Login'
import { useState,useEffect } from 'react'

const Admin = () => {
  const [isloggedin, setisloggedin] = useState(false);
  useEffect(() => {
   if(window.localStorage.getItem('token')){
    setisloggedin(true)
   }else{
    setisloggedin(false)
   }
  }, []);
  const handleloggedin=(token)=>{
    if(token){
      window.localStorage.setItem('token',token)
    }
   
  }
  
  return (
    <>
    {isloggedin?<Control isloggedin={isloggedin} />:<Login handleloggedin={handleloggedin}/>}   
    </>
  )
}

export default Admin