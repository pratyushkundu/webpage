import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routeprocess';

ReactDOM.render(<>
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
</>,
  document.getElementById('root')
);


