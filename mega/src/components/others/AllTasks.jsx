import React, { useContext } from 'react'
import { AuthContext } from '../../context/ContextProvider'

const AllTasks = () => {
  const AuthData=useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-4 mt-5 rounded'>
 <div className=' px-4 border-2 font-bold mb-2 py-2 flex justify-between'>
 <h2 className='w-1/5 '>Employee Name</h2>
  <h3 className='w-1/5 '>New task</h3>
  <h5 className='w-1/5 ' >Active</h5>
  <h5 className='w-1/5 ' >Completed</h5>
  <h5 className='w-1/5 ' >Failed</h5>
  </div>
<div className=' overflow-auto'>
{AuthData.emp.map((elem,idx)=>{
  return <div key={idx} className=' border-2 px-4 font-bold  mb-2 py-2 flex justify-between'>
 <h2 className='text-lg w-1/5 '>{elem.firstName}</h2>
  <h5 className='text-lg w-1/5 text-yellow-600' >{elem.taskCounts.newTasks}</h5>
  <h3 className='text-lg w-1/5 text-blue-600'> {elem.taskCounts.activeTasks}</h3>
  <h5 className='text-lg w-1/5 text-white-600' >{elem.taskCounts.completedTasks}</h5>
  <h5 className='text-lg w-1/5 text-red-600' >{elem.taskCounts.failedTasks}</h5>
  </div>
 })}
</div>
    </div>
  )
}

export default AllTasks