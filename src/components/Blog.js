import React from "react";
import { blog } from "../Data";

const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, i) => (
            <div class="box" key={i}>
              <div class="image">
                <img src={item.img} alt={`item_img_${i}`} />
              </div>
              <div class="content">
                <a href="https://www.example.com" class="title">
                  {item.title}
                </a>
                <span>by {item.name} / {item.date}</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dicta.
                </p>
                <a href="https://www.example.com" class="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
