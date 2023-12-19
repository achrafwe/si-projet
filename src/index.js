import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import BrowserRouter and Route
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import EtudiantSpace from './EtudiantSpace/index';
import EspaceProf from './EspaceProf/index';
import EspaceCalendrier from './EspaceCalendrier/index';
import Login from './Login/index';
import SeprProfil from './SeprProfil/index';
import CoursDepo from './CoursDepo/index';
import LoginPr from './LoginPr/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route path="/" component={SeprProfil} exact />
      <Route path="/EtudiantSpace" component={EtudiantSpace} exact />
      <Route path="/EspaceProf" component={EspaceProf} exact />
      <Route path="/EspaceCalendrier" component={EspaceCalendrier} exact />
      <Route path="/SeprProfil" component={SeprProfil} exact />
      <Route path="/Login" component={Login} exact />
      <Route path="/CoursDepo" component={CoursDepo} exact />
      <Route path="/LoginPr" component={LoginPr} exact />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
