import { combineReducers } from "redux";
import pkceSlice from "./pkce-slice";

const rootReducer = combineReducers({
    pkce: pkceSlice.reducer
    // Add other reducers here
  });
  
  export default rootReducer;