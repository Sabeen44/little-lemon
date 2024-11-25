import React from 'react'; 
import { Link } from 'react-router-dom'



function Nav() {
     return ( 
      <>
        
     <div className="nav">
      <div className="nav-image">
         <img src={`${process.env.PUBLIC_URL}/little lemon logo.png`} alt="Logo" width={200}/>
         </div>

    <div className="nav-links" >
        <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/About">About</Link></li>
           <li><Link to="/Menu">Menu</Link></li>
           <li><Link to="/Reservation">Reservation</Link></li>
           <li><Link to="/Order Online">Order Online</Link></li>
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