// src/views/Checkout.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css"; // Import the specific CSS file

const Checkout = () => {
    const { cart, clearCart, getTotalPrice } = useContext(CartContext);
    const navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState("credit-card"); // Estado para seleccionar método de pago

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
        <div className="checkout-container">
            <div className="checkout-details-container">
                {/* Sección de método de pago */}
                <div className="payment-method-section">
                    <h2>Método de pago</h2>

                    {/* Tarjeta de crédito */}
                    <div
                        className={`payment-option ${selectedPayment === "credit-card" ? "selected" : ""}`}
                        onClick={() => setSelectedPayment("credit-card")}
                    >
                        <input
                            type="radio"
                            name="payment"
                            id="credit-card"
                            checked={selectedPayment === "credit-card"}
                            onChange={() => setSelectedPayment("credit-card")}
                        />
                        <label htmlFor="credit-card">
                            <strong>Tarjeta de crédito</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                        </label>
                        <div className="credit-card-form">
                            <input type="text" placeholder="0000   0000   0000   0000" maxLength="19" />
                            <div className="credit-card-details">
                                <input type="text" placeholder="MM / YY" maxLength="5" />
                                <input type="text" placeholder="CVV" maxLength="3" />
                            </div>
                            <input type="text" placeholder="Nombre Del Titular De La Tarjeta" />
                        </div>
                    </div>
                    <br/>
                    {/* PayPal */}
                    <div
                        className={`payment-option ${selectedPayment === "paypal" ? "selected" : ""}`}
                        onClick={() => setSelectedPayment("paypal")}
                    >
                        <input
                            type="radio"
                            name="payment"
                            id="paypal"
                            checked={selectedPayment === "paypal"}
                            onChange={() => setSelectedPayment("paypal")}
                        />
                        <label htmlFor="paypal">
                            <strong>PayPal</strong>
                            <p>Pago seguro mediante tu cuenta PayPal.</p>
                        </label>
                    </div>

                    <div className="checkout-buttons-group">
                        <button onClick={handlePayment}>Pagar ahora</button>
                        <button className="cancel-button" onClick={() => navigate("/books")}>
                            Cancelar
                        </button>
                    </div>
                </div>

                {/* Sección de resumen de pedido */}
                <div className="order-summary-section">
                    <h3>Resumen de pedido</h3>
                    {cart.map((item) => (
                        <div key={item.id} className="summary-item-row">
                            <span>{item.titulo}</span>
                            <span>${(item.precio * item.cantidad).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="summary-total-row">
                        <strong>Total:</strong> ${getTotalPrice().toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
