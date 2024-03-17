
import { createSlice } from '@reduxjs/toolkit';

const initialState = {codeChallenge:null, clientId: 'application-user-client', isLoggedIn: false};

const pkceSlice = createSlice({
	
	name: 'pkce',
	initialState: initialState,
	reducers:{
		setCodeGenerator(state, action){
			// It is safe because createSlice internally create immutable object
			state.codeChallenge = action.payload.codeChallenge;
		},
		setClientId(state, action){
			state.clientId = action.payload.clientId;
		},
		setLoggedIn(state, action){
			state.isLoggedIn = action.payload.isLoggedIn;
		}
	}
});

export const pkceAction = pkceSlice.actions
export default pkceSlice;