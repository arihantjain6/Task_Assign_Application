import React from 'react'

const NewTask = () => {
  return (
    <div className='h-full flex-shrink-0 w-[330px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>14 Aug 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas qui velit quos quia similique explicabo culpa accusantium quo sint. Nulla aliquid consectetur possimus eos nihil soluta repudiandae expedita inventore.</p>
     <div className="mt-6">
        <button className='bg-blue-500 rounded font-medium py-q px-2 text-xs'>Accpet Task</button>
    </div>
     </div>
  )
}

export default NewTask
