import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const SingleItem = () => {
  const { id } = useParams();

  const [produck, setProduck] = useState([]);

  const navigate = useNavigate();

  const handleCart = (produck) => {
    console.log(produck);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === produck.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if ((item) => item.id === produck.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...produck, quantity: 1 }])
      );
    }
    alert("Added to cart 👏🏻");
  };

  const buyDirect = (produck) => {
    console.log(produck);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === produck.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if ((item) => item.id === produck.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...produck, quantity: 1 }])
      );
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const url = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await url.json();
      console.log(data);
      setProduck(data);
    };
    fetchProducts();
  }, [id]);

  return (
    <>
      <div className="card mb-3 productcard border border-0 my-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={produck.image}
              className="img-fluid rounded-start productimage my-3"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start">
              <h5 className="card-title">
                <b>
                  <u>{produck.title}</u>
                </b>
              </h5>
              <p className="card-text">{produck.description}</p>
              <h6>
                <b>Category</b> - {produck.category}
              </h6>
              <h6>
                <small className="text-body-secondary">
                  <b className="text-danger">Price</b> - {produck.price} $
                </small>
              </h6>
              <button
                type="button"
                className="btn btn-primary my-3"
                onClick={() => {
                  buyDirect(produck);
                  navigate("/cartitems");
                }}
              >
                Buy now
              </button>
              <button
                type="button"
                className="btn btn-danger mx-1"
                onClick={() => handleCart(produck)}
              >
                Add to card
              </button>
              <Link
                to={"/products/" + produck.category}
                className="nav-link text-end"
              >
                Back <i className="bi bi-skip-backward-fill"></i>
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default SingleItem;
