import React, { useState, createContext } from 'react';
import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);

  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
