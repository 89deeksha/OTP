
import React, { useState } from 'react'

function Login({handleLogin}) {
  // console.log(handleLogin)

    const[email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const handleSubmit=(e)=>{
e.preventDefault()
console.log("Email is",email)
console.log("password",password)
handleLogin(email,password)
setEmail('')
setPassword('')


    }
   
  return (
    <div className='flex items-center  justify-center h-screen w-screen'>
        <div className='border bg-white border-red-600 p-20'>
        <form onSubmit={handleSubmit} className='flex gap-3 flex-col items-center justify-center'>
          <h2 className='text-2xl font-semibold'>Login user</h2>
            <input className='text-black px-2 py-2 bg-transparent outline-none rounded-full border border-black placeholder:text-black'  type="email" placeholder='Enter your email'   value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className='text-black px-2 py-2 bg-transparent outline-none rounded-full border border-black placeholder:text-black' type="password"  placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}     />
            <button className='bg-green-800 p-3 border rounded'>Sign in</button>

        </form>
        </div>
    </div>
  )
}

export default Login