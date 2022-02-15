import React from 'react';
import './Header.css';
import TopBar from "./TopBar";

const Header = () => {
    return (
        <div className="header">
            <div className="header__flag"><img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/510px-Flag_of_the_United_Arab_Emirates.svg.png'
                alt='flag'/></div>
            <TopBar className="header__searchBar"/>
            <div className="header__accountActions">
                <button className="header__button">Login</button>
                <button className="header__button">Signup</button>
            </div>
        </div>
    );
};

export default Header;