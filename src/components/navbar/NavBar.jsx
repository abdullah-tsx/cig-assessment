import React from 'react';
import './NavBar.scss';
import Categories from "./Categories";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__title">Categories</div>
      <Categories className="navBar__categories"/>
      <div className="navBar__right">
        <div className="navBar__howItWorks">How it Works? &nbsp;</div>
        <div className="navBar__contactus">Contact Us</div>
      </div>
    </div>
  );
};

export default NavBar;