import React, { useContext, useEffect, useState } from 'react';
import '../styles/styles.css';
import { Bookstore } from "../components/Bookstore";
import { BookstoreContext } from "../context/BookstoreContext";
import { SearchContext } from "../context/SearchContext";
import Cart from "../components/Cart"; // Importa el componente Cart como default

export const Overview = () => {
    const { bookstore: books = [] } = useContext(BookstoreContext);
    const { searchQuery } = useContext(SearchContext);
    const [filteredBooks, setFilteredBooks] = useState(books);
    const [isCartVisible, setIsCartVisible] = useState(false); // Estado para manejar la visibilidad del carrito

    useEffect(() => {
        const filtered = books.filter(book =>
            book.titulo.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBooks(filtered);
    }, [searchQuery, books]);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible); // Alternar visibilidad del carrito
    };

    return (
        <div id="root">
            {isCartVisible && <Cart />} {/* Mostrar u ocultar el carrito */}
            <div className="main-content">
                <div className="card-container">
                    {filteredBooks.length > 0 ? (
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
                    )}
                </div>
            </div>
        </div>
    );
};
