import React, { Component } from 'react';
import './style.css';
import { Link } from '@mui/material';

class Login extends Component {
    render(){
        return(
    <>
      <div className="div">
        <img
          loading="lazy"
          srcSet="https://c.animaapp.com/Zzsi4ZsV/img/user-profile-png-picture-1@2x.png"
          className="img-3"
        />
        <div className="div-3">IDENTIFIANT</div>
        <input type='text' className="div-4" placeholder='Veuillez saisir votre Identifiant' style={{textAlign: "center", Height: "100%"}}/>
        <div className="div-5">MOT DE PASSE</div>
        <input type='password' className="div-6" placeholder="Votre mot de passe"style={{textAlign: "center", Height: "100%"}}/>
    
        <div className="div-7"> <Link href="/EtudiantSpace" style={{ color: '#ffff', fontSize: 'bold', fontWeight: 'bolder' }}>Se connecter</Link></div>
        <div className="div-8">
          <div className="div-9">Mot de passe oublié</div>
          <div className="div-10">1ère Connexion</div>
        </div>
        <div className="div-11">Créer un espace vacataire</div>
      </div>
    </>
  );
}
}
export default Login;