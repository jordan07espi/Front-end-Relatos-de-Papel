import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useRedirection from '../hooks/useRedirection';
import logo from '../assets/hizotipoBlack.png';
import '../styles/landing.css'; // Importa el archivo CSS específico

function Landing() {
    useRedirection('/books', 5000); // Redirige a la vista de libros después de 5 segundos

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 2 : 100));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="landing-container">
            <div className="landing-content">
                <Link to="/books" className="landing-link">
                    <p className="landing-text">Encuentra los mejores libros en nuestra tienda virtual.</p>
                </Link>
                <div className="preload-container">
                    <div className="preload-bar">
                        <div className="preload-progress" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;