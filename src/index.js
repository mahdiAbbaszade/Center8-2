import React from "react";
import ReactDOM from 'react-dom/client';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import "./../node_modules/slick-carousel/slick/slick.css";
import "./../node_modules/slick-carousel/slick/slick-theme.css";
import { StyledEngineProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
  </React.StrictMode>
);



