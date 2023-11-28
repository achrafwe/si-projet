import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import BrowserRouter and Route
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import EtudiantSpace from './EtudiantSpace/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route path="/" component={App} exact />
      <Route path="/EtudiantSpace" component={EtudiantSpace} exact />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
