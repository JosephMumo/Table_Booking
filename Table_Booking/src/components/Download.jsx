import React from 'react'
import { AiFillApple } from 'react-icons/ai'
import { BiLogoPlayStore } from 'react-icons/bi'
import pic from '../images/app.png'
import 'aos/dist/aos.css'

function Download() {
    return ( 
        <div className='w-full flex flex-col md:flex-row min-h-screen p-8 place-items-center'>
            <div className='w-full md:w-1/2  p-8 md:p-16' data-aos='fade-up'>
                <h5 className='text-base font-semibold text-primary'>App Download</h5>
                <br />
                <h1 className='text-2xl font-bold'>Download our apps <br />for quick delivery</h1>
                <br />
                <p>
                    The free app is available for both IPhone and Android users. <br />
                    Download the app now and enjoy the delicious healthy dishes <br />
                    in addition to express delivery service.
                </p>
                <div className='mt-10 flex flex-row space-x-2'>
                    <section className='flex flex-row items-center space-x-2 border border-black p-2'>
                        <AiFillApple size={40} />
                        <div className="flex flex-col">
                            <p>Get it on</p>
                            <h6 className='font-bold'>Apple Store</h6>
                        </div>
                    </section>
                    <section className='flex flex-row items-center space-x-2 border border-black p-2'>
                        <BiLogoPlayStore size={40} />
                        <div className="flex flex-col">
                            <p>Get it on</p>
                            <h6 className='font-bold'>Google Play</h6>
                        </div>
                    </section>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <img src={pic} alt='1' />
            </div>
        </div>
     );
}

export default Download;