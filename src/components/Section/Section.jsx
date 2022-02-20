import React from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './Section.css';

const Section = ({title, children, className, viewMore}) => {

  return (
    <>
      <hr/>
      <div className={`section__container ${className}`}>
        <div className="section__header">
          <h1 className="section__title">{title}</h1>
          {viewMore && <a className="viewMore" href="/#">
            <div className="section__viewMore">
              <h2>View More</h2>
              <ArrowForwardIosOutlinedIcon className="section__viewMoreIcon"/>
            </div>
          </a>}
        </div>
        <div className="section__body">
          {children.length && children.map((child) => {
            return <div className="section__content">
              {child}
            </div>
          })}
          {!children.length &&
            <div className="section__content">
              {children}
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Section;