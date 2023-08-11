import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movieSlice'
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = configureStore({
    reducer: { movies: moviesReducer },

}, composeWithDevTools(

    // other store enhancers if any
),)