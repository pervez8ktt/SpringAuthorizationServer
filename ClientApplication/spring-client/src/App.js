import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/login/LoginComponent';
import { Route, Routes } from 'react-router-dom';
import OidcClientComponent from './components/login/OidcClientComponent';
import { useSelector } from 'react-redux';

function App() {


   const isLoggedIn = useSelector(state => state.pkce.isLoggedIn);

  return (
    <div className="App">


    {!isLoggedIn?
    
    <Routes>
            <Route path="/login/oauth2/code/oidc-client" element={<OidcClientComponent />} />
            <Route path="/" element={<LoginComponent />} />
            
        </Routes>
    :<><p>Already Logged In!!!</p></>
    }

      
      
      


      
    </div>
  );
}

export default App;
