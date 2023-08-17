import React from "react";
import companylogo from "./companylogo.png";
import electronics from "./electrnoics.png";
import jewelery from "./jewelery.png";
import mensclothing from "./mensclothing.png";
import topproducts from "./topproducts.png";
import womens from "./womens.png";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-evenly">
          <a href="/home">
            <img src={companylogo} alt="" id="logomain" />
          </a>
          <a href="/products">
            <img src={topproducts} alt="" id="logomain" />
          </a>
          <a href="/products/electronics">
            <img src={electronics} alt="" id="logomain" />
          </a>
          <a href="/products/jewelery">
            <img src={jewelery} alt="" id="logomain" />
          </a>

          <a href="/products/men's clothing">
            <img src={mensclothing} alt="" id="logomain" />
          </a>
          <a href="/products/women's clothing">
            <img src={womens} alt="" id="logomain" />
          </a>
          <button
            type="button"
            className="btn cartbutton rounded-circle"
            onClick={() => navigate("/cartitems")}
          >
            <i className="bi bi-cart-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Content;
