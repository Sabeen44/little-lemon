

import React from 'react'
import About from './About.js'
import Homepage from './Homepage.js'
import Bookingpage from './Bookingpage.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
import Specials from './Specials.js';
import Login from './Login.js';



function App() {
  return (
    <Router>
    <>
    <div>
    
       <Routes>
        <Route path="/" element={<Homepage />} />   
      <Route path="/about" element={<About />} />
       <Route path="/menu" element={<Specials />} />
       <Route path="/onlineorder" element={<Specials />}/>
       <Route path="/login" element={<Login />} />
       <Route path="/booking" element={<Bookingpage />} />
       <Route path="/confirmation" element={<ConfirmedBooking/>} />
      
      </Routes> 
    
    
      </div>
     
      
    </>
    
    </Router>
    
  );
}

export default App;

// return ( <Router> <div> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/contact" element={<Contact />} /> </Routes> </div> </Router> );

