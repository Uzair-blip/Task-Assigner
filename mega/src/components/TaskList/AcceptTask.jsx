import React from 'react'

const AcceptTask = ({data}) => {
   console.log(data)
  return (
    <div>
          <div 
    className='w-[300px] flex-shrink-0 h-[250px] rounded-xl bg-red-400' 
    >
        <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 p-1 m-4 w-fit rounded-sm font-bold text-[14px]'>{data.category}</h3> 
        <h3 className='text-[14px] font-bold mr-2' >{data.date}</h3> 
        </div>
        <h1 className='text-3xl font-bold ml-3'>{data.title} </h1>
        <p className="text-xl font-medium ml-3 mt-2">{data.description} </p>
         
         <div className='flex gap-10 px-2 mt-4'>
         <button className='bg-green-400 py-1 px-3 text-sm font-medium' >Mark Complete </button>
          <button className='bg-red-600 py-1 px-3 text-sm font-medium'>Mark as Failed</button>
     
         </div>
    </div>
    
    </div>
  )
}

export default AcceptTask