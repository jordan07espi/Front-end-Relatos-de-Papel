import React, { useState } from "react";
import logo from "../assets/hizotipoBlack.png";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import "../styles/header.css";
import Cart from "../components/Cart"; // Importa el componente Cart

export const Header = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isCartVisible, setIsCartVisible] = useState(false); // Manejo del estado del carrito

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    const toggleCartVisibility = () => {
        setIsCartVisible((prev) => !prev); // Alternar visibilidad del carrito
    };

    return (
        <header className="header">
            <div className="header-content">
                <img src={logo} alt="Logo" className="header-logo" />
                <div className="header-search-container">
                    <input
                        type="text"
                        placeholder="Buscar por autor, código, título de libro..."
                        className="header-search"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <div className="header-icons">
                        <FaHeart className="header-icon" />
                        <FaUser className="header-icon" />
                        <FaShoppingCart
                            className="header-icon"
                            onClick={toggleCartVisibility} // Alternar visibilidad del carrito
                        />
                    </div>
                </div>
            </div>
            {isCartVisible && <Cart />} {/* Mostrar carrito desde el Header */}
        </header>
    );
};
