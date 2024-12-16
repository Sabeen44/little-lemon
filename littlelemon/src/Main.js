import React, { useReducer, useEffect } from 'react'; 
import { BookingForm} from './Bookingpage'; 
//import {resDate} from './BookingForm';
import { fetchAPI, submitAPI } from './mockAPI';
import { useNavigate } from 'react-router-dom';


const today = new Date().toISOString().split("T")[0];


const reducer = (state, action) => {
       switch (action.type) { 
            case 'UPDATE_TIMES': return action.payload; default: 
            return state; } 
      };   

         
export const Main = () => {
      const [availableTimes, dispatch] = useReducer(reducer, []);
      const navigate = useNavigate(); 
      
// useEffect(() => {
//       const updateTime = async () => { 
//           const times = await fetchAPI(today);
//           dispatch({ type: 'UPDATE_TIMES', payload: times }); }; updateTime(); }, []);


     const submitForm = async (formData) => { 
           try { const response = await submitAPI(formData);
             if (response) {
                   navigate('/confirmation'); } }
            catch (error) { console.error('Form submission failed:', error); } };
                
                
                return ( <div> <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} /> </div> ); }; 
     
     export default Main;
