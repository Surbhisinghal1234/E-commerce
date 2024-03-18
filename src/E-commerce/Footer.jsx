import React, { useState, useEffect, useContext } from "react";
import { cartCount } from "./Main";

function Footer() {
  //   const { heading } = useContext(cartCount);

  //   console.log(heading);

  return (
    <div className="bottom">
      {/* <h1>{heading}</h1> */}
      <h2>Lorem, ipsum.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in
        architecto natus minus quidem autem molestias ab facere laudantium quod?
      </p>
    </div>
  );
}

export default Footer;
