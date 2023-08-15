import React, { useContext } from 'react'
import {PiDotsThreeOutlineFill } from 'react-icons/pi'
import { myContext } from '../context/AppContext';



function Booking() {
    const {handleChange, handleSubmit, info} = useContext(myContext)
    
    return ( 
        <div className='text-center mt-5 p-8 min-h-screen'>
            <h3 className='text-primary mb-2 text-xl'>Advanced Booking</h3>
            <h1 className='text-3xl font-bold'>Reserve a Table</h1>
            <br />
            <div className='p-5'>
                <form className='flex flex-col justify-center space-y-10 p-10 md:p-20' onSubmit={handleSubmit}>
                    <div className='flex flex-col md:flex-row justify-between min-h-48 items-center'>
                        <section className='p-2 flex flex-col space-y-10'>
                            <label htmlFor='date' className='font-bold'>Date</label>
                            <input type='date' id='date' name='date' value={info.date} className='bg-slate-50' onChange={handleChange} />
                        </section>
                        <section className='p-2 flex flex-col space-y-10'>
                            <label htmlFor='time' className='font-bold'>Time</label>
                            <input type='time' id='time' name='time' value={info.time} className='bg-slate-50' onChange={handleChange} />
                        </section>
                        <section className='p-2 flex flex-col space-y-10'>
                            <label htmlFor='people' className='font-bold'>People</label>
                            <input type='number' id='people' name='people' value={info.people} placeholder='No. people' className='bg-slate-50' onChange={handleChange} />
                        </section>
                    </div>
                    <div className='w-full flex justify-center mb-10'>
                        <button className='mt-5 p-3 rounded-full text-white bg-primary w-36'>Check Booking</button>
                    </div>
                    <div className='w-full flex justify-center text-primary mt-auto'>
                        <PiDotsThreeOutlineFill size='2em' />
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Booking;