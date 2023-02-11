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
                  url: "/products?limit=10&skip=10&select=title,price",
                })
                  .then(({ data }) => {
                    setData(data.products);
                  })
                  .catch((err) => console.dir(err))
                  .finally(() => setLoading(false));
            }, [])
        
            return (  
              <section>
                <h1>Fake Shop API response:</h1>
                {loading && "Loading..."}
                {!!data && data.length > 0 ? data.map((product) => {
                    return(
                      <article key={product.id}>
                        <h2>name: {product.name}</h2>
                        <p>id: {product.id}</p>
                        <p>description: {product.description}</p>
                        <p>brand: {product.brand}</p>
                        <p>price: {product.price}</p>
                        <p>category: {product.category}</p>
                      </article>
                    )   
                  }):(<p>API did not provided any product, try again.</p>)
                }
              </section>
            )
        }




export default Products;
