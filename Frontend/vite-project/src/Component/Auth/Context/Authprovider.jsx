import React, { createContext, useEffect, useState } from 'react'
import { getInLocalstorage } from '../Utils/Localstorage'
export const Authcontext=createContext()

function Authprovider({children}) {
  const [userData, setUserData]=useState(null)
  // const data=getInLocalstorage()
  // console.log(data.employee)

// const {employee, Admin}=getInLocalstorage()
// setUserData({employee, Admin})

useEffect(() => {
 const {employee, Admin}=getInLocalstorage()
setUserData({employee, Admin})

  
},[])


  return (
    <div>
      <Authcontext.Provider value={userData}>
        {children}
        </Authcontext.Provider>
    </div>
  )
}

export default Authprovider