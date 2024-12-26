import React from "react";
import { Link } from "react-router-dom";

export const Bookstore = ({ id, titulo, imagen, genero, popularidad, precio }) => {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <img src={imagen} alt={`Imagen de ${titulo}`} />
            {/* <p>Sinopsis: {sinopsis}</p> */}
            <p>Género: {genero}</p>
            <p>Popularidad: {popularidad}</p>
            <p>Precio: ${precio.toFixed(2)}</p>
            <Link to={`/bookstore/${id}`}>
                <button>Ver detalles</button>
            </Link>
        </div>
    );
}