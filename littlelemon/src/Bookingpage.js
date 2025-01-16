import React, {useState, useEffect} from 'react';
import Main from './Main';
import {fetchAPI} from "./mockAPI.js";
import logo from "./images/littlelemonlogo.png"
import Footer from './Footer.js'



export const BookingForm = ({ availableTimes=[], dispatch, submitForm }) => { 
    const [resDate, setResDate] = useState('');
     const [resTime, setResTime] = useState(''); 
     const [guests, setGuests] = useState('');
      const [occasion, setOccasion] = useState('');  
      const [formValid, setFormValid] = useState(false);
 

      // useEffect(() => {
     
        //  const fetchAndDispatchTimes = async (date) => { 
        //     try {
        //          const times = await fetchAPI(date); 
        //          dispatch({ type: 'UPDATE_TIMES', payload: times }); }
        //           catch (error) { 
        //             console.error(error.message); } };
        //              if (resDate) { 
        //                 fetchAndDispatchTimes(resDate); } }, [resDate, dispatch]);

        useEffect(() => {
          const fetchAndDispatchTimes = async (date) => {
            try {
              console.log("Fetching times for date:", date);
              const times = await fetchAPI(date);
              console.log("Fetched times:", times);
              if (times.length === 0) {
                throw new Error("No available times for the selected date.");
              }
              dispatch({ type: 'UPDATE_TIMES', payload: times });
            } catch (error) {
              console.error(error.message);
            }
          };
        
          if (resDate) {
            fetchAndDispatchTimes(resDate);
          }
        }, [resDate, dispatch]);

    useEffect(() => { 
        const isFormValid = resDate && resTime && guests > 0 && occasion; setFormValid(isFormValid); }, [resDate, resTime, guests, occasion]);

      


      const handleSubmit = (e) => { e.preventDefault();
       
        const formData = { date: resDate, time: resTime, guests: guests, occasion: occasion, };
         submitForm(formData);

         };

    const handleDateChange = (e) => {
         setResDate(e.target.value); dispatch({ type: 'UPDATE_TIMES', date: e.target.value }); };
    
    return (
      <div className='booking-page'>
     
         <form className='booking-form' onSubmit={handleSubmit} > 
        
         <h1>Booking Form</h1>
         <label className="form-label" htmlFor="res-date">Select date</label> 
         <input type="date" id="res-date" value={resDate} onChange={handleDateChange} required aria-required="true" aria-label="Reservation Date"/> 

         <label className="form-label" htmlFor="res-time">Select time</label>
          <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)} required aria-required="true" aria-label="Reservation Time" >
          <option value="" disabled hidden> Select a time </option>
          {Array.isArray(availableTimes) && availableTimes.map((time, index) => 
            ( <option key={index} value={time}> {time} </option> ))} 
            </select>

          <label className="form-label" htmlFor="guests">Number of guests</label> 
          <select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required aria-required="true" aria-label="Number of Guests" > 
            <option value="" disabled hidden> Choose number of guests </option> {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => ( <option key={number} value={number}> {number} </option> ))} </select>

           <label className="form-label" htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required aria-required="true" aria-label="Occasion">
            <option value="" disabled>Select an occasion</option>
            <option value="Life">No Special Occasion</option>
             <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option> 
             </select> 

             <button className='btn-reserve' type="submit" disabled={!formValid}>Reserve</button> 
             </form> 
             </div>);


    }



function Bookingpage(){

    return(
        <div>
       <img className="form-logo" src={logo} alt="logo"></img>
            <Main/>
            <Footer/>
            
        </div>
    )
}


export default Bookingpage
