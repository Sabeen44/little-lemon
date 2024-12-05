import React, { useReducer, useEffect } from 'react'; 
import { BookingForm } from './Bookingpage'; 
import { fetchAPI, submitAPI } from './mockAPI';
import { useNavigate } from 'react-router-dom';


//const fetchAPI = window.fetchAPI; 
console.log('Is fetchAPI defined?', !!window.fetchAPI);
export const initializeTimes = async (fetchAPI) => {
      const today = new Date().toISOString().split("T")[0];
       try { 
          const availableTimes = await fetchAPI(today);
           return availableTimes; } catch (error)
            { console.error(error.message); return []; } };
     
 export const updateTimes = async (state, action) => {
           switch (action.type) { case 'UPDATE_TIMES': try { const times = await fetchAPI(action.date); 
               return times; } 
               catch (error) { 
                    console.error(error.message); 
                    return []; }
                     default: return state; } };

const reducer = (state, action) => { switch (action.type) { case 'UPDATE_TIMES': return action.payload; default: return state; } };   

         
export const Main = () => {
      const [availableTimes, dispatch] = useReducer(reducer, []);
      const navigate = useNavigate(); 
      
useEffect(() => {
      const init = async () => { 
          const times = await initializeTimes(fetchAPI);
          dispatch({ type: 'UPDATE_TIMES', payload: times }); }; init(); }, []);

     const submitForm = async (formData) => { 
           try { const response = await submitAPI(formData); if (response) { navigate('/confirmation'); } }
            catch (error) { console.error('Form submission failed:', error); } };
                
                
                return ( <div> <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} /> </div> ); }; 
     
     export default Main;
