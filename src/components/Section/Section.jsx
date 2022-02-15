import React from 'react';
import './Section.css';
import {Card, CardContent} from "@mui/material";

const Section = ({title, children, className}) => {

    console.log(className);
    return (
        <div className={`section__container ${className}`}>
            <h1 className="section__title">{title}</h1>
            <div className="section__body">
                {children.length && children.map((child) => {
                    return <Card>
                        <CardContent className="section__content">
                            {child}
                        </CardContent>
                    </Card>
                })}
                {!children.length && <Card>
                    <CardContent className="section__content">
                        {children}
                    </CardContent>
                </Card>
                }
            </div>
        </div>
    );
};

export default Section;