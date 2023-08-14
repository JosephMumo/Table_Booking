import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Landing from './components/Landing';
import Specialty from './components/Specialty';
import Download from './components/Download';
import Clients from './components/Clients';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
    return ( 
        <div >
            <Header />
            <Home />
            <Landing />
            <Specialty/> 
            <Download /> 
            <Clients /> 
            <Booking /> 
            <Footer />
        </div>
     );
}

export default App;