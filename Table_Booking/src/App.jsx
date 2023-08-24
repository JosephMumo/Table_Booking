import React from 'react'
import Header from './components/Header'
import About from './components/About';
import Menu from './components/Menu';
import Events from './components/Events';
import Chefs from './components/Chefs';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return ( 
        <div >
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/menu' element={<Menu />}></Route>
                <Route path='/event' element={<Events />}></Route>
                <Route path='/chefs' element={<Chefs />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </div>
     );
}

export default App;