import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [showData, setshowData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data.products);

      setshowData(response.data.products);
    });
  }, []);
  return (
    <>
      <div className="products">
        {showData &&
          showData.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/singleproduct/${item.id}`}>
                  <Product key={index} productDetail={item} />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default HomePage;
