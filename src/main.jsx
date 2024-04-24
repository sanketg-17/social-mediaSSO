import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-gb0ucn4w5u6lnwn5.us.auth0.com"
    clientId="uuDavcXOixe83V4yzidvKf2DZN3ijKfZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);
