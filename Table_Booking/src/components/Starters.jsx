import React from 'react'

function Starters(props) {
    return ( 
        <div className='text-center grid place-items-center'>
            <h1 className='text-lg text-primary'>Starters</h1>
            <br />
            <img src={props.imageURL} alt='image' className='w-1/3' />
            <h3 className='text-2xl'>{props.name}</h3>
            <p>{props.description}</p>
            <h2>{props.price}</h2>
        </div>
     );
}

export default Starters;