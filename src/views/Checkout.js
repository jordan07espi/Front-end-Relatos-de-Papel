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
        navigate("/"); // Redirige a la página principal.
    };

    return (
        <div className="checkout-container">
            <h2>Método de pago</h2>
            <div className="payment-section">
                <div>
                    <input type="radio" name="payment" id="credit-card" defaultChecked />
                    <label htmlFor="credit-card">Tarjeta de crédito</label>
                </div>
                <div>
                    <input type="radio" name="payment" id="paypal" />
                    <label htmlFor="paypal">PayPal</label>
                </div>
            </div>
            <div className="order-summary">
                <h3>Resumen de pedido</h3>
                {cart.map((item) => (
                    <div key={item.id} className="summary-item">
                        <span>{item.name}</span>
                        <span>${(item.precio * item.cantidad).toFixed(2)}</span>
                    </div>
                ))}
                <div className="summary-total">
                    <strong>Total:</strong> ${getTotalPrice().toFixed(2)}
                </div>
            </div>
            <div className="checkout-buttons">
                <button onClick={handlePayment}>Pagar ahora</button>
                <button onClick={() => navigate("/")}>Cancelar</button>
            </div>
        </div>
    );
};

export default Checkout;
