import React from "react";
import Navbar from "./NavBar";
import NavLook from "./NavLook";
import Products from "./Products";

const Home = () => {
  return (
    <>
    <Navbar />
      <div className="container mb-5 mt-3">
        <h5>welcome to tempstore!</h5>
        <p>
          Browse our stuff below, or use the search function!
        </p>
        <Products />
      </div>
    </>
  );
};

export default Home;
