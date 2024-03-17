import { useState } from "react";
import { generateChallenge } from 'react-native-pkce-challenge';
import { useDispatch, useSelector } from "react-redux";
import { pkceAction } from "../../redux_data/pkce-slice";

const LoginComponent = (props) => {



    // const codeVerifier = useSelector(state => state.pkce.codeVerifier)
    const clientId = useSelector(state => state.pkce.clientId)
    const stateRedux = useSelector(state => state.pkce.pkceState)

    const dispatch = useDispatch();

    const [codeVerifier, setCodeVerifier] = useState('');
    const [state, setState] = useState('');
  // const [codeChallenge, setCodeChallenge] = useState('');
  

  

  

  const updateClientId = (event) => {
    dispatch(pkceAction.setClientId({clientId: event.target.value}))
  }

    

    const loginHandler = () =>{

      const codeChallenge = generateChallenge(codeVerifier);

// Define the base URL
var baseUrl = "http://localhost:9000/oauth2/authorize";

// Define parameters
var responseType = "code";
// var state = "fjkwja";
var scope = "openid profile";
var redirectUri = "http://127.0.0.1:3000/login/oauth2/code/oidc-client";

// Construct the URL
var authorizationUrl = baseUrl + "?response_type=" + responseType +
    "&client_id=" + clientId +
    "&state=" + state +
    "&scope=" + encodeURIComponent(scope) +
    "&redirect_uri=" + encodeURIComponent(redirectUri) + 
    "&code_challenge=" + codeChallenge +
    "&code_challenge_method=S256" ;

console.log(authorizationUrl); // Print the URL

      localStorage.setItem('state',state)
      localStorage.setItem('codeVerifier',codeVerifier)
      localStorage.setItem('clientId',clientId)

      dispatch(pkceAction.setPkceState({pkceState: state}))
        // window.open(authorizationUrl);
        window.location.href = authorizationUrl
    }

    return <><input
    type="text"
    placeholder="Code verifier"
    value={codeVerifier}
    onChange={(e) => setCodeVerifier(e.target.value)}
  />
  <input
    type="text"
    placeholder="State"
    value={state}
    onChange={(e) => setState(e.target.value)}
  />
  <input
    type="text"
    placeholder="Client Id"
    value={clientId}
    onChange={updateClientId}
  />
  
  
  
  <button onClick={loginHandler}>Login</button>
  </>
}

export default LoginComponent;