import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import '../styles/styles.css';

const Cart = () => {
    const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

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
                <ul>
                    {cart.map(book => (
                        <li key={book.id} className="cart-item">
                            <div className="cart-item-details">
                                <span>{book.titulo}</span>
                                <span>${book.precio}</span>
                                <input
                                    type="number"
                                    min="1"
                                    value={book.cantidad}
                                    onChange={(e) => handleQuantityChange(book.id, e)}
                                    className="quantity-input"
                                />
                            </div>
                            <button onClick={() => removeFromCart(book.id)} className="remove-btn">
                                <FaTrash />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div className="cart-actions">
                    <button onClick={clearCart} className="clear-btn">Vaciar Carrito</button>
                    <button className="checkout-btn">Proceder al Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
