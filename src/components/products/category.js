import { useParams } from "react-router-dom";
import ProductsItem from "./productsItem";
import React, { useState, useEffect } from "react";

const Category = (props) => {
  const { category } = useParams();
  const current = window.location.href;

  const [produck, setProduck] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await url.json();
      console.log(data);
      setProduck(data);
    };
    fetchProducts();
  }, [category]);

  return (
    <>
      <div className="container">
        <h1
          className="text-center text-capitalize"
          style={{ margin: "35px 0px" }}
        >
          {category}
        </h1>

        <div className="">
          {produck.length > 0 ? (
            <ProductsItem produck={produck}></ProductsItem>
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

export default Category;
