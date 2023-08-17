import React from "react";
import { useParams } from "react-router-dom";

const Ordersuccess = () => {
  const { firstname, email, phno, house, street, city, state, pincode } =
    useParams();

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumber = generateRandomNumber(10000, 50000);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-8 my-5">
          <div className="container-fluid">
            <div className="card">
              <h5 className="card-header bg-success-subtle bg-gradient">
                Order Successful 🎉
              </h5>
              <div className="card-body">
                <h6 className="card-title">
                  <b>Name: </b>
                  {firstname} <i className="bi bi-person-circle"></i>
                </h6>
                <h6>
                  <b>Email: </b>
                  {email}
                </h6>
                <h6>
                  <b>Phone: </b>
                  {phno}
                </h6>
                <p className="card-text mx-5">
                  🎉 Congratulations on your successful order placement! We're
                  thrilled to have you as our valued customer. Your order has
                  been received, and we're already working hard to process it
                  swiftly. 🚀✨ Thank you for choosing us for your purchase! If
                  you have any questions or need assistance, feel free to reach
                  out. 🛍️
                </p>
                <div className="row justify-content-center">
                  <div className="col-8 my-1 text-start">
                    <p>
                      <b>Order Number:</b> # {randomNumber}
                    </p>
                    <p>
                      <b>Order Date:</b>
                      {" " + day + "/" + month + "/" + year}
                    </p>
                    <p>
                      <b>Shipping Address:</b>{" "}
                      {house +
                        " " +
                        street +
                        " " +
                        city +
                        " " +
                        state +
                        " " +
                        pincode}
                    </p>
                    <p>
                      <b>Payment Method:</b> Cash on delivery
                    </p>
                  </div>
                </div>
                <a href="/products" className="btn text-danger">
                  Continue shopping <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordersuccess;
