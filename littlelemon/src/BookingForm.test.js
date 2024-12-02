import {render, screen} from '@testing-library/react';
import React from 'react';
import { BookingForm } from './Bookingpage';
import {initializeTimes, updateTimes} from './Main';

// test('renders the Choose date label', () => { const availableTimes = ['17:00', '18:00', '19:00']; // Sample data for available times 
//     const mockDispatch = jest.fn(); // Mock dispatch function
//      render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />); // Check if the label is in the document 
//      const dateLabel = screen.getByLabelText(/Choose date/i);
//       expect(dateLabel).toBeInTheDocument(); });

      test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Booking Form");
        expect(headingElement).toBeInTheDocument();
    })

    test('initializeTimes returns the correct expected value', () => { 
        const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00',]; 
        const result = initializeTimes(); 
        expect(result).toEqual(expectedTimes);})

        test('updateTimes should return the same value that is provided in the state', () => { const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; const action = { type: 'UNKNOWN_ACTION' }; // Any action type that does not match 'UPDATE_TIMES' 
        const newState = updateTimes(initialState, action); expect(newState).toEqual(initialState); });