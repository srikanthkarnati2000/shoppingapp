import ProductsItem from "./productsItem";
import "../products/style3.css";

import React, { useState, useEffect } from "react";

const Products = () => {
  const [produck, setProduck] = useState([]);
  const [head, setHead] = useState("");
  const current = window.location.href;

  useEffect(() => {
    const fetchProducts = async () => {
      const url = await fetch("https://fakestoreapi.com/products");
      const data = await url.json();
      console.log(data);
      setProduck(data);
      setHead("Top Products");
    };
    fetchProducts();
  }, []);

  const word = head;
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <>
      <div className="container">
        <div>
          <h1 className="text-center" style={{ margin: "35px 0px" }}>
            {capitalizedWord}
          </h1>
          {produck.length > 0 ? (
            <ProductsItem produck={produck} key={head}></ProductsItem>
          ) : (
            <div>
              <h1>Loading</h1>
            </div>
          )}
        </div>
      </div>
      <div className="text-center backtop">
        <a className="nav-link" href={current}>
          Back to top <i className="bi bi-caret-up-fill"></i>
        </a>
      </div>
    </>
  );
};

export default Products;
