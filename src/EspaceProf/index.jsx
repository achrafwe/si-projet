import React from "react";
import Button from '@mui/material/Button';
import "./index.css";

export const EspaceProf = () => {
  return (
    <div className="frame2">
      <div className="div">
        <div className="overlap">
          <p className="text-wrapper">Demandes de consultation de copies</p>
          <div className="group">
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  Taha Bouiber
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  Achraf ElKalchy
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  Aya Barbare
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">Hamza xx</span>
              </p>
            </div>
            <div className="flexcontainer-2">
              <p className="text">
                <span className="span">
                  08/12/2023
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  01/09/2023
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  13/10/2023
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">24/09/2023</span>
              </p>
            </div>
            <div className="mail">Nom</div>
            <div className="mail-2">Date demande</div>
            <div className="mail-3">Groupe</div>
            <div className="mail-4">Exam</div>
            <div className="flexcontainer-3">
              <p className="text">
                <span className="span">
                  INFO VAC 4A
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  INFO VAC 4A
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  INFO VAC 4A
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">INFO VAC 4A</span>
              </p>
            </div>
            <div className="flexcontainer-4">
              <p className="text">
                <span className="span">
                  SI
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  VR
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  JAVA
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">Cyber securité</span>
              </p>
            </div>
          </div>
        </div>
        <div className="overlap-group">
          <div className="div-wrapper">
            <Button className="text-wrapper-2">Scanner</Button>
          </div>
          <div className="overlap-2">
            <Button className="text-wrapper-5">Televerser</Button>
          </div>
          <div className="overlap-3">
            <Button className="text-wrapper-4">Refuser</Button>
          </div>
          <div className="overlap-4">
            <Button className="text-wrapper-3">Contacter</Button>
          </div>
        </div>
        <div className="loeremloerem-mes-wrapper">
          <div className="loeremloerem-mes">Nom du prof -&gt; Mes demandes</div>
        </div>
      </div>
    </div>
  );
};
export default EspaceProf;
