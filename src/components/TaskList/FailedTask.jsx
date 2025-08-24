import React from 'react'

const FailedTask = ({ data, onDelete }) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-yelllow-600 text-sm px-3 py-1'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='mt-6'>
        <button onClick={onDelete} className='w-full bg-red-600 rounded font-medium py-1 px-2 text-sm'>Delete Task</button>
      </div>
      </div>
  )
}

export default FailedTask
