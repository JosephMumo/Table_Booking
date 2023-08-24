import React from 'react'
import Footer from './Footer';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import { LiaDoorOpenSolid } from 'react-icons/lia'

function Contact() {
    return ( 
        <>
            <div className='min-h-screen text-center grid place-items-center'>
                <h1 className="text-center p-5">Contact</h1>
                <h1 className='text-3xl font-light mt-3 '>Need help?<span className='text-primary'>Contact Us</span></h1>
                <br />
                <div className='grid grid-cols-1 md:grid-cols-2  space-x-2 space-y-2 w-3/4'>
                    <section className=' flex bg-slate-50 p-2 text-start items-center space-x-3'>
                        <HiOutlineLocationMarker size='3em'  className='bg-primary rounded-full p-2' style={{color:'#fff'}} />
                        <div className=' flex flex-col'>
                            <h4 className='text-lg font-semibold'>Our Address</h4>
                            <p className='font-light'>A108 Adam Street, New York</p>
                        </div>
                    </section>
                    <section className=' flex bg-slate-50 p-3 text-start items-center space-x-3'>
                        <HiOutlineMail size='3em' className='bg-primary rounded-full p-2' style={{color:'#fff'}} />
                        <div className=' flex flex-col'>
                            <h4 className='text-lg font-semibold'>Email Us</h4>
                            <p className='font-light'>Contact@example.com</p>
                        </div>
                    </section>
                    <section className=' flex bg-slate-50 p-3 items-center space-x-3'>
                        <FiPhoneCall size='3em' className='bg-primary rounded-full p-2' style={{color:'#fff'}} />
                        <div className=' flex flex-col text-start'>
                            <h4 className='text-lg font-semibold'>Call Us</h4>
                            <p className='font-light'>+1 5589 55488 55</p>
                        </div>
                    </section>
                    <section className=' flex bg-slate-50 p-3 text-start items-center space-x-3'>
                        <LiaDoorOpenSolid size='3em' style={{color:'#fff'}} className='bg-primary rounded-full p-2' />
                        <div className=' flex flex-col'>
                            <h4 className='text-lg font-semibold'>Opening Hours</h4>
                            <p className='font-light'><strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed</p>
                        </div>
                    </section>
                </div>
                <div className='w-full grid place-items-center'>
                    <form className='py-5 w-3/4 flex flex-col space-y-2 items-center'>
                        <section className='w-full flex justify-between'>
                            <input type='text' value='' placeholder='Your Name'   className='w-1/2 h-10 bg-slate-50 px-2 outline-none' />
                            <input type="email" value='' placeholder='Your Email' className='w-1/2 h-10 bg-slate-50 px-2 outline-none' />
                        </section>
                        <input type="text" value='' placeholder='Subject'  className='h-10 bg-slate-50 w-full px-2 outline-none'/>
                        <textarea placeholder='Message' type='text' className='bg-slate-50 p-2 outline-none w-full ' />
                        <br />
                        <button className='bg-primary p-2 rounded-full w-56 mb-5 text-white'>Send message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
     );
}

export default Contact;