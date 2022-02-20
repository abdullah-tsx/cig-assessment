import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Section from "./components/Section/Section";
import React from "react";
import {Rating} from "@mui/material";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="app">
      <Header/>
      <NavBar/>
      <Hero/>
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
      <Section title="Best Selling Products" className="app__section">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </Section>
      <Section title="Commonly Ask for" className="app__section" viewMore>
        <Product/>
      </Section>
    </div>
  );
}

export default App;
