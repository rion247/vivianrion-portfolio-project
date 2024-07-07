import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './Router/Router';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { RouterProvider } from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </React.StrictMode>
  </AuthProvider>

)
