import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      About
      <li>
        {" "}
        <Link to={"aboutpre"}>AboutPre</Link>
      </li>
      <Outlet />
    </div>
  );
}

export default About;
