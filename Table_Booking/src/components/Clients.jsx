import React from 'react'
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import Box from './Box'


function Clients() {
    const foodies = [
        {
            id: 1,
            imgURL: `${p1}`,
            name:'Jack Smith',
            feedback:'"Exceptional flavors, impeccable service. Yummy is a culinary gem that leaves a lasting impression. A must-visit for food enthusiasts!"',
            stars: 5
        },
        {
            id: 2,
            imgURL: `${p2}`,
            name:'Eva James',
            feedback:'"Delightful experience! Exquisite flavors, attentive service, and a charming ambiance. Yummy is now my top choice for dining."',
            stars: 4
        },
        {
            id: 3,
            imgURL: `${p3}`,
            name:'Jan Lam',
            feedback:'"Delightful culinary journey! Exquisite dishes, impeccable service. A must-visit for food enthusiasts. Yummy exceeded all expectations."',
            stars: 5
        }
    ]
    return ( 
        <div className='bg-slate-50 min-h-screen text-center p-8'>
            <h3 className='text-xl text-primary'>FeedBack</h3>
            <br />
            <h1 className='text-2xl font-semibold'>Our Happy Clients</h1>
            <div className='mt-10 p-5 flex flex-col items-center md:flex-row justify-around'>
                {foodies.map(item => {
                    return(
                        <Box
                            key={item.id}
                            name={item.name}
                            image={item.imgURL}
                            feedback={item.feedback}
                            rating={item.stars}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Clients;