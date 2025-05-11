import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10 rounded-xl '>
      <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis possimus, aut atque odit enim magni.
        </p>
      </div>

      <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-yellow-600 text-small px-3 py-1 rounded'>Mid</h3>
            <h4 className='text-sm'>23 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Instagram Reel</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis possimus, aut atque odit enim magni.
        </p>
      </div>


      <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-green-600 text-small px-3 py-1 rounded'>Low</h3>
            <h4 className='text-sm'>27 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube Short</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis possimus, aut atque odit enim magni.
        </p>
      </div>


      <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-small px-3 py-1 rounded'>None</h3>
            <h4 className='text-sm'>29 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Linkdl Post</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis possimus, aut atque odit enim magni.
        </p>
      </div>
    </div>
  )
}

export default TaskList
