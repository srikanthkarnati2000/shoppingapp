import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid my-4 border-bottom border-secondary-subtle">
        <div class="row justify-content-center mx-3">
          <div class="col-8">
            <div className="homecontent fs-5">
              <div>
                <h5>
                  <b>
                    Welcome to Shop Connect - Your Ultimate Shopping Destination
                  </b>
                </h5>
                <p className="my-3">
                  Discover a World of Shopping Convenience and Style!
                </p>
                <p>
                  At Shop Connect, we're committed to revolutionizing your 🛍️
                  shopping experience. Whether you're a fashion enthusiast 👗👠,
                  tech geek 📱💻, or home decor lover 🏠🛋️, we've got everything
                  you need in one place. Explore our wide range of products
                  🎁🌟, curated to suit your unique tastes and preferences. 🤩🛒
                </p>
              </div>
              <div className="text-start">
                <h6>
                  <b className="fs-5">Why Choose Shop Connect?</b>
                </h6>
                <p>
                  🛍️ Shop Anytime, Anywhere: Browse and shop from the comfort of
                  your home, office, or on the go. Our app ensures a seamless
                  shopping journey all your devices.
                </p>
                <p>
                  🔥 Trending Collections: Stay up-to-date with the latest
                  trends! Discover curated collections that keep you in vogue
                  and ahead of the game.
                </p>
                <p>
                  🛒 Wide Product Range: From fashion and beauty to electronics
                  and home essentials, we've got it all. Explore diverse
                  categories and find what resonates with you.
                </p>
                <p>
                  🌟 Quality Guaranteed: We believe in offering only the best to
                  our customers. Each product is handpicked for its quality,
                  durability, and style.
                </p>
                <p>
                  💡 Smart Recommendations: Our intelligent recommendation
                  engine suggests products you'll love based on your preferences
                  and browsing history.
                </p>
                <p>
                  🚚 Swift Delivery: Get your orders delivered right to your
                  doorstep. Our efficient delivery network ensures your items
                  reach you in no time.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-outline-success rounded-pill"
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  Shop Now!
                </button>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div>
              <img
                className="showimage my-3 rounded-top"
                src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
