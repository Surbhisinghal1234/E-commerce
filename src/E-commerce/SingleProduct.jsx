import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { cartCount } from "./Main";

function SingleProduct() {
  const [data, setData] = useState();
  const { ids } = useParams();
  const { cart, setCart } = useContext(cartCount);
  const [addedToCart, setAddedToCart]=useState(false)

  const fetchData = async () => {
    const res = await axios.get(`https://dummyjson.com/products/${ids}`);
    console.log(res?.data);
    setData(res?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  function addCount(e, product) {
    e.preventDefault();
    // setCart([...cart, product]);
    // filter me cart me jo add hua vo data hai 
     const productInCart = cart.filter(function (item) {
      return item.id === product.id;
    });

    if (productInCart.length === 0) {
      setCart([...cart, product]);
      setAddedToCart(true);
    }
  }

  return (
    <div className="single-page">
      <img src={data?.thumbnail} alt="" />
      <p>{data?.id}</p>
      <a href="" onClick={(e) => addCount(e, data)} disabled={addedToCart}>
      {addedToCart ? "Added" : "Add to Cart"}
      </a>
    </div>
  );
}

export default SingleProduct;
