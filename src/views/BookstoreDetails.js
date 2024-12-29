import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookstoreContext } from '../context/BookstoreContext';
import { CartContext } from '../context/CartContext';
import { FaHeart } from 'react-icons/fa';
import '../styles/booksDetails.css'; // Import the specific CSS file

const BookstoreDetails = () => {
  const { id } = useParams();
  const { bookstore: books } = useContext(BookstoreContext);
  const { addToCart } = useContext(CartContext);
  const book = books.find(b => b.id === id);

  if (!book) {
    return <h2>Libro no encontrado</h2>;
  }

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div className="bookstore-details">
      <div className="bookstore-details-container">
        <div className="bookstore-image-gallery">
          <img src={book.imagen} alt={book.titulo} className="bookstore-main-image" />
          <div className="bookstore-thumbnail-gallery">
            <img src={book.imagen} alt="Thumbnail 1" />
            <img src={book.imagen} alt="Thumbnail 2" />
            <img src={book.imagen} alt="Thumbnail 3" />
          </div>
        </div>
        <div className="bookstore-details-content">
          <h2>{book.titulo}</h2>
          <div className="bookstore-ratings">
            <span>⭐⭐⭐⭐☆</span>
            <p>4 Reseñas</p>
          </div>
          <hr />
          <p className="bookstore-price">${book.precio}</p>
          <hr />
          <p>{book.sinopsis}</p>
          <div className="bookstore-button-group">
            <button className="bookstore-add-to-cart" onClick={handleAddToCart}>Agregar al carrito</button>
            <button className="bookstore-wishlist"><FaHeart /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookstoreDetails;