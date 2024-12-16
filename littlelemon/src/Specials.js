import React from "react"
//import lemondessert from './images/lemondessert.jpg'
import { images } from "./images";
import './App.css';
import { Link } from 'react-router-dom';

const specialText = [
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
    return ( <> <div className="specials-container"> <div className="specials-header"> <h1>Specials</h1> <button className="btn-order"> <Link className="order-link" to="/onlineorder">Online Menu</Link></button> </div> 
    
    <div className="specials-items"> {specialText.map((item, index) => ( <div key={index} className="special-item"> <img src={ index === 0 ? images.image1 : index === 1 ? images.image2 : images.image3 } alt={item.itemname}  /> <div className="special-text"> <h3>{item.itemname}</h3> <p>{item.description}</p> </div> </div> ))} </div> </div> </> );
}


export default Specials

