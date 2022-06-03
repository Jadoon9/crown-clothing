import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  // cartItems: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = {
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
