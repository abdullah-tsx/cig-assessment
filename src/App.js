import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Section from "./components/Section/Section";
import React from "react";
import {Rating} from "@mui/material";

function App() {
    return (
        <div className="app">
            <Header/>
            <NavBar/>
            <Hero/>
            <hr/>
            <Section title="Our Major Categories" className="app__section">
                <img className="app__section__image"
                     src="https://assets-global.website-files.com/59b85cfc56db830001760b29/5fff14e2413f90bf4a61ee82_Asset_5.png"
                     alt="licensing"/>
                <img className="app__section__image"
                     src="https://static8.depositphotos.com/1010652/976/i/600/depositphotos_9762205-stock-photo-activity-word-on-whiteboard.jpg"
                     alt="activity"/>
                <img className="app__section__image"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/3072px-Former_Visa_%28company%29_logo.svg.png"
                     alt="visa"/>
                <img className="app__section__image"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/3072px-Former_Visa_%28company%29_logo.svg.png"
                     alt="visa"/>
                <img className="app__section__image"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/3072px-Former_Visa_%28company%29_logo.svg.png"
                     alt="visa"/>
            </Section>
            <hr/>
            <Section title="Best Selling Products" className="app__section">
                <div className="app__product">
                    <img className="app__product__image"
                         src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oT8Y?ver=1a35&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
                         alt="product"/>
                    <h3 className="app__product__title">1 Visa E-Commerce</h3>
                    <h4 className="app__product__category">Food Stuff Trading</h4>
                    <h5 className="app__product__oldPrice">AED 14000</h5>
                    <h5 className="app__product__newPrice">AED 6000</h5>
                    <h5 className="app__product__savings">AED 6000</h5>
                    <button className="app__product__button">Buy Now</button>
                    <Rating className="app__product__rating" name="read-only" value={3.0} readOnly/>
                </div>
                <div className="app__product">
                    <img className="app__product__image"
                         src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oT8Y?ver=1a35&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
                         alt="product"/>
                    <h3 className="app__product__title">1 Visa E-Commerce</h3>
                    <h4 className="app__product__category">Food Stuff Trading</h4>
                    <h5 className="app__product__oldPrice">AED 14000</h5>
                    <h5 className="app__product__newPrice">AED 6000</h5>
                    <h5 className="app__product__savings">AED 6000</h5>
                    <button className="app__product__button">Buy Now</button>
                    <Rating className="app__product__rating" name="read-only" value={3.0} readOnly/>
                </div>
                <div className="app__product">
                    <img className="app__product__image"
                         src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oT8Y?ver=1a35&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
                         alt="product"/>
                    <h3 className="app__product__title">1 Visa E-Commerce</h3>
                    <h4 className="app__product__category">Food Stuff Trading</h4>
                    <h5 className="app__product__oldPrice">AED 14000</h5>
                    <h5 className="app__product__newPrice">AED 6000</h5>
                    <h5 className="app__product__savings">AED 6000</h5>
                    <button className="app__product__button">Buy Now</button>
                    <Rating className="app__product__rating" name="read-only" value={3.0} readOnly/>
                </div>
                <div className="app__product">
                    <img className="app__product__image"
                         src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oT8Y?ver=1a35&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
                         alt="product"/>
                    <h3 className="app__product__title">1 Visa E-Commerce</h3>
                    <h4 className="app__product__category">Food Stuff Trading</h4>
                    <h5 className="app__product__oldPrice">AED 14000</h5>
                    <h5 className="app__product__newPrice">AED 6000</h5>
                    <h5 className="app__product__savings">AED 6000</h5>
                    <button className="app__product__button">Buy Now</button>
                    <Rating className="app__product__rating" name="read-only" value={3.0} readOnly/>
                </div>
            </Section>
        </div>
    );
}

export default App;
