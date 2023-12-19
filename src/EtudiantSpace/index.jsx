import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './index.css';
import './index.css';


class EtudiantSpace extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.startSlider();
  }

  componentWillUnmount() {
    this.stopSlider();
  }

  startSlider = () => {
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 2000); // Change the duration as needed (in milliseconds)
  };

  stopSlider = () => {
    clearInterval(this.sliderInterval);
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % slideImages.length,
    }));
  };

  changeColor(clickedButtonId) {
    const buttons = ['button1', 'button2'];

    buttons.forEach((buttonId) => {
      const button = document.getElementById(buttonId);
      if (buttonId === clickedButtonId) {
        button.style.backgroundColor = '#DB4C3B';
      } else {
        button.style.backgroundColor = '#bfbfbf';
      }
    });
  }


  render(){

        return(
            <div className="frame">
            <div className="div">
              <div className="overlap">
                <input className="text-wrapper" placeholder='Je cherche ......'/>
                <IconButton>
                <img
                  className="icon-search"
                  alt="Icon search"
                  src="https://c.animaapp.com/Zzsi4ZsV/img/---icon--search-@2x.png"
                />
                </IconButton>
              </div>
              <img
                className="img"
                alt="User profile PNG"
                src="https://c.animaapp.com/Zzsi4ZsV/img/user-profile-png-picture-1@2x.png"
              />
                <div className="overlap-5">
                <div className="text-wrapper-11">Bienvenue Nom Etudiant</div>
              </div>
             
              <div className="overlap-3">
                <p className="t-l">
                  <span className="span">tél :</span>
                  <a href="tel:+0244022122" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-4">0244022122</span>
                  </a>
                </p>
                <div className="text-wrapper-5">Mr.May Madeth</div>
                <img
                  className="user-profile-PNG"
                  alt="User profile PNG"
                  src="https://c.animaapp.com/Zzsi4ZsV/img/user-profile-png-picture-2@2x.png"
                />
                <div className="mail" >mail: madeth.may@univ-lemans.fr</div>
                <div className="overlap-4">
                  <Button  className="text-wrapper-6" >Contactez directement</Button >
                </div>
              </div>
              <div className="overlap-group">
              <img className="vector" alt="Vector" src="https://c.animaapp.com/Zzsi4ZsV/img/vector-1.png" />
                <button className="group" id="button1" onClick={() => this.changeColor('button1')}>
                    <div className="text-wrapper-2">Etage 1</div>
                </button>
                <button className="overlap-wrapper" id="button2" onClick={() => this.changeColor('button2')}>
                    <div className="text-wrapper-3">RDC</div>
                </button>
              </div>
              <div className="ellipse" />
              <div className="ellipse-2" />
              <div className="ellipse-3" />
           
              <div className="text-wrapper-7">Disponible</div>
              <div className="text-wrapper-8">Non diponible</div>
              <div className="text-wrapper-9">Non spécifié</div>
              <div className="text-wrapper-10">Actualité</div>
            
              <div className="slider-container" onMouseEnter={this.stopSlider} onMouseLeave={this.startSlider}>
            {slideImages.map((imageUrl, index) => (
              <div key={index} className={index === this.state.currentSlide ? 'slide active' : 'slide'}>
                <img src={imageUrl} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

            </div>
          </div>
        )
    }
}

const slideImages = [
  'https://www.lafrap.fr/wp-content/uploads/2019/02/logo24h.png',
  'https://cdn.worldvectorlogo.com/logos/ensim.svg'
  // Add more image URLs as needed
];


export default EtudiantSpace;