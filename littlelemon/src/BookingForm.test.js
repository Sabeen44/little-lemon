import {render, screen} from '@testing-library/react';
import React from 'react';
import { BookingForm } from './Bookingpage';
import {initializeTimes, updateTimes} from './Main';
import { fetchAPI } from './mockAPI';


      test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Booking Form");
        expect(headingElement).toBeInTheDocument();
    })
   
    test('initializeTimes returns the correct expected value', async () => { const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; 
      // Mock the fetchAPI function to return the expectedTimes 
      
      const mockFetchAPI = jest.fn(() => Promise.resolve(expectedTimes)); const result = await initializeTimes(mockFetchAPI); expect(result).toEqual(expectedTimes);
       });

        test('updateTimes should return the updated times for the provided date', async () => { const selectedDate = '2023-08-29'; const expectedTimes = ['10:00', '11:00', '12:00']; // Mock the fetchAPI function to return the expectedTimes for the specific date 
          const mockFetchAPI = jest.fn((date) => { if (date === selectedDate) { return Promise.resolve(expectedTimes); } return Promise.resolve([]); }); const initialState = []; const action = { type: 'UPDATE_TIMES', date: selectedDate }; const newState = await updateTimes(initialState, action, mockFetchAPI); expect(newState).toEqual(expectedTimes); 

       })

