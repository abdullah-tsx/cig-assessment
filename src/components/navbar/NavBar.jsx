import React from 'react';
import './NavBar.css';
import Categories from "./Categories";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__title">Categories</div>
            <Categories className="navBar__categories"/>
            <div className="navBar__howItWorks">How it Works?</div>
            <div className="navBar__contactus">Contact Us</div>
        </div>
    );
};

export default NavBar;