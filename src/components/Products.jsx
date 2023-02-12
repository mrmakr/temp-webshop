import React, { useState, useEffect } from "react";
import axios from "axios";
const Products = () => {
          const [loading, setLoading] = useState(false)
            const [data, setData] = useState(null)
        
            useEffect(() => {
                setLoading(true)
                axios({
                  method: "GET",
                  baseURL: "https://dummyjson.com",
                  url: "/products?limit=10",
                })
                  .then(({ data }) => {
                    console.log(data.products);
                    setData(data.products);
                  })
                  .catch((err) => console.dir(err))
                  .finally(() => setLoading(false));
            }, [])
        
            return (
              <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                  <h1>Fake Shop API response:</h1>
                  {loading && "Loading..."}
                  {!!data && data.length > 0 ? (
                    data.map((product) => {
                      return (
                        <>
                          <div class="col" key={product.name}>
                            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop  */}
                            <div className="card h-100" key={product.id}>
                              <img
                                src={product.thumbnail}
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                  {product.description}
                                </p>
                              </div>
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                  {product.price}$
                                </li>
                                <li className="list-group-item">
                                  {product.discount}
                                </li>
                                <li className="list-group-item">
                                  {product.rating}
                                </li>
                              </ul>
                              <div className="card-footer">
                                <a href="#" className="card-link text-muted">
                                  <small>Card link</small>
                                </a>
                                <a href="#" className="card-link text-muted">
                                 <small>Another link</small> 
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
        }




export default Products;
