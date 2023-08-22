import React, { useEffect } from 'react'
import plate from '../images/pic2.jpg'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'
import 'aos/dist/aos.css'

function Landing() {

    
    return ( 
        <div className='flex flex-col justify-between'>
            <div className='flex flex-col md:flex-row w-full min-h-screen bg-white text-black items-center'>
                <div className='w-full md:w-1/2'>
                    <img src={plate} alt='2' />
                </div>
                <div className='w-full p-10 md:w-1/2 md:px-20' data-aos='fade-up'>
                    <h5 className='text-xl font-semibold text-primary'>Welcome to Yummy</h5>
                    <br />
                    <h1 className='text-4xl semi-bold'>The Best Place<br />for healthy food lovers</h1>
                    <br />
                    <p>We offer you the most delicious healthy dishes that do not distinguish them from unhealthy food. Under the supervision of the most important chefs specialized<br />in healthy food. Our motto is good food for good health.</p>
                    <br />
                    <button className='bg-primary text-white p-3 rounded-full'>Explore our Store</button>
                </div>
            </div>
            <div className='flex justify-center w-full text-primary'>
                <PiDotsThreeOutlineFill size="2em" />
            </div>
        </div>
     );
}

export default Landing;