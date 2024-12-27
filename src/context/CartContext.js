import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map((cartItem) =>
          cartItem.id === item.id
              ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
              : cartItem
      ));
    } else {
      setCart([...cart, { ...item, cantidad: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map((item) =>
        item.id === id ? { ...item, cantidad: quantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
      <CartContext.Provider
          value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            updateQuantity,
            getTotalPrice,
          }}
      >
        {children}
      </CartContext.Provider>
  );
};
