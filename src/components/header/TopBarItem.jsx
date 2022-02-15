import React from 'react';
import './TopBarItem.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TopBarItem = ({title, options}) => {

    return (
        <div className="searchBarItem">
            <div className="searchBarItem__dropdown">
                <button className="searchBarItem__dropdownButton">{title}<KeyboardArrowDownIcon fontSize="large"/>
                </button>
                <div className="searchBarItem__dropdownContent">
                    {options && options.map((option) => {
                        return (<a href={option.link}>{option.title}</a>);
                    })}
                </div>
            </div>
        </div>
    );
};

export default TopBarItem;