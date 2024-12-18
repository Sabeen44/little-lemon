import React from 'react'; 
import restaurantfood from './images/restaurantfood.jpg'
import { Link } from 'react-router-dom';


function Header(){
    return(
    <>
    <div className='header-container'>
        <div className='header-content'> 
<h1 className="main-header text-primary-yellow font-markazi text-4xl md:text-6xl font-medium">Little Lemon</h1>
<h2 className="sub-header text-white font-karla text-2xl md:text-3xl mb-4">Chicago</h2>
<p className="header-text text-gray-100 font-karla text-lg md:text-xl max-w-md mb-8 font-semibold mx-auto md:mx-0">Based in Chicago, Illinois, Little Lemon is a family-owned<br/> Mediterranean restaurant, focused on traditional recipes served with a modern twist.<br/>  The chefs draw inspiration from Italian, Greek, and Turkish culture and <br/> have a menu of 12–15 items that they rotate seasonally.</p>
<button className="btn-reserve"><Link className='reserve-link' to="/booking">Reserve a Table</Link></button>
</div>



<img src={restaurantfood} className="header-image" alt="food sample"></img>
</div>
</>
    )
}

export default Header;


