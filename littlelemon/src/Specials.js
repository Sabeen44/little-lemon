import React from "react"
//import lemondessert from './images/lemondessert.jpg'
import { images } from "./images";
import './App.css';
import { Link } from 'react-router-dom';

const specialText = [
    {itemname:'Greek Salad',
         price: "12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {itemname:'Lemon Dessert',
        price: "5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
    {itemname:'Bruchetta',
       price: "5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    }
]

function Specials(){
    return ( <> <div className="specials-container"> <div className="specials-header"> <h1 className="text-4xl font-normal text-gray-900 font-markazi">This Week's Specials</h1> <button className="btn-order"> <Link className="order-link" to="/onlineorder">Online Menu</Link></button> </div> 
    
    <div className="specials-items"> {specialText.map((item, index) => ( <div key={index} className="special-item"> <img src={ index === 0 ? images.image1 : index === 1 ? images.image2 : images.image3 } alt={item.itemname}  /> <div className="special-text"> <h3>{item.itemname}</h3> <h4>{item.price}</h4> <p>{item.description}</p> </div> </div> ))} </div> </div> </> );
}


export default Specials

