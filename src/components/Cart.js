import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import '../styles/carrito.css';

const Cart = () => {
    const {
        cart = [],
        removeFromCart,
        clearCart,
        updateQuantity,
        getTotalPrice,
    } = useCart();

    const handleQuantityChange = (id, event) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity > 0) {
            updateQuantity(id, newQuantity);
        }
    };

    return (
        <div className="cart-sidebar">
            <h2>Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <ul className="cart-items-list">
                        {cart.map(book => (
                            <li key={book.id} className="cart-item">
                                <div className="cart-item-details">
                                    <span className="cart-item-title">{book.titulo}</span>
                                    <span className="cart-item-price">${book.precio}</span>
                                    <input
                                        type="number"
                                        min="1"
                                        value={book.cantidad}
                                        onChange={(e) => handleQuantityChange(book.id, e)}
                                        className="quantity-input"
                                    />
                                </div>
                                <button
                                    onClick={() => removeFromCart(book.id)}
                                    className="remove-btn"
                                    aria-label="Eliminar del carrito"
                                >
                                    <FaTrash />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p>Total: <strong>${getTotalPrice().toFixed(2)}</strong></p>
                    </div>
                    <div className="cart-actions">
                        <button onClick={clearCart} className="clear-btn">
                            Vaciar Carrito
                        </button>
                        <Link to="/checkout" className="checkout-btn">
                            Proceder al Pago
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;