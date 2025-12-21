import React from 'react'
import Header from '../../../others/Header'
import Tasklistnumber from '../../../others/Tasklistnumber'
import Tasklist from '../Tasklist/Tasklist'

function Employee() {
  return (
    <div className='p-10 text-white bg-[#1C1C1C] h-screen'>
        <Header/>
        <Tasklistnumber/>
        <Tasklist/>
    </div>
  )
}

export default Employee