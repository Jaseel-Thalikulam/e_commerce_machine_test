import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/productTypes";
import "../styles/homePage.css";
import LoadingSkeleton from "../components/LoadingSkelton";
import {useCustomContext } from "../context/CustomContext";
import { capitalizeEveryWord } from "../lib/util";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isPending, startTransition] = useTransition();


  const { searchValue,selectedCategory } = useCustomContext();
  useEffect(() => {
    startTransition(() => {
      (async function getData() {
        try {
          let url = `https://fakestoreapi.com/products`;
          if (selectedCategory) {
            url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
          }
  
          const response = await axios.get(url);
          setProducts(response?.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      })();
    });
  }, [selectedCategory]);

  return (
    <>
      <div className="content--title">
        <h1>{selectedCategory?capitalizeEveryWord(selectedCategory):"All Products"}</h1>
      </div>
      <div className="product--listing">
        {isPending
          ? [1, 2, 3, 4].map((item) => <LoadingSkeleton key={item} />)
          : products?.filter((product) => {
            if (!searchValue) {
              
              return product
            }else if (product.title.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
              return product
            }
              
          }).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
       
    </>
  );
};

export default HomePage;
