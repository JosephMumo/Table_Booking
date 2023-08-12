import React from 'react'

function Card(props) {
    return ( 
        <div className="grid place-items-center mt-5 p-5 gap-x-1 gap-1">
            <div className='h-48 w-48 '>
                <img src={props.image} alt='img' />
            </div>
            <p className='text-lg font-bold'>{props.title}</p>
        </div>
     );
}

export default Card;