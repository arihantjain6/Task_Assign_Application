import React from 'react'

const AcceptTask = () => {
  return (
    <div className='h-full flex-shrink-0 w-[330px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
            <h4 className='text-sm'>14 Aug 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas qui velit quos quia similique explicabo culpa accusantium quo sint. Nulla aliquid consectetur possimus eos nihil soluta repudiandae expedita inventore.</p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button> 
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
       </div>      
      </div>
  )
}

export default AcceptTask
