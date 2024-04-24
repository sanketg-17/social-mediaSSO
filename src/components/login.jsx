import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <>
  <center>
    <p style={{height:'40vh',width:'100vw',fontSize:'30px'}}>Login to access app</p>
    <button onClick={() => loginWithRedirect()}>Log In</button>
    </center>
</>
};

export default LoginButton;