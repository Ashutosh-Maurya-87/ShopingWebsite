import React from "react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar d-flex justify-content-start">
        <a className="active" href="#">
          <i className="fa fa-fw fa-home"></i> Home
        </a>
        <a href="#">
          <i className="fa fa-fw fa-search"></i> Search
        </a>
        <a href="#">
          <i className="fa fa-fw fa-envelope"></i> Contact
        </a>
        <a href="#">
          <i className="fa fa-fw fa-user"></i> Login
        </a>
      </div>
    </>
  );
};
