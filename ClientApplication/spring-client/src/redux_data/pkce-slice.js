
import { createSlice } from '@reduxjs/toolkit';

const initialState = {codeVerifier:'', clientId: 'application-pkce-client', isLoggedIn: false, pkceState: '', accessToken: null};

const pkceSlice = createSlice({
	
	name: 'pkce',
	initialState: initialState,
	reducers:{
		setCodeVerifier(state, action){
			// It is safe because createSlice internally create immutable object
			state.codeVerifier = action.payload.codeVerifier;
		},
		setClientId(state, action){
			state.clientId = action.payload.clientId;
		},
		setLoggedIn(state, action){
			state.isLoggedIn = action.payload.isLoggedIn;

			if(state.isLoggedIn==true){
				state.accessToken = action.payload.accessToken;
			}else{
				state.accessToken = null
			}

		},
		setPkceState(state, action){
			
			state.pkceState = action.payload.pkceState;
		}
	}
});

export const pkceAction = pkceSlice.actions
export default pkceSlice;