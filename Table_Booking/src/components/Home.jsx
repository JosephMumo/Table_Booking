import React from 'react'
import {BsPlayCircle} from 'react-icons/bs'
import food from '../images/pic1.jpg'

function Home() {
    return ( 
        <div className='flex flex-col py-8 md:py-0 md:flex-row bg-gray-200 items-center min-h-screen'>
            <div className='w-full p-10 md:w-1/2 md:px-20'>
                <h1 className='text-5xl font-thin'>EJOY YOUR HEALTHY <br />DELICIOUS FOOD</h1>
                <br />
                <p className='mt-3'>Indulge in Culinary Delights at Our Exquisite Restaurant <br />Where Every Bite Tells a Flavorful Story!</p>
                <div className='flex flex-row items-center space-x-9 mt-10'>
                    <button className='bg-primary p-2 px-3 rounded-full text-white'>Book a Table</button>
                    <section className='flex flex-row space-x-2 items-center'>
                        <BsPlayCircle color='red' size={26} />
                        <p className='font-bold'>Watch Video</p>
                    </section>
                </div>
            </div>
            <div className='w-full md:w-1/2 p-8 grid place-items-center'>
                <img src={food} className='w-3/4 rounded-full' />
            </div>
        </div>
    );
}

export default Home;