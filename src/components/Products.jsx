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






// const info = data
//   .filter((product) =>
//     product.name.toLowerCase().includes(input.toLowerCase())
//   )
//   .map((product, index) => <div key={index}>{product.name}</div>);

const handleChange = (e) => {
  setInput(e.target.value);
};

  return (
    <div className="container">
      <div className="buttons">
      
        <input type="text" onChange={(event) => handleChange(event)} />

        {/* below should be fixed: key for render! */}
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {loading && "Loading..."}
        {!!data && data.length > 0 ? (
           data.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  ).map((product) => {
            return (
              <>
                <div className="col" key={product.id}>
                  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop  */}
                  <div className="card h-100 border-0">
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div class="d-flex flex-wrap justify-content-between">
                        <div className="p-0">
                          <h5 className="card-title">{product.title}</h5>
                        </div>
                        <div class="p-0">
                          <span class="text-end badge text-bg-primary">
                            Primary
                          </span>
                        </div>
                      </div>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">{product.name}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="fw-bolder">
                          {" "}
                          <i className="fa fa-usd me-1"></i>
                          {product.price}
                        </p>
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
