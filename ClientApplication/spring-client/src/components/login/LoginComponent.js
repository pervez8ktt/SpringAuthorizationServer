import { useState } from "react";
import { generateChallenge } from 'react-native-pkce-challenge';
import { useDispatch, useSelector } from "react-redux";
import { pkceAction } from "../../redux_data/pkce-slice";

const LoginComponent = (props) => {

    const codeChallenge = useSelector(state => state.pkce.codeChallenge)
    const clientId = useSelector(state => state.pkce.clientId)

    const dispatch = useDispatch();

    const [codeVerifier, setCodeVerifier] = useState('');
//   const [codeChallenge, setCodeChallenge] = useState('');

  const generateCode = () => {
    const challenge = generateChallenge(codeVerifier);
    // setCodeChallenge(challenge);

    dispatch(pkceAction.setCodeGenerator({codeChallenge: challenge}))

  };


  const updateClientId = (event) => {
    dispatch(pkceAction.setClientId({clientId: event.target.value}))
  }

    // Define the base URL
var baseUrl = "http://localhost:9000/oauth2/authorize";

// Define parameters
var responseType = "code";
var state = "fjkwja";
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

    const loginHandler = () =>{
        window.open(authorizationUrl);
    }

    return <><input
    type="text"
    value={codeVerifier}
    onChange={(e) => setCodeVerifier(e.target.value)}
  />
  <input
    type="text"
    value={clientId}
    onChange={updateClientId}
  />
  <button onClick={generateCode}>Generate Code</button>
  <p>Code Challenge: {codeChallenge}</p>
  
  <button onClick={loginHandler}>Login</button>
  </>
}

export default LoginComponent;