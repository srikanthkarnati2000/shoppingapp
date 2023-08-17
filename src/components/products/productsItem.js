import React from "react";
import "../products/style3.css";

const ProductsItem = ({ produck = [] }) => {
  return (
    <>
      <div className="container-fluid row">
        {produck.map((prod) => {
          const { id, title, price, category, image } = prod;
          return (
            <div className="col-md-4 my-3">
              <div className="container-fluid my-1">
                <div className="card productcard">
                  <img
                    src={image}
                    className="card-img-top img-thumbnail productimage"
                    alt="..."
                  />
                  <div className="card-body" key={prod.url}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-capitalize">{category}</p>
                    <p className="card-text">Price - {price} $</p>
                    <a href={"/product/" + id} className="btn viewbutton">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsItem;
