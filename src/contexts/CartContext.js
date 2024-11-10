import React, { createContext, useContext, useState } from 'react';

// Create a Cart Context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove a product from the cart (either decrease quantity or remove it completely)
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const productToRemove = prevCart.find((item) => item.id === id);
      if (productToRemove.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== id); // Remove item completely when quantity reaches 0
      }
    });
  };

  // Clear the entire cart
  const removeAllItems = () => {
    setCart([]); // Clear the cart completely
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllItems }}>
      {children}
    </CartContext.Provider>
  );
};
