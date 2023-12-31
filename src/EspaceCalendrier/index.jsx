import React from "react";
import "./style.css";
import Link from '@mui/material/Link';

export const EspaceCalendrier = () => {
  return (
    <div className="frame1">
      <div className="div">
        <div className="overlap4">
          <div className="ellipse" />
        </div>
        <div className="ellipse-2" />
        <p className="text-wrapper">Vous avez une nouvelle demande de rendez vous</p>
        <div className="overlap-group">
          <div className="rendezvous-bar">Nom du Prof -&gt; Mes rendez-vous</div>
        </div>
        <div className="div-wrapper">
          <Link href="/EspaceProf">
          <div className="text-wrapper-2">Consulter mes Rendez-vous</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EspaceCalendrier;
