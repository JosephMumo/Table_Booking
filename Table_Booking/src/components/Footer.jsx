import React from 'react'
import { TbPhoneCall } from 'react-icons/tb'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

function Footer() {
    return ( 
        <div className='flex flex-col md:flex-row p-10 text-white bg-black justify-around md:items-center min-h-screen'>
            <section className='space-y-3 mb-5'>
                <h3 className='text-3xl font-bold'>YUMMY</h3>
                <br />
                <p>We offer you with the most healthy dishes that<br /> do not distinguish them from unhealthy food.<br />
                    Under the supervision of the most qualified<br /> chefs specialized in healthy food.<br />
                    Our motto is good food for good health.
                </p>
            </section>
            <ul className='space-y-3 mb-5'>
                <li className='text-2xl font-semibold '>Explore</li>
                <br />
                <li><a href='#'>Burger</a></li>
                <li><a href='#'>Salad</a></li>
                <li><a href='#'>Breakfast</a></li>
                <li><a href='#'>Lunch</a></li>
                <li><a href='#'>Dinner</a></li>
            </ul>
            <ul className='space-y-3 mb-5'>
                <li className='text-2xl font-semibold'>Support</li>
                <br />
                <li><a href='#'>Book a Table</a></li>
                <li><a href='#'>Press</a></li>
                <li><a href='#'>Faqs</a></li>
                <li><a href='#'>Privacy Policy</a></li>
            </ul>
            <div className='space-y-3 mb-5'>
                <h3 className='text-2xl font-semibold'>Contact</h3>
                <br />
                <section className='flex align-middle space-x-2'>
                    <TbPhoneCall className='text-white bg-primary rounded-full p-2'  size='2em' />
                    <p>+963 000 00</p>
                </section>
                <section className='flex align-middle space-x-2'>
                    <AiOutlineMail className='text-white bg-primary rounded-full p-2'  size='2em' />
                    <p>yummy@gmail.com</p>
                </section>
                <section className='flex align-middle space-x-2'>
                    <HiOutlineLocationMarker className='text-white bg-primary rounded-full p-2'  size='2em' />
                    <p>Nairobi, Kenya</p>
                </section>
            </div>
        </div>
     );
}

export default Footer;