import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../types/productTypes';


interface CustomContextType {
  searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  cart: Product[]; // Cart state
  addToCart: (product: Product) => void; 
  subTotal:number
}


const CustomContext = createContext<CustomContextType>({
  searchValue: '',
    setSearchValue: () => { },
    selectedCategory: '',
  setSelectedCategory: () => { },
  cart: [],
  addToCart: () => { },
  subTotal:0,
});


interface CustomProviderProps {
  children: ReactNode; 
}


export const CustomProvider: React.FC<CustomProviderProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [cart, setCart] = useState<Product[]>([]);
  const [subTotal, setSubTotalPrice] = useState(0)
  
  const addToCart = (product: Product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    let newCart;

    if (index !== -1) {
      // Remove item from cart
      newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    } else {
      // Add item to cart
      newCart = [...cart, product];
      setCart(newCart);
    
    }
    const newTotalPrice = newCart.reduce((acc, item) => acc + item.price, 0);
    setSubTotalPrice(newTotalPrice);
  };
  
  return (
    <CustomContext.Provider value={{ searchValue, setSearchValue,selectedCategory,setSelectedCategory,addToCart,cart,subTotal }}>
      {children} 
    </CustomContext.Provider>
  );
};


export const useCustomContext = (): CustomContextType => useContext(CustomContext);
