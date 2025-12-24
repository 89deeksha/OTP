import React, { useContext, useEffect, useState } from 'react'
import Login from './Component/Auth/Auth/Login'
import './App.css'
import Employee from './Component/Auth/Dashboard/Employee'
import Admin from './Component/Auth/Dashboard/Admin'
import { getInLocalstorage, setInLocalstorage } from './Component/Auth/Utils/Localstorage'
import { Authcontext } from './Component/Auth/Context/Authprovider'



function App() {

  const[user,setUser]=useState(null)
    useEffect(() => {
  setInLocalstorage()
  getInLocalstorage()
  
    
  },[])
  const handleLogin=(email,password)=>{
if(email=="deeksha123@gmail.com" && password=="12345"){
 setUser("admin")
 console.log("admin")
}else if(email=="deekshajain0310@gmail.com" && password=="8923"){
  setUser("employee")
  console.log("employee")
}else{
    alert("invalid credentials")
  }

  }
  const data=useContext(Authcontext)
  console.log(data)
  
  return (
  <>


  
  <div className='bg-black h-screen'>
    {!user?<Login handleLogin={handleLogin}/>:""}
    {user=="admin" && <Admin/>}
 
    {user=="employee" && <Employee/>}
  
  {/* <Employee/> */}
 

  
  {/* <Admin/> */}
  </div>
  </>
  )
}

export default App