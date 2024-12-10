import React from 'react'; 
import './App.css';
import logo from './images/littlelemonlogo.png' 

function Footer() { 
    return ( <footer className="footer">
        <div className='footer-logo'><img src={logo} width={250}></img></div>
         <div className="footer-content"> 
    <div className="footer-section contact-info"> <h3>Contact</h3> 
    <p>123 Main Street, City, Country</p> <p>Phone: (123) 456-7890</p>
     <p>Email: info@example.com</p> </div> 
     <div className="footer-section social-media"> <h3>Social Media</h3> <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> 
     </div>
      </div> 
      </footer> ); } 
    
    export default Footer

