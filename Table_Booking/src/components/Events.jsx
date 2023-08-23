import React from 'react'
import Footer from './Footer';
import Crsel from './Crsel';


function Events() {
    return ( 
        <>
            <div className=' w-full p-8 text-center'>
                <h1 className="text-base text-black">Events</h1>
                <br />
                <h1 className='text-3xl text-black mt-2'>Share <span className='text-primary'>Your Moments</span> in Our Restaurant</h1>
                <Crsel />
            </div>
            <Footer />
        </>
     );
}

export default Events;