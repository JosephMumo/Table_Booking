import React, { createContext, useEffect, useState } from 'react'
import AOS from 'aos'

export const myContext = createContext()

function AppContextProvider({children}) {
    useEffect(() => {
        AOS.init( {duration: 2000})
    }, [])
    
    const [info, setInfo] = useState({
        date: '',
        time:'',
        people: ''
    })
    const [book, setBook] = useState([])

    function handleChange(event) {
        const { name, value } = event.target
        setInfo(prev => {
            return(
                { ...prev,
                [name]: value
            }
            )
        })
        console.log(info)
    }
    function handleSubmit(event) {
        event.preventDefault()
        setBook(info)
        alert('Your Booking has been successfully added!!')
        setInfo({
            date:"",time:"",people:""
        })
    }
    useEffect(() => {
        localStorage.setItem('newBooking', JSON.stringify(book))
    }, [book])

    const bookingInfo = JSON.parse(localStorage.getItem('newBooking'))
    console.log(bookingInfo)
    console.log(localStorage)
    return(
        <myContext.Provider value={{handleChange, handleSubmit, info, book, setBook, setInfo}}>
            {children}
        </myContext.Provider>
    )
}
export default AppContextProvider