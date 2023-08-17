import "../header/style1.css";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg justify-content-evenly">
          <div className="container-fluid">
            <a className="navbar-brand mainname text-black" href="/home">
              Shop Connect
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="downicon">
                <i className="bi bi-arrow-90deg-down"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                <li className="nav-item text-black">
                  <a className="nav-link text-black" href="/products">
                    Top Products
                  </a>
                </li>
                <li className="nav-item text-black">
                  <a
                    className="nav-link text-black"
                    href="/products/electronics"
                  >
                    Electronics
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-black" href="/products/jewelery">
                    Jewelery
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    href="/products/men's clothing"
                  >
                    Men's Clothing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    href="/products/women's clothing"
                  >
                    Women's Clothing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
