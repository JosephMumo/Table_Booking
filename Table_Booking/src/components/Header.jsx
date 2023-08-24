import React, { useEffect, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Header() {
    const [menu, setMenu ] = useState(false)
    return ( 
        <>
            <div className='hidden md:flex flex-row justify-between p-5 items-center fixed shadow-md z-50 w-full bg-white'>
                <div className="text-2xl font-bold">
                    <h1>Yummy</h1>
                </div>
                <ul className="flex flex-row space-x-3 text-lg cursor-pointer font-semibold">
                        <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary visited:border-b-[3px]'><Link to='/'>Home</Link></li>
                        <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary visited:border-b-[3px]'><Link to='/about'>About</Link></li>
                        <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary'><Link to='/menu'>Menu</Link></li>
                        <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary'><Link to='/event'>Events</Link></li>
                        <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary'><Link to='/chefs'>Chefs</Link></li>
                        <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary'><Link to='/contact'>Contact</Link></li>   
                </ul>
                <button className='bg-primary text-white p-2 rounded-full'><a href='#booking'>Book a Table</a></button>
            </div>
            <div className='flex flex-col py-5 px-3 fixed md:hidden w-full bg-white z-50 shadow-sm'>
                <div className='flex flex-row justify-between'>
                    <div className='text-2xl font-bold'>Yummy</div>
                    <div onClick={() => setMenu(!menu)} >
                        {menu ? <MdOutlineClose size={28} /> : <HiMenu size={28} />}
                    </div>
                </div>
                {
                    menu &&
                    (
                        <ul className='grid grid-cols-1 place-items-center space-y-2 text-2xl p-5 cursor-pointer z-9'>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary'><Link to='/'>Home</Link></li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary'><Link to='/about'>About</Link></li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary'><Link to='/menu'>Menu</Link></li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary'><Link to='/event'>Events</Link></li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary'><Link to='/chefs'>Chefs</Link></li>
                            <li className='text-gray-500 transition-all ease-in duration-250 hover:text-black hover:border-b-[3px] border-primary'><Link to='/contact'>Contact</Link></li>
                        </ul>
                    )
                }
            </div>

        </>
     );
}

export default Header;