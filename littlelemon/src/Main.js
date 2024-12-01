
import React, { useReducer } from 'react';

 import { BookingForm } from './Bookingpage';
 // Make sure you import correctly 

 const initializeTimes = () => [ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', ];

 const updateTimes = (state, action) => { 
    switch (action.type) { 
    case 'UPDATE_TIMES': 
    // For now, return the same times regardless of the date 
    return initializeTimes();
     default: return state;
    }}

    //const updateTimes = (state, action) => { if (action.type === 'UPDATE_TIMES') { // For now, return the same times regardless of the date return initializeTimes(); } else { return state; } };
 
 const Main = () => { 
    const [availableTimes, dispatch] = useReducer(updateTimes,[],initializeTimes);
     return (
         <div> <BookingForm availableTimes={availableTimes} dispatch={dispatch} /> </div> ); };
         
         
         export default Main;
