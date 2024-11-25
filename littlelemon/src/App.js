
import './App.css';
import React from 'react'
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <>
    <div className="grid-container" >
      
    
     
       <Routes>
      <Route path="/" element={<Nav />} /> 
      <Route path="/about" element={<Main />} />
       <Route path="/menu" element={<Nav />} />
       <Route path="/reservations" element={<Main />} />
       <Route path="/onlineorder" element={<Main />} />
       <Route path="/login" element={<Footer />} />
      
      </Routes> 
     
      <Header/>
      {/* <Main/>
      <Footer/> */}
      </div>
     
      
    </>
    
    </Router>
    
  );
}

export default App;

// return ( <Router> <div> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/contact" element={<Contact />} /> </Routes> </div> </Router> );

