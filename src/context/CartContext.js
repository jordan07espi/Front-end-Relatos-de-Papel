import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
            item.id === product.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
        );
      } else {
        return [...prevCart, { ...product, cantidad: 1 }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
        prevCart.map(item =>
            item.id === id ? { ...item, cantidad: quantity } : item
        )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
      <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
        {children}
      </CartContext.Provider>
  );
};

export default CartProvider;