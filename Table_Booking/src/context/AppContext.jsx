import React, { createContext, useEffect } from 'react'
import AOS from 'aos'

const myContext = createContext()

function AppContextProvider({children}) {
    useEffect(() => {
        AOS.init( {duration: 2000})
    }, [])
    return(
        <myContext.Provider value={{}}>
            {children}
        </myContext.Provider>
    )
}
export default AppContextProvider