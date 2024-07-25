import React from 'react'
function NavBar() {
  return (
    <>
        <nav className='w-full z-50  h-[80px] px-8 py-3 fixed flex items-center justify-between bg-gray-700'>
            <div className='flex gap-5 items-center'>
                <img style={{filter:`drop-shadow(0 4px 6px rgb(24, 13, 65, 1))`}} className='h-[75px] py-2 align-middle rounded-full' src="/logo.png" alt="" />
                <div className='flex flex-col items-center'><span className='font-bold text-3xl font-serif text-green-400'>Springdale </span><span className='text-white font-bold'>Public School</span>
                </div>
            </div>
                <div>
                    <ul className='md:flex hidden items-center h-full gap-5 text-white font-bold'>
                        <li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>Home</li>
                        <li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>About As</li>
                        <li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>Academics</li>
                        <li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>Admisssion</li>
                        <li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>Faculty</li>
                        <li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>Student</li>
                        <li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>Gallary</li>
                        <li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>Contact Us</li>
                    </ul>
                    <img className='md:hidden block' src="/menu-line.svg" alt="" />
                </div>
        </nav>
    </>
  )
}

export default NavBar
