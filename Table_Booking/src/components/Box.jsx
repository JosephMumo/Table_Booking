import React from 'react'
import {AiFillStar} from 'react-icons/ai'

function Box(props) {
    
    return ( 
        <div className='border border-black bg-white p-6 w-64 h-auto mt-8 z-0 relative text-start'>
            <div className='w-16 h-16  grid place-items-center absolute -left-7 -top-7'>
                <img src={props.image} className='rounded-full w-16 h-16 object-cover' alt='1'   />
            </div>
            <h3 className='font-bold'>{props.name}</h3>
            <h4>Client</h4>
            <br />
            <p>{props.feedback}</p>
            <br />
            <div className='flex items-center space-x-2'>
                Rating
                <AiFillStar />
            </div>
        </div>
     );
}

export default Box;