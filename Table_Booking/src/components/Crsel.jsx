import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cdy from '../images/bday.jpg';
import bdy from '../images/cday.jpg';
import pdy from '../images/pday.jpg';

const Crsel = () => {
    return (
        <div>
            <Carousel className='grid place-items-center'>
                <div className='mt-3 md:px-24 relative'>
                    <img src={bdy} alt='1' />
                    <div>
                        <h3 className='text-2xl font-semibold'>Private Parties</h3>
                        <br />
                        <h1 className='text-3xl font-bold border-b border-primary'>$289</h1>
                        <br />
                        <p>Indulge in exclusive gatherings at our restaurant. Elevate your private parties with exquisite cuisine, impeccable service, and a charming ambiance. Unforgettable memories await.</p>
                    </div>
                            
                </div>
                <div className=' mt-3 md:px-24'>
                    <img src={cdy} alt="2" />
                    <h3 className='text-2xl font-semibold'>Birthday Parties</h3>
                    <br />
                    <h1 className='text-3xl font-bold border-b border-primary'>$499</h1>
                    <br />
                    <p>Celebrate joyous milestones with us! Host remarkable birthday parties, relishing delectable dishes, lively atmosphere, and delightful moments that linger.</p>
                </div>
                <div className=' mt-3 md:px-24'>
                    <img src={pdy} alt="3" />
                    <h3 className='text-2xl font-semibold'>Custom Parties</h3>
                    <br />
                    <h1 className='text-3xl font-bold border-b border-primary'>$99</h1>
                    <br />
                    <p>Craft your dream event! Our restaurant offers tailored experiences for custom parties, ensuring every detail reflects your vision flawlessly.</p>
                </div>
            </Carousel>
        </div>
    )
}
export default Crsel;