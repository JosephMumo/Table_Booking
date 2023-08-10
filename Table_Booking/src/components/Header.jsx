import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'

function Header() {
    const [menu, setMenu ] = useState(false)
    return ( 
        <>
            <div className='hidden md:flex flex-row justify-between p-5 items-center sticky z-50'>
                <div className="text-2xl font-bold">
                    <h1>Yummy</h1>
                </div>
                <ul className="flex flex-row space-x-3 text-lg cursor-pointer font-semibold">
                    <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Home</li>
                    <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>About</li>
                    <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Menu</li>
                    <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Events</li>
                    <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Chefs</li>
                    <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Gallery</li>
                    <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Drop Down</li>
                    <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Contact</li>
                </ul>
                <button className='bg-red-600 text-white p-2 rounded-full'>Book a Table</button>
            </div>
            <div className='flex flex-col py-5 px-3 fixed  md:hidden w-full bg-white'>
                <div className='flex flex-row justify-between'>
                    <div className='text-2xl font-bold'>Yummy</div>
                    <div onClick={() => setMenu(!menu)} >
                        {menu ? <MdOutlineClose size={28} /> : <HiMenu size={28} />}
                    </div>
                </div>
                {
                    menu &&
                    (
                        <ul className='grid grid-cols-1 place-items-center space-y-2 text-2xl p-5 cursor-pointer'>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Home</li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>About</li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Menu</li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Events</li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Chefs</li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Gallery</li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Drop Down</li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-red-600'>Contact</li>
                        </ul>
                    )
                }
            </div>
        </>
     );
}

export default Header;