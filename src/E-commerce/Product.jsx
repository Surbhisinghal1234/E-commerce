import React, { useState, useContext } from "react";
import { cartCount } from "./Main";

function Product({ productDetail }) {
  // console.log(key);
  const { cart, setCart } = useContext(cartCount);
  const [addedToCart, setAddedToCart] = useState(false);

  //   const productInCart = cart.some(function (item) {
  //     return item.id === product.id;
  //   });
  //   if (!productInCart) {
  //     setCart([...cart, product]);
  //     setAddedToCart(true);
  //   }
  // }
  function addCount(e, product) {
    e.preventDefault();

    const cartItemIds = cart.map((item) => item.id);

    if (!cartItemIds.includes(product.id)) {
      setCart([...cart, product]);
      setAddedToCart(true);
    }
  }

  return (
    <>
      <div className="product">
        <img src={productDetail.thumbnail} alt="" />

        <p>{productDetail.id}</p>
        <h4>{productDetail.title}</h4>
        <a
          href=""
          onClick={(e) => addCount(e, productDetail)}
          disabled={addedToCart}
        >
          {addedToCart ? "Added" : "Add to Cart"}
        </a>
      </div>
    </>
  );
}

export default Product;
