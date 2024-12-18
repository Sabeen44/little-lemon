import React from 'react'; 
import { Link } from 'react-router-dom'
import logo from './images/littlelemonlogo.png'


function Nav() {
     return ( 
      <>
        
     <div className="nav-container sm:ml-6 md:flex sm:space-x-8 font-karla" >
      <div className="nav-image">
         <img src={logo} alt="Logo" width={200}/>
         </div>

    <div className="nav-links" >
        <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/About">About</Link></li>
           <li><Link to="/Menu">Menu</Link></li>
           <li><Link to="/booking">Reservation</Link></li>
           <li><Link to="/onlineorder">Order Online</Link></li>
           <li><Link to="/Login">Login</Link></li>
        </ul>
   </div>
   </div>
  
  </>
  );
  

}
  
  export default Nav

  // <li><Link to="/">Home</Link></li>
  // <li><Link to="/">About</Link></li>
  // <li><Link to="/">Menu</Link></li>
  // <li><Link to="/">Reservations</Link></li>
  // <li><Link to="/">Order Online</Link></li>
  // <li><Link to="/">Login</Link></li>