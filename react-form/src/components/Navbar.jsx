import React from "react";
import Home from "./Imges/home.png";
import Bell from "./Imges/bell.png";
import Search from "./Imges/search.png";
import Contact from "./Imges/contact.png";

import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      {/* Heading  */}
      <div className=" div flex flex-row  bg-white  p-2">
        <h1 className="text-2xl font-bold text-black mr-[760px]">
          SMART SCHOOL
        </h1>
        {/* orange button  */}
        <button type="submit" className="btn1 ">
          Under Implementation Track Progress
        </button>
        {/* blue button  */}
        <button type="submit" className="btn2">
          Get Help
        </button>
        <button type="submit" className=" btn3 ">
          AY : 2023-2024
        </button>

        {/* icons */}

        <div className="flex flex-row gap-4">
          <img src={Home} alt="Placeholder Image" className="home " />

          <img src={Bell} alt="Placeholder Image" className="bell " />

          <img src={Search} alt="Placeholder Image" className="search " />

          <img src={Contact} alt="Placeholder Image" className="contact " />
        </div>
      </div>

      {/* <div className="sub-heading flex flex-row gap-6 bg-white text-black pl-6 text-xs">
        <a href="/">Staff Details</a>
        <a href="/">Staff Attendence</a>
        <a href="/">Biometric Attendence</a>
        <a href="/">Feedback</a>
        <a href="/">Staff Leaves</a>
        <a href="/">Staff</a>
        <a href="/">Report</a>
      </div> */}
    </>
  );
};

export default Navbar;
