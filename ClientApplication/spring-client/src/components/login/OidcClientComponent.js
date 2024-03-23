import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pkceAction } from "../../redux_data/pkce-slice";
import { useNavigate } from "react-router-dom";

const OidcClientComponent = (props) => {


    const navigate = useNavigate();

    const [code, setCode] = useState('');
    // const [state, setState] = useState('');


    const pkceState = localStorage.getItem('state')
    const codeVerifier =   localStorage.getItem('codeVerifier')
    const clientId =   localStorage.getItem('clientId')
    
    
    const dispatch = useDispatch();



    const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    // Function to extract query parameters from URL

    

    const getUrlParameter = (name) => {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get(name);
    };

    // Extract code and state parameters from URL
    const urlCode = getUrlParameter('code');
    const urlState = getUrlParameter('state');

    if(urlState!==pkceState){
        alert("State not matched: "+pkceState)

        return
    }

    if (urlCode) {
      setCode(urlCode);
    }

    

    // getToken()

  }, [pkceState, clientId, codeVerifier]);


  useEffect(()=>{

    getToken();

  },[code])

  const getToken = async () => {
    const authorizationServerUrl = '/oauth2/token';
    // const clientId = clientId;
    const clientSecret = 'secret';
    const redirectUri = 'http://127.0.0.1:3000/login/oauth2/code/oidc-client';
    // const code = 'fcrogNlA0MRq-Ymb_umNVgkKDc5Kk5PsRaSpieb6VKM4GNuZ';
    // const codeVerifier = '4xPb3cIjB6OdBVTBuHSja6dwayrGOM8R-3XoS4i-ip9UGSFm';

    try {
      const response = await fetch(authorizationServerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: clientId,
          // client_secret: clientSecret,
          redirect_uri: redirectUri,
          code: code,
          code_verifier: codeVerifier,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch token');
      }

      const data = await response.json();
      setAccessToken(data.access_token);

      dispatch(pkceAction.setLoggedIn({isLoggedIn: true}))

      navigate("/")

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <button onClick={getToken}>Get Access Token</button>
      {accessToken && <p>Access Token: {accessToken}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );

}

export default OidcClientComponent