import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="https://via.placeholder.com/500"
          className="card-img"
          alt="..."
          height="500px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 mb-0">Sale</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus soluta ratione dicta, blanditiis sit totam deleniti nisi corrupti distinctio laboriosam iusto deserunt perferendis voluptatibus eligendi ab odit eius ullam?
            </p>
            <p className="card-text">
              <small>…</small>
            </p>
          </div>
        </div>
      </div>

      <Products/>
    </div>
  );
};

export default Home;
