import React, { useState } from "react";
import logo from "../assets/hizotipoBlack.png";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import "../styles/styles.css";

export const Header = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <header className="header">
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
                    <FaShoppingCart className="header-icon" />
                </div>
            </div>
        </header>
    );
};
