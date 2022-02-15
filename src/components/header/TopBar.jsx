import React from 'react';
import './TopBar.css';
import TopBarItem from "./TopBarItem";
import SearchForm from "./SearchForm";


const TopBar = () => {

    const options = [{title: 'Link1', link: '/#',}, {title: 'Link2', link: '/#',}, {title: 'Link3', link: '/#',}];

    return (
        <div className="topBar">
            <TopBarItem className="topBar__item" title={"Emirates"} options={options}/>
            <TopBarItem className="topBar__item" title={"Mainland"} options={options}/>
            <TopBarItem className="topBar__item" title={"No. of Visa"} options={options}/>
            <TopBarItem className="topBar__item" title={"No. of Activities"} options={options}/>
            <TopBarItem className="topBar__item" title={"Licence Type"} options={options}/>
            <SearchForm/>
        </div>
    );
};

export default TopBar;