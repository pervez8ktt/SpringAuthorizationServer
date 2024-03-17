
import { configureStore } from '@reduxjs/toolkit';
import pkceSlice from './pkce-slice';

// save the store to localstorage

// load the store from localstorage

const store = configureStore({
	//reducer: counterSlice.reducer 
	reducer: {pkce: pkceSlice.reducer} // For multiple reducers
	
});




export default store;