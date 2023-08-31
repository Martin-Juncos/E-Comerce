import React from 'react';
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SplashScreen from "src/components/SplashScreen";

const LoginView = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const history = useHistory();

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push("/explore");
    } else {
      loginWithRedirect();
    }
  }, [isAuthenticated])

  return <SplashScreen />;
};

export default LoginView;