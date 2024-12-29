// src/views/Checkout.js
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css"; // Importa el archivo CSS específico

const Checkout = () => {
    const { cart, clearCart, getTotalPrice } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const body = document.querySelector("body");
        body.classList.add("hide-sidebar");
        return () => {
            body.classList.remove("hide-sidebar");
        };
    }, []);

    const handlePayment = () => {
        alert("¡El pedido se ha realizado con éxito!");
        clearCart();
        navigate("/books");
    };

    return (
        <div className="book-details">
            <div className="details-container">
                <div className="checkout-content">
                    <div className="payment-section">
                        <h2>Método de pago</h2>
                        <div>
                            <input type="radio" name="payment" id="credit-card" defaultChecked/>
                            <label htmlFor="credit-card">Tarjeta de crédito</label>
                        </div>
                        <div>
                            <input type="radio" name="payment" id="paypal"/>
                            <label htmlFor="paypal">PayPal</label>
                        </div>
                        <div className="checkout-buttons">
                            <button onClick={handlePayment}>Pagar ahora</button>
                            <button className="cancel-button" onClick={() => navigate("/books")}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                    <div className="order-summary">
                        <h3>Resumen de pedido</h3>
                        {cart.map((item) => (
                            <div key={item.id} className="summary-item">
                                <span>{item.titulo}</span>
                                <span>${(item.precio * item.cantidad).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="summary-total">
                            <strong>Total:</strong> ${getTotalPrice().toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;