// src/components/Bookstore.js
import React from 'react';
import { Link } from 'react-router-dom';

export const Bookstore = ({ id, titulo, imagen, genero, popularidad, precio }) => {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>Genero: {genero}</p>
      <p>Popularidad: {popularidad}</p>
      <p>Precio: ${precio}</p>
      <Link to={`/books/${id}`}>
        <button>DETALLES</button>
      </Link>
    </div>
  );
};