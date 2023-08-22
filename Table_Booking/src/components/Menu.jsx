import React, { useState } from 'react'
import Footer from './Footer';
import Starters from './Starters';
import BreakFast from './BreakFast';
import Lunch from './Lunch';
import Dinner from './Dinner';


function Menu() {
    const [item1, setItem1] = useState(true)
    const [item2, setItem2] = useState(false)
    const [item3, setItem3] = useState(false)
    const [item4, setItem4] = useState(false)

    const toggleStarters = () => {
        setItem1(true)
        setItem2(false);
        setItem3(false);
        setItem4(false);
    }
    const toggleBreak = () => {
        setItem2(true);
        setItem1(false);
        setItem3(false);
        setItem4(false);
    }
    const toggleLunch = () => {
        setItem3(true);
        setItem1(false)
        setItem2(false)
        setItem4(false)
    }
    const toggleDinner = () => {
        setItem4(true);
        setItem1(false)
        setItem2(false)
        setItem3(false)
    }
    const sData = [
        {
            id: 1,
            name: 'Magnum Tiste',
            price: '$5.85',
            description: 'Delight in a flavorful burst of freshness',
            imgUrl: 'https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png'
        },
        {
            id: 2,
            name: 'Aut Luia',
            price: "$7.85",
            description: "A delicious blend of flavors and textures",
            imgUrl: 'https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-2.png'
        },
        {
            id: 3,
            name: 'Est Eligendi',
            price: "$6.90",
            description: 'perfect starter meal to invigorate your taste buds',
            imgUrl: 'https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-3.png'
        },
        {
            id: 4,
            name: 'Eos Luibusdam',
            price: "$8.90",
            description: 'A refreshing introduction to your culinary journey',
            imgUrl: 'https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-4.png'
        },
        {
            id: 5,
            name: 'Direva',
            price: "$6.90",
            description: 'fresh greens tossed with zesty vinaigrette',
            imgUrl: 'https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-5.png'
        },
        {
            id: 6,
            name: 'Riosam',
            price: "$7.85",
            description: 'harmonious fusion of fresh ingredients and flavors',
            imgUrl: 'https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-6.png'
        }
    ]

    return (  
        <>
            <div className='min-h-screen w-full p-8 text-center'>
                <h3 className="text-base text-black mt-12">Our Menu</h3>
                <br />
                <h1 className='text-2xl'>Check Our <span className='text-primary'>Yummy Menu</span></h1>
                <br />
                <ul className='flex flex-row justify-center space-x-2 text-lg'>
                    <li className={item1 ? 'text-primary border-b border-b-primary' : 'hover:text-primary border-b hover:border-b-primary'} onClick={toggleStarters}>Starters</li>
                    <li className={item2 ? 'text-primary border-b border-b-primary' : 'hover:text-primary border-b hover:border-b-primary'} onClick={toggleBreak}>BreakFast</li>
                    <li className={item3 ? 'text-primary border-b border-b-primary' : 'hover:text-primary border-b hover:border-b-primary'} onClick={toggleLunch}>Lunch</li>
                    <li className={item4 ? 'text-primary border-b border-b-primary' : 'hover:text-primary border-b hover:border-b-primary'} onClick={toggleDinner}>Dinner</li>
                </ul>
                <div className='w-full min-h-screen'>
                    <div className='grid grid-cols-1 md:grid-cols-3 space-y-4'>
                        { item1 && sData.map(item => {
                            return( <Starters 
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                imageURL ={item.imgUrl}
                            />)
                            })
                        }
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 space-y-4'>
                        { item2 && sData.map(item => {
                            return( <BreakFast 
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                imageURL ={item.imgUrl}
                            />)
                            })
                        }
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 space-y-4'>
                        { item3 && sData.map(item => {
                            return( <Lunch
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                imageURL ={item.imgUrl}
                            />)
                            })
                        }
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 space-y-4'>
                        { item4 && sData.map(item => {
                            return( <Dinner
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                imageURL ={item.imgUrl}
                            />)
                            })
                        }
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default Menu;