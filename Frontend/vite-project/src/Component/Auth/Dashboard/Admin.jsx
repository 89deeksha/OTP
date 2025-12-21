import React from 'react'
import Header from '../../../others/Header'
import Createtask from '../../../others/Createtask'
import Alltask from '../../../others/Alltask'

function Admin() {
  return (
    <div className="p-10 bg-black text-white">
      <Header />
<Createtask/>
<Alltask/>
      
    </div>
  )
}

export default Admin
