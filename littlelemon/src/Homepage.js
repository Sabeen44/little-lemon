
import React from "react"
import Nav from "./Nav.js"
import Header from './Header.js'
import Specials from "./Specials.js"
import Reviews from "./Reviews.js"
import About from "./About.js"
import Footer from "./Footer.js"







function Homepage(){

    return(
        <div div className="grid-container">
             <Nav/>
            <Header/> 
            <Specials/>
            <Reviews/>
            <About/>
            <Footer/>
            
        </div>
    )
}

export default Homepage



