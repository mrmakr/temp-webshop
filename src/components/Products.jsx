import React, { useState, useEffect } from "react";
import axios from "axios";
const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  // const [filter, setFilter] = useState(data);
  const [input, setInput] = useState("");


// const [allData, setAllData] = useState([]);
// const [filteredData, setFilteredData] = useState(allData);



  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      baseURL: "https://dummyjson.com",
      url: "/products?limit=30",
    })
      .then(({ data }) => {
        console.log(data.products);
        setData(data.products);
        // setAllData(data.products);
        // setFilteredData(data.products);
      })
      .catch((err) => console.dir(err))
      .finally(() => setLoading(false));
  }, []);

//  const handleSearch = (event) => {
//    let value = event.target.value.toLowerCase();
//    let result = [];
//    console.log(value);
//    result = allData.filter((data) => {
//      return data.title.search(value) !== -1;
//    });
//    setFilteredData(result);
//  };







  // const filterProduct = (cat) => {
  //   const updatedList = data.filter((x) => x.category === cat);
  //   setFilter(updatedList);
  // };







const info = data
  .filter((product) =>
    product.name.toLowerCase().includes(input.toLowerCase())
  )
  .map((product, index) => <div key={index}>{product.name}</div>);

const handleChange = (e) => {
  setInput(e.target.value);
};

  return (
    <div class="container">
      <div className="buttons">
        <input type="text" onChange={handleChange} />
        <div>{info}</div>
        {/* <input type="text" onChange={(event) => handleSearch(event)} /> */}

        {/* <button
          className="btn btn-outline-dark"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => filterProduct("laptops")}
        >
          laptop
        </button> */}
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {loading && "Loading..."}
        {!!data && data.length > 0 ? (
          data.map((product) => {
            return (
              <>
                <div class="col" key={product.name}>
                  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop  */}
                  <div className="card h-100 border-0" key={product.id}>
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">{product.name}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <i className="fa fa-usd me-1"></i>
                        {product.price}$
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-tags me-1"></i>
                        {product.discountPercentage}%
                      </li>
                      <li className="list-group-item">
                        <i className="fa fa-star me-1"></i>
                        {product.rating}
                      </li>
                    </ul>
                    <div className="card-footer text-end">
                      <a
                        href="#"
                        className="text-uppercase card-link text-muted"
                      >
                        <small>add to cart</small>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p>API did not provided any product, try again.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
