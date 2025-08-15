import React from 'react'

const FailedTask = () => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-yelllow-600 text-sm px-3 py-1'>High</h3>
            <h4 className='text-sm'>14 Aug 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet culpa accusantium quo sint. Nulla aliquid consectetur possimus eos nihil soluta repudiandae expedita inventore.</p>
      <div className='mt-6'>
        <button className='w-full bg-red-500 rounded font-medium oy-1 px-2 text-sm '>Failed</button>
      </div>
      </div>
  )
}

export default FailedTask
