import React from "react"
//import lemondessert from './images/lemondessert.jpg'
import { images } from "./images";
import './App.css';

const SpecialText = [
    {itemname:'Greek Salad',
        description: 'fresh and crisp'
    },
    {itemname:'Lemon Dessert',
        description: 'sweet and citrusy'
    },
    {itemname:'Bruchetta',
        description: 'tomato burst'
    }
]

function Specials(){
    return(
    <>
    <div className="specials-container">
        <div className="specials-header">
    <h1>Specials</h1>
    <button className="btn-order">Online Menu</button>
    </div>
    <div className="specials-items"> {Object.keys(images).map((key, index) => ( 
        <div key={index} className="special-item"> 
    <img src={images[key]} alt={`Image ${index + 1}`}/> <div className="special-text">This is a description for image {index + 1}</div> </div> ))} </div>
         </div>
 
    </>
    )
}


export default Specials

