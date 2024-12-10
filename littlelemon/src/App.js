
import './App.css';
import React from 'react'
//import Nav from './Nav.js'
import Header from './Header.js'
//import Footer from './Footer.js'
//import Main from './Main.js'
import Homepage from './Homepage.js'
import Bookingpage from './Bookingpage.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
import Specials from './Specials.js';
import Login from './Login.js'


//const availableTimes=()=>{ [availableTimes, setAvailableTimes] = useState([ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', ])}

function App() {
  return (
    <Router>
    <>
    <div>
      
    
      {/* <Nav/>
     <Homepage/> */} 
       <Routes>
        <Route path="/" element={<Homepage />} />   
      <Route path="/about" element={<Header />} />
       <Route path="/menu" element={<Specials />} />
       <Route path="/onlineorder" element={<Specials />}/>
       <Route path="/login" element={<Login />} />
       <Route path="/booking" element={<Bookingpage />} />
       <Route path="/confirmation" element={<ConfirmedBooking/>} />
      
      </Routes> 
      {/* <Main/> */}
      {/* <Footer/> */}
    
      </div>
     
      
    </>
    
    </Router>
    
  );
}

export default App;

// return ( <Router> <div> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/contact" element={<Contact />} /> </Routes> </div> </Router> );

