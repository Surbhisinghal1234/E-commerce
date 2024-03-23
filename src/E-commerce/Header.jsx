import React, { useContext, useState } from "react";
import { cartCount } from "./Main";
import { Link } from "react-router-dom";

function Header() {
  const { cart, setCart } = useContext(cartCount);
  const [showCartData, setShowCartData] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowCartData(!showCartData);
  }

  // function handleMenuToggle() {
  //   setShowMenu(!showMenu);
  // }
  function removeCount(e, index) {
    e.preventDefault();
    const removeFromCart = [...cart];
    removeFromCart.splice(index, 1);
    setCart(removeFromCart);

    console.log(index)
  }

  console.log(cart)
  return (
    <>
      <header>
        <h2>
          <Link to="/">React Routing</Link>
        </h2>
        <ul className="ul-list">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <p>
          <a href="">&#8801;</a>
        </p>
      </header>

      <div className="wrapper">
        <nav>
          <a href="#" onClick={handleSubmit}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{cart.length}</span>
          </a>
        </nav>
        {showCartData && (
          <div className="show-head">
            {cart.map((item,index) => (
              <div  key ={index}className="show">
                <img src={item.thumbnail} alt="" />
                <p>{item.id}</p>
                <h4>{item.title}</h4>
                <p onClick={(e) => removeCount(e, index)}>&times;</p>
                
              </div>
            ))}
          </div>
          
        )}
      </div>
    </>
  );
}

export default Header;
