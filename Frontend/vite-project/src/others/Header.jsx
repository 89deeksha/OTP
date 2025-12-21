import React from 'react'

function Header() {
  return (
            <div className='flex items-center text-white justify-between'>
            <h1 className='text-2xl'>Hello <br /><span className='text-3xl font-semibold'>Deeksha 👋</span></h1>
            <button className='text-lg font-medium bg-red-400 px-5 py-2 rounded-sm'>Log Out</button>
        </div>
    
  )
}

export default Header