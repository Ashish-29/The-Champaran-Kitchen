import React from "react";
import { product } from "../Data";

const Products = () => { 
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="box-container">
          {product.map((item, i) => (
            <div className="box" key={i}>
              <div className="icons">
                <a href="https://www.example.com" className="fas fa-shopping-cart" > </a>
                <a href="https://www.example.com" className="fas fa-heart"> </a>
                <a href="https://www.example.com" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3>fresh coffee</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  &#8377;{item.price} <span>{item.falsePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
