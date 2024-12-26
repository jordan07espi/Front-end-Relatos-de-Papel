import React from 'react';
import { Link } from 'react-router-dom';
import useRedirection from '../hooks/useRedirection';
import logo from '../assets/hizotipoBlack.png';

function Landing() {
    useRedirection('/books', 5000); // Redirect to the overview page after 5 seconds

    return (
        <div className="main-content">
            <div className="landing">
                <img src={logo} alt="Logo" />
                <Link to="/books">
                    <p>Explora los mejores libros en nuestra tienda virtual.</p>
                </Link>
            </div>
        </div>
    );
}

export default Landing;