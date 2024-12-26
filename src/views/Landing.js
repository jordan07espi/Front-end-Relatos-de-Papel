// src/views/Landing.js
import React from 'react';
import logo from '../assets/hizotipoBlack.png';

function Landing() {
    return (
        <div className="main-content">
            <div className="landing">
                <img src={logo} alt="Logo" />
                <p>Explora los mejores libros en nuestra tienda virtual.</p>
            </div>
        </div>
    );
}

export default Landing;