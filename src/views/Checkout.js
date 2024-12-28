import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
    const { cart, clearCart, getTotalPrice } = useContext(CartContext);
    const navigate = useNavigate();

    // Oculta el sidebar cuando se renderiza esta vista
    useEffect(() => {
        const body = document.querySelector("body");
        body.classList.add("hide-sidebar");
        return () => {
            body.classList.remove("hide-sidebar"); // Restaura el sidebar al salir
        };
    }, []);

    const handlePayment = () => {
        alert("¡El pedido se ha realizado con éxito!"); // Mensaje de confirmación.
        clearCart(); // Vacía el carrito.
        navigate("/books"); // Redirige a la vista de Books.
    };

    return (
        <div className="book-details">
            <div className="details-container">
                <div className="checkout-content">
                    {/* Sección de método de pago */}
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
                        {/* Botones de acción */}
                        <div className="checkout-buttons">
                            <button onClick={handlePayment}>Pagar ahora</button>
                            <button className="cancel-button" onClick={() => navigate("/books")}>
                                Cancelar
                            </button>
                        </div>
                    </div>

                    {/* Sección de resumen de pedido */}
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