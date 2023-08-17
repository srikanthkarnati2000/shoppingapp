import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../products/style3.css";

const Addcart = () => {
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carts]);

  const navigate = useNavigate();

  const increment = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        if (item.quantity === 10) {
          alert("Max 10 items can be booked.");
        } else {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cartitems");
  };

  const decrement = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          alert("Min 1 item to be booked!");
        } else {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cartitems");
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cartitems");
  };

  if (!carts.length) <div>Cart is empty</div>;

  return (
    <>
      <div className="container text-center my-2">
        <div className="row justify-content-center">
          <div className="col-9">
            <div className="card">
              <h5 className="card-header">
                Total {carts?.length} Cart Items{" "}
                <i className="bi bi-cart-check-fill"></i>
              </h5>
              {carts?.map((cart) => {
                return (
                  <div className="text-start card-body" key={cart?.title}>
                    <div className="row justify-content-start">
                      <div className="col-3">
                        <img
                          src={cart?.image}
                          className="img-thumbnail cartimage"
                          alt="..."
                        />
                      </div>
                      <div className="col-9">
                        <h5 className="card-title">{cart?.title}</h5>
                        <p className="card-title text-capitalize">
                          <b>Category</b>: {cart?.category}
                        </p>
                        <p className="card-text">
                          <b>Price</b>: {cart?.price * cart?.quantity}
                        </p>
                        <p className="card-text">
                          <b>Quantity</b>: {cart?.quantity}
                        </p>
                        <div className="row justify-content-center">
                          <div className="col-4">
                            <div>
                              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <i
                                  className="bi bi-dash-circle fs-4"
                                  onClick={() => {
                                    decrement(cart?.id);
                                  }}
                                ></i>
                                <input
                                  className="form-control numericpanel"
                                  type="text"
                                  aria-label="default input example"
                                  value={cart?.quantity}
                                  disabled
                                />
                                <i
                                  className="bi bi-plus-circle fs-4"
                                  onClick={() => {
                                    increment(cart?.id);
                                  }}
                                ></i>

                                <button
                                  className="btn btn-danger mx-3"
                                  type="button"
                                  onClick={() => removeProduct(cart?.id)}
                                >
                                  <i className="bi bi-trash3-fill"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Checkout Summary!</h5>
                <div className="dropdown my-3 text-start">
                  <h6>Select Coupons:</h6>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1" disabled>
                      No coupons available right now!
                    </option>
                  </select>
                </div>
                <div className="dropdown my-4 text-start">
                  <h6>Payment mode!</h6>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Cash on delivery 💵</option>
                  </select>
                </div>
                <div className="text-start">
                  <p>Shipping charges: 10 $</p>
                </div>
                <input
                  className="form-control"
                  type="text"
                  aria-label="default input example"
                  value={"Total: " + total.toFixed(2) + " + 10 $"}
                  disabled
                />
                <button
                  type="button"
                  className="btn btn-success rounded-5 my-3"
                  onClick={() => navigate("/login")}
                >
                  Place Order <i className="bi bi-check-circle-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcart;
