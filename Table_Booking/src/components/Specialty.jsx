import React from 'react'
import bf from '../images/soup.jpg'
import lc from '../images/lunch.jpg'
import sl from '../images/salad.jpg'
import dss from '../images/sweet.jpg'
import Card  from './Card'
import 'aos/dist/aos.css'


function Specialty() {
    const Data = [
        {
            key: 1,
            imgUrl: `${bf}`,
            title:'BreakFast'
        },
        {
            key: 2,
            imgUrl: `${lc}`,
            title:'Lunch'
        },
        {
            key: 3,
            imgUrl: `${sl}`,
            title:'Salad'
        },
        {
            key: 4,
            imgUrl: `${dss}`,
            title:'Dessert'
        }
    ]
    
    return ( 
        <div className='p-10 text-center  place-items-center'>
            <h1 className='text-primary text-3xl font-bold'>Our Specialties</h1>
            <p className='mt-3'>Breakfast brunch, lunch and afternoon snacks. We are here to provide you with delicious foods</p>
            <div className='flex flex-col justify-between' data-aos='fade-up'>
                <div className='grid grid-cols-1 py-10 mt-10 md:grid-cols-2 lg:grid-cols-4'>
                    { Data.map(item => {
                        return (<Card 
                            key={item.key}
                            image={item.imgUrl}
                            title={item.title}
                        />)
                    })}
                </div>
                
            </div>
        </div>
     );
}

export default Specialty;