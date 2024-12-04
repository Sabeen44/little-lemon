import React, {useState, useEffect} from 'react';
import Main from './Main';
import {fetchAPI} from "./mockAPI.js";
//import { useNavigate } from 'react-router-dom';


//export const fetchAPI = window.fetchAPI; 

export const BookingForm = ({ availableTimes, dispatch, submitForm }) => { 
    const [resDate, setResDate] = useState('');
     const [resTime, setResTime] = useState(''); 
     const [guests, setGuests] = useState(1);
      const [occasion, setOccasion] = useState('');  
      const [formValid, setFormValid] = useState(false);
      //const navigate = useNavigate();
      //const [localAvailableTimes, setLocalAvailableTimes] = useState('availableTimes');

      //const [availableTimes, setAvailableTimes] = useState([ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', ]);

      useEffect(() => {
         const fetchAvailableTimes = async (date) => { 
            try {
                 const times = await fetchAPI(date); 
                 dispatch({ type: 'UPDATE_TIMES', payload: times }); }
                  catch (error) { 
                    console.error(error.message); } }; if (resDate) { 
                        fetchAvailableTimes(resDate); } }, [resDate, dispatch]);

    //   const fetchAvailableTimes = async (date) => { const times = await fetchAPI(date); dispatch({type: 'UPDATE_TIMES', payload: times}); };

    useEffect(() => { // Check if all fields are valid 
        const isFormValid = resDate && resTime && guests > 0 && occasion; setFormValid(isFormValid); }, [resDate, resTime, guests, occasion]);


      const handleSubmit = (e) => { e.preventDefault();
         // Form submission logic here 
        console.log({ resDate, resTime, guests, occasion, });
        const formData = { date: resDate, time: resTime, guests: guests, occasion: occasion, };
         submitForm(formData);
        //navigate('/confirmation');
         };



    

    const handleDateChange = (e) => {
         setResDate(e.target.value); dispatch({ type: 'UPDATE_TIMES', date: e.target.value }); };
    
    return (
         <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}> 
         <h1>Booking Form</h1>
         <label htmlFor="res-date">Choose date</label> 
         <input type="date" id="res-date" value={resDate} onChange={handleDateChange} required /> 
         <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)}> {availableTimes && availableTimes.map((time, index) => ( <option key={index} required value={time}> {time} </option> ))} </select> 
          <label htmlFor="guests">Number of guests</label> 
          <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} />
           <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
            <option value="" disabled>Select an occasion</option>
             <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option> 
             </select> 
             <input type="submit" value="Make Your reservation" disabled={!formValid} /> 
             </form> );


    }

function Bookingpage(){

    return(
        <div>
            <Main/>
            
        </div>
    )
}


export default Bookingpage
