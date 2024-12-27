import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookstoreContext } from '../context/BookstoreContext';
import { FaHeart } from 'react-icons/fa';

const BookstoreDetails = () => {
  const { id } = useParams();
  const { bookstore: books } = useContext(BookstoreContext);
  const book = books.find(b => b.id === id);

  if (!book) {
    return <h2>Libro no encontrado</h2>;
  }

  return (
    <div className="book-details">
      <div className="details-container">
        <div className="image-gallery">
          <img src={book.imagen} alt={book.titulo} className="main-image" />
          <div className="thumbnail-gallery">
            <img src={book.imagen} alt="Thumbnail 1" />
            <img src={book.imagen} alt="Thumbnail 2" />
            <img src={book.imagen} alt="Thumbnail 3" />
          </div>
        </div>
        <div className="details-content">
          <h2>{book.titulo}</h2>
          <div className="ratings">
            <span>⭐⭐⭐⭐☆</span>
            <p>4 Reseñas</p>
          </div>
          <hr />
          <p className="price">${book.precio}</p>
          <hr />
          <p>{book.sinopsis}</p>
          <div className="button-group">
            <button className="add-to-cart">Agregar al carrito</button>
            <button className="wishlist"><FaHeart /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookstoreDetails;