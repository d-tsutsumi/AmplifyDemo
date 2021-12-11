import React, { useState } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { onAuthUIStateChange, AuthState} from "@aws-amplify/ui-components";
import './App.css';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'

function App() {
  const location = useLocation()
  const [authState, setAuthState] = useState()
  const [currentUser, setCurrentUser] = useState();
  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setCurrentUser(authData);
    });
  },[]);
  
  // return <AmplifyAuthenticator />
  return authState === AuthState.SignedIn && currentUser ? 
  <Navigate to="/login" state={{from: location}} />
  :
  <AmplifyAuthenticator />
}

export default App;
