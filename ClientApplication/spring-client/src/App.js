import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/login/LoginComponent';
import { Route, Routes } from 'react-router-dom';
import OidcClientComponent from './components/login/OidcClientComponent';
import { useSelector } from 'react-redux';
import ArticleComponent from './components/ArticleComponent';

function App() {


   const isLoggedIn = useSelector(state => state.pkce.isLoggedIn);

  return (
    <div className="App">


    {!isLoggedIn?
    
    <Routes>
            <Route path="/login/oauth2/code/oidc-client" element={<OidcClientComponent />} />
            <Route path="/" element={<LoginComponent />} />
            
        </Routes>
    :<><ArticleComponent></ArticleComponent></>
    }

      
      
      


      
    </div>
  );
}

export default App;
