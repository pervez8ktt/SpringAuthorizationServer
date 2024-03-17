
import { configureStore } from '@reduxjs/toolkit';
import pkceSlice from './pkce-slice';


const store = configureStore({
	//reducer: counterSlice.reducer 
	reducer: {pkce: pkceSlice.reducer} // For multiple reducers
});

export default store;