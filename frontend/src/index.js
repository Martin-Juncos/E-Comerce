import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <Auth0Provider  domain='dev-gargjkmwcw2rhk88.us.auth0.com' clientId='uSJvwCWb3k8B8hHwC0abVBdyxDx9Fd0q'  authorizationParams={{ redirect_uri: window.location.origin }}>
    <App />
    </Auth0Provider>
  </BrowserRouter>
  </Provider>
);
