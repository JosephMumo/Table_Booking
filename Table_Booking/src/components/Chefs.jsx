import React from 'react'
import Footer from './Footer';
import Boxe from './Boxe';

function Chefs() {
    const CData = [
        {
            id: 1,
            name: 'Walter White',
            post: 'Master Chef',
            imgUrl:'https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-1.jpg',
            desc: 'Meet our master chef, a culinary virtuoso with a passion for crafting extraordinary flavors. With a wealth of expertise, each dish is a masterpiece of innovation and taste perfection.'
        },
        {
            id: 2,
            name: 'Sarah Jhonson',
            post: 'Patissier',
            imgUrl:'https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-2.jpg',
            desc: 'Discover our patissier, an artist dedicated to creating confectionery wonders. With precision and creativity, each dessert is a symphony of flavors and visual delight, redefining sweetness.'
        },
        {
            id: 3,
            name: 'William Anderson',
            post: 'cook',
            imgUrl:'https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-3.jpg',
            desc: 'Meet our skilled cook, the backbone of our kitchen. With dedication, they skillfully prepare dishes that delight taste buds and keep guests coming back for more.'
        }
    ]
    return ( 
        <>
            <div className='min-h-screen py-8'>
                <h1 className="text-center">Chefs</h1>
                <br />
                <h2 className='text-3xl text-black font-light mt-5 text-center'>Our <span className='text-primary'>Proffesional</span> Chefs</h2>
                <div className='flex flex-col md:flex-row justify-between   w-full px-5'>
                    { CData.map(item => {
                        return (
                            <Boxe
                            key={ item.id}
                            {...item} />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
     );
}

export default Chefs;