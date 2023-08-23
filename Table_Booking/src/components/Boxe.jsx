import React from 'react'

const Boxe = (props) => {
    return (
        <div className='p-5 text-center w-full md:w-1/3 mx-3 transition ease-in-out delay-100 hover:scale-105'>
            <img src={props.imgUrl} alt='1' className='rounded-t-xl' />
            <h2 className='text-2xl font-bold'>{props.name}</h2>
            <h3 className='text-lg font-light'>{props.post}</h3>
            <h3>{props.desc}</h3>
        </div>
    )
}
export default Boxe;