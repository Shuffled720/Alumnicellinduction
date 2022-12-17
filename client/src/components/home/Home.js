import React from 'react'



//components
import BootHeader from '../header/newHerdyeg'
import Cards from './Cards'
import Carousels from './Carousels'
import AlumniUpdate from './AlumniUpdate'
import Contact from './Contact'
import Footer from './Footer'


const Home = () => {
    return (
        <>
            {/* <BootHeader/> */}
            <Carousels/>
            <Cards/>
            <AlumniUpdate/>
            <Contact/>
            
        </>
    )
}

export default Home