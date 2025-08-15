import React from 'react'

const CompleteTask = () => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
            <h4 className='text-sm'>14 Aug 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet d consectetur possimus eos nihil soluta repudiandae expedita inventore.</p>
      <div className='mt-2'>
        <button className='w-full bg-green-600 rounded font-medium oy-1 px-2 text-sm'>Completed</button>
      </div>
      </div>
  )
}

export default CompleteTask
