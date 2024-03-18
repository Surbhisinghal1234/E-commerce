import React, { createContext, useState } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
// import Footer from "./Footer"
import "./HomePage.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Products from "./Products";
import Services from "./Services";
import Contact from "./Contact";
import AboutPre from "./AboutPre";
import SingleProduct from "./SingleProduct";
import AboutPost from "./AboutPost";
import Footer from "./Footer";
// import CartData from "./CartData"
export const cartCount = createContext();

function Main() {
  const [cart, setCart] = useState([]);
  // const [getData, setGetData] = useState("")

  // const heading = "lorem"

  return (
    <>
      <cartCount.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Header />

         
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}>
              <Route path="aboutpre" element={<AboutPre />} />
              <Route path="aboutPost" element={<AboutPost />} />
            </Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/singleproduct/:id"
              element={<SingleProduct />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </cartCount.Provider>
    </>
  );
}

export default Main;
