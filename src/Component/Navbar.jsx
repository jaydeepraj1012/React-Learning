import React from 'react'


function Navbar() {
  return (
    <div className='bg-cyan-100'>
        <div className='flex justify-between items-center p-4'>
            <div className='text-2xl font-bold'>My Website</div>
            <div className='flex space-x-4'>
            <a  className='text-gray-700 hover:text-gray-900'>Home</a>
            <a  className='text-gray-700 hover:text-gray-900'>About</a>
            <a  className='text-gray-700 hover:text-gray-900'>Services</a>
            <a  className='text-gray-700 hover:text-gray-900'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar