import React, { useContext } from "react";
import { cartCount } from "./Main";

function Product({ productDetail }) {
  const { cart, setCart } = useContext(cartCount);
  //   console.log(cart, setCart)
  function addCount(e, product) {
    e.preventDefault();
    setCart([...cart, product]);
  }

  // function removeCount(e, remove) {
  //   e.preventDefault();

  //   const removeFromCart = [...cart];
  //   removeFromCart.splice(remove, 1);
  //   setCart(removeFromCart);
  // }
  return (
    <>
      <div className="product">
        <img src={productDetail.thumbnail} alt="" />
        <p>{productDetail.id}</p>

        <h4>{productDetail.title}</h4>
        <a href="" onClick={(e) => addCount(e, productDetail)}>
          Add to Cart
        </a>
        {/* <a href="" onClick={(e) => removeCount(e, productDetail)}>
          Remove From Cart
        </a> */}
      </div>
    </>
  );
}

export default Product;
