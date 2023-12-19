import React from 'react';
import { Link } from '@mui/material';
import './index.css';

const SeprProfil = () => {
  return (
    <div className="users">
      <Link href="/Login">
        <div className="user1">
          <div className="image-container">
            <img src="/stud.png" alt="Developer 1" />
          </div>
          <p className="developer-name">Etudiant </p>
        </div>
      </Link>
      <Link href="/LoginPr">
        <div className="user2">
          <div className="image-container">
            <img src="/prog.jpg" alt="Developer 2" />
          </div>
          <p className="developer-name">Professeur</p>
        </div>
      </Link>
      <Link href="/Login">
        <div className="user3">
          <div className="image-container">
            <img src="/inter.jpg" alt="Developer 3" />
          </div>
          <p className="developer-name">Intervenant </p>
        </div>
      </Link>
    </div>
  );
};

export default SeprProfil;
