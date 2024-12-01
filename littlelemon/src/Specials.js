import React from "react"
//import lemondessert from './images/lemondessert.jpg'
import { images } from "./images";
import './App.css';


function Specials(){
    return(
    <>
    <div className="specials-container">
        <div className="specials-items">
    <h1>Specials</h1>
    <button className="btn-order">Online Menu</button>
    </div>
    {/* <img className="specials-image" src={lemondessert} alt="lemon dessert"></img> */}
    <div className="specials-image"> {Object.keys(images).map((key, index) => ( <img key={index} src={images[key]} alt={`Image ${index + 1}`} width={200}  /> ))} </div>
    
    
   
   
   
    </div>
 
    </>
    )
}


export default Specials

