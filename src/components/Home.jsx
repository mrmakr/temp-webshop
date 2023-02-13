import React from "react";
import Navbar from "./NavBar";
import NavLook from "./NavLook";
import Products from "./Products";

const Home = () => {
  return (
    <>
    <Navbar />
      <div className="container mb-5 mt-3">
        <h5>Lorem</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          officiis qui reiciendis eligendi ea repudiandae officia nisi,
          necessitatibus culpa deleniti quia corporis? Consectetur eum commodi
          veniam facilis nisi deserunt eius.
        </p>
        <Products />
      </div>
    </>
  );
};

export default Home;
