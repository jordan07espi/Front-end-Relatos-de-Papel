import React, {useContext} from 'react';
import '../styles/styles.css';
import {Bookstore} from "../components/Bookstore";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {BookstoreContext} from "../context/BookstoreContext";

export const Overview = () => {

  const { books } = useContext(BookstoreContext);

  return (
      <div>
        <h2 className="center-text">Libros Disponibles</h2>
        <div className="restaurant-container">

          {
            books.length > 0 ? (
                books.map((book, index) => (
                    <Bookstore
                        key={index}
                        id={book.id}
                        name={book.titulo}
                        image={book.imagen}
                        sinopsis={book.sinopsis}
                        genre={book.genero}
                        popularity={book.popularidad}
                    />
                ))
            ) : (
                <p>No hay libros disponibles.</p>
            )
          }
          {}
        </div>
      </div>
  );
}