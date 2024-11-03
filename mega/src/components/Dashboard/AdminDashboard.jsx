import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask';
import AllTasks from '../others/AllTasks';

const AdminDashboard = ({data,onLogout}) => {
  return (
    <div className='h-screen w-full p-10 bg-black'>
      {/* Separate Header */}

      <Header data={data} onLogout={onLogout}/>
    <div >
      <Createtask/>
      <AllTasks/>
    </div>
    </div>
  )
}

export default AdminDashboard;
