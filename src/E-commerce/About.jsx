import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div className="about-sec">
      <h1>Lorem, ipsum.</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis animi est architecto quam molestiae beatae quod expedita veritatis iure velit!</p>
      <li>
        {" "}
        <Link to={"aboutpre"}>AboutPre</Link>
      </li>
      <Outlet />
    </div>
  );
}

export default About;
