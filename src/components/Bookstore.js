import React from "react";
import { Link } from "react-router-dom";

export const Bookstore = ({ id, titulo, imagen, sinopsis, genero, popularidad }) => {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <img src={imagen} alt={`Imagen de ${titulo}`} />
            <p>Sinopsis: {sinopsis}</p>
            <p>Género: {genero}</p>
            <p>Popularidad: {popularidad}</p>
            <Link to={`/bookstore/${id}`}>
                <button>Ver detalles</button>
            </Link>
        </div>
    );
}