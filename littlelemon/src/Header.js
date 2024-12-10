import React from 'react'; 
import restaurantfood from './images/restaurantfood.jpg'

function Header(){
    return(
    <>
    <div className='header-container'>
        <div className='header-content'> 
<h1 className="main-header">Little Lemon</h1>
<h2 className="sub-header">Chicago</h2>
<p className="header-text">Based in Chicago, Illinois, Little Lemon is a family-owned<br/> Mediterranean restaurant, focused on traditional recipes served with a modern twist.<br/>  The chefs draw inspiration from Italian, Greek, and Turkish culture and <br/> have a menu of 12–15 items that they rotate seasonally.</p>
<button className="btn-reserve">Reserve a Table</button>
</div>


<img src={restaurantfood} className="header-image" alt="food sample"></img>
</div>
</>
    )
}

export default Header;


