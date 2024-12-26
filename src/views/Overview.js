import React, { useContext } from 'react';
import '../styles/styles.css';
import { Bookstore } from "../components/Bookstore";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BookstoreContext } from "../context/BookstoreContext";

export const Overview = () => {
  const { bookstore: books = [] } = useContext(BookstoreContext); // Default to an empty array if books is undefined

  return (
    <div id="root">
      <div className="main-content">
        <div className="card-container">
          {
            books.length > 0 ? (
              books.map((book, index) => (
                <Bookstore
                  key={index}
                  id={book.id}
                  titulo={book.titulo}
                  imagen={book.imagen}
                  sinopsis={book.sinopsis}
                  genero={book.genero}
                  popularidad={book.popularidad}
                />
              ))
            ) : (
              <p>No hay libros disponibles.</p>
            )
          }
        </div>
      </div>
    </div>
  );
}