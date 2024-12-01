import React, {useState} from 'react';
import Main from './Main';

export const BookingForm = ({ availableTimes, dispatch }) => { 
    const [resDate, setResDate] = useState('');
     const [resTime, setResTime] = useState(''); 
     const [guests, setGuests] = useState(1);
      const [occasion, setOccasion] = useState('');  

      //const [availableTimes, setAvailableTimes] = useState([ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', ]);

      const handleSubmit = (e) => { e.preventDefault();
         // Form submission logic here 
        console.log({ resDate, resTime, guests, occasion, }); };

    

    const handleDateChange = (e) => {
         setResDate(e.target.value); dispatch({ type: 'UPDATE_TIMES', date: e.target.value }); };
    
    return (
         <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}> 
         <label htmlFor="res-date">Choose date</label> 
         <input type="date" id="res-date" value={resDate} onChange={handleDateChange} /> 
         <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)}> {availableTimes.map((time, index) => ( <option key={index} value={time}> {time} </option> ))} </select> 
          <label htmlFor="guests">Number of guests</label> 
          <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} />
           <label htmlFor="occasion">Occasion</label> <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
             <option value="Birthday">Birthday</option> <option value="Anniversary">Anniversary</option> 
             </select> 
             <input type="submit" value="Make Your reservation" /> 
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

