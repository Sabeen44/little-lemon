
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
      <Header/>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/reservations" element={<Reservations />} />
       <Route path="/onlineorder" element={<OnlineOrder />} />
       <Route path="/login" element={<Login />} />

      </Routes>
      <Main/>
      <Footer/>
     
      
    </>
    </Router>
  );
}

export default App;

// return ( <Router> <div> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/contact" element={<Contact />} /> </Routes> </div> </Router> );