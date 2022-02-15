import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <div className="categories">
            <a href="/#" className="categories__category">Home</a>
            <span className="categories__divider"/>
            <a href="/#" className="categories__category">Licensing</a>
            <span className="categories__divider"/>
            <a href="/#" className="categories__category">Activity</a>
            <span className="categories__divider"/>
            <a href="/#" className="categories__category">Visa</a>
            <span className="categories__divider"/>
            <a href="/#" className="categories__category">Office</a>
        </div>
    );
};

export default Categories;