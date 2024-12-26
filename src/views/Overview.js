import React, { useContext, useEffect, useState } from 'react';
import '../styles/styles.css';
import { Bookstore } from "../components/Bookstore";
import { BookstoreContext } from "../context/BookstoreContext";
import { SearchContext } from "../context/SearchContext";

export const Overview = () => {
  const { bookstore: books = [] } = useContext(BookstoreContext); // Default to an empty array if books is undefined
  const { searchQuery } = useContext(SearchContext);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const filtered = books.filter(book =>
      book.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  return (
    <div id="root">
      <div className="main-content">
        <div className="card-container">
          {
            filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <Bookstore
                  key={index}
                  id={book.id}
                  titulo={book.titulo}
                  imagen={book.imagen}
                  genero={book.genero}
                  popularidad={book.popularidad}
                  precio={book.precio}
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
};