//component imports
import App from './App.jsx';
//css import
import ReactDOM from 'react-dom/client';
import './index.css';
//library imports
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>  
  </Provider>
  
  
)
