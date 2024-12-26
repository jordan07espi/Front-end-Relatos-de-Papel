import React from "react";
import logo from "../assets/hizotipoBlack.png";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <input type="text" placeholder="Buscar por autor, código, título de libro..." className="header-search" />
      <div className="header-icons">
        <FaShoppingCart />
        <FaHeart />
        <FaUser />
      </div>
    </header>
  );
};