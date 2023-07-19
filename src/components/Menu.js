import React from "react";
import { menu } from "../Data";

const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, i) => (
            <div className="box" key={i}>
              <img src={item.img} alt="" />
              <h3>tasty and healty</h3>
              <div className="price">
                &#8377;{item.price} <span>{item.falsePrice}</span>
              </div>
              <a href="https://www.example.com" className="btn">
                add to cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
