import "./App.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import Category from "./components/products/category";
import Products from "./components/products/products";

import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleItem from "./components/products/singleItem";
import Contact from "./components/cartform/contact";
import Address from "./components/cartform/address";
import Addcart from "./components/products/addcart";
import Ordersuccess from "./components/cartform/ordersuccess";
import Homepage from "./components/content/homepage";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="container-fluid text-center maincontent my-5">
            <Content />
            <div>
              <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
                <Route exact path="/home" element={<Homepage />}></Route>
                <Route exact path="/products" element={<Products />}></Route>
                <Route
                  exact
                  path="/products/:category"
                  element={<Category />}
                ></Route>
                <Route
                  exact
                  path="/product/:id"
                  element={<SingleItem />}
                ></Route>
                <Route exact path="/login" element={<Contact />}></Route>
                <Route
                  exact
                  path="/address/:firstname/:email/:phno"
                  element={<Address />}
                ></Route>
                <Route exact path="/cartitems" element={<Addcart />}></Route>
                <Route
                  exact
                  path="/ordersuccess/:firstname/:email/:phno/:house/:street/:city/:state/:pincode"
                  element={<Ordersuccess />}
                ></Route>
              </Routes>
            </div>
          </div>
          <div className="footercontent my-2">
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}
