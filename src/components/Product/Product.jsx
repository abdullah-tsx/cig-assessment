import React from 'react';
import './Product.css';
import {Card, CardContent, Rating} from "@mui/material";

const Product = () => {

    return (

        <Card elevation={0} className="product" sx={{borderRadius: 5}}>
            <CardContent className="product__content">
                <img className="product__image"
                     src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oT8Y?ver=1a35&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
                     alt="product"/>
                <h3 className="product__title">1 Visa E-Commerce</h3>
                <h4 className="product__category">Food Stuff Trading</h4>
                <h5 className="product__oldPrice">AED 14000</h5>
                <h5 className="product__newPrice">AED 6000</h5>
                <h5 className="product__savings">AED 6000</h5>
                <button className="product__button">Buy Now</button>
                <Rating className="product__rating" name="read-only" value={3.0} readOnly/>
            </CardContent>
        </Card>

    );
};

export default Product;