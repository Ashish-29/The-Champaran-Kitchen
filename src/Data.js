import menuImage1 from "./assets/images/menu-1.png";
import menuImage2 from "./assets/images/menu-2.png";
import menuImage3 from "./assets/images/menu-3.png";
import menuImage4 from "./assets/images/menu-4.png";
import menuImage5 from "./assets/images/menu-5.png";
import menuImage6 from "./assets/images/menu-6.png";
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import productImage1 from "./assets/images/product-1.png";
import productImage2 from "./assets/images/product-3.png";
import productImage3 from "./assets/images/product-3.png";
import reviewImage1 from "./assets/images/pic-1.png";
import reviewImage2 from "./assets/images/pic-1.png";
import reviewImage3 from "./assets/images/pic-1.png";
import blogImage1 from "./assets/images/blog-1.jpeg";
import blogImage2 from "./assets/images/blog-2.jpeg";
import blogImage3 from "./assets/images/blog-3.jpeg";

const menu = [
  {
    img: menuImage1,
    price: 15.99,
    falsePrice: 20.99
  },
  {
    img: menuImage2,
    price: 25.99,
    falsePrice: 30.99
  },
  {
    img: menuImage3,
    price: 35.99,
    falsePrice: 40.99
  },
  {
    img: menuImage4,
    price: 20.99,
    falsePrice: 35.99
  },
  {
    img: menuImage5,
    price: 55.99,
    falsePrice: 60.99
  },
  {
    img: menuImage6,
    price: 45.99,
    falsePrice: 50.99
  },
];

const cart = [
  {
    img: cartImage1,
    price: 15.99,
  },
  {
    img: cartImage2,
    price: 45.99,
  },
  {
    img: cartImage3,
    price: 25.99,
  },
  {
    img: cartImage4,
    price: 20.99,
  },
];

const product = [
  {
    img: productImage1,
    price: 55.99,
    falsePrice: 80.99
  },
  {
    img: productImage2,
    price: 25.99,
    falsePrice: 30.99
  },
  {
    img: productImage3,
    price: 35.99,
    falsePrice: 50.99
  },
];

const review = [
  {
    img: reviewImage1,
    name: "Harsh",
  },
  {
    img: reviewImage2,
    name: "Ashish",
  },
  {
    img: reviewImage3,
    name: "Rahul",
  },
];

const blog = [
  {
    img: blogImage1,
    title: "tasty and refreshing spices",
    name: "Nidhi",
    date: "5th may, 2023",
  },
  {
    img: blogImage2,
    title: "Convenient and Fast",
    name: "Rahul",
    date: "11th Feb, 2023",
  },
  {
    img: blogImage3,
    title: "Effortless Dining",
    name: "Ashish",
    date: "13th Dec, 2022",
  },
];

export { menu, cart, product, review, blog };
