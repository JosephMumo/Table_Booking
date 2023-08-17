import React from 'react'
import Footer from './Footer';
import food from '../images/pic1.jpg'
import 'aos/dist/aos.css'

function About() {
    return ( 
        <>
            <div className='flex flex-col py-8 md:py-0 md:flex-row bg-gray-200 items-center min-h-screen'>
                <div className='w-full p-12 md:w-1/2 md:px-20' data-aos='fade-up'>
                    <h1 className='text-5xl font-thin'>ABOUT <br /><span className='text-primary'>YUMMY</span></h1>
                    <br />
                    <p className='mt-3'>
                    At Yummy, we believe in the magic of flavors and the joy of sharing a great meal. Our restaurant is a haven for food enthusiasts, where every dish tells a unique story. With a commitment to quality ingredients and innovative recipes, we invite you to embark on a culinary journey that tantalizes your taste buds and leaves you craving for more. Join us at Yummy and savor the extraordinary in every bite.
                    </p>
                
                </div>
                <div className='w-full md:w-1/2 p-8 grid place-items-center'>
                    <img src={food} className='w-3/4 rounded-full' />
                </div>
            </div>
            <Footer />
        </>
     );
}

export default About;