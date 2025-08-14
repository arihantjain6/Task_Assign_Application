import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      <div className='h-full flex-shrink-0 w-[330px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
            <h4 className='text-sm'>14 Aug 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas qui velit quos quia similique explicabo culpa accusantium quo sint. Nulla aliquid consectetur possimus eos nihil soluta repudiandae expedita inventore.</p>
      </div>
       <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
            <h4 className='text-sm'>14 Aug 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime voluptates mollitia sunt atque quam error, reiciendis, dolorum quaerat, consectetur minus. Numquam libero a eum? Itaque dignissimos ratione fugit incidunt?</p>
      </div>
       <div className='h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
            <h4 className='text-sm'>14 Aug 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas qui velit quos quia similique explicabo culpa accusantium quo sint. Nulla aliquid consectetur possimus eos nihil soluta repudiandae expedita inventore.</p>
      </div>
       <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
            <h4 className='text-sm'>14 Aug 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas qui velit quos quia similique explicabo culpa accusantium quo sint. Nulla aliquid consectetur possimus eos nihil soluta repudiandae expedita inventore.</p>
      </div>
    
    
    
      {/* <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl'></div>
      <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl'></div>
      <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl'></div>
      <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl'></div>
      <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl'></div> */}
    </div>
  )
}

export default TaskList
