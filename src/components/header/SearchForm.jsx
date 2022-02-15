import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchForm.css';

const SearchForm = () => {
    return (
        <div className="search">
            <SearchIcon className="search__icon" fontSize="large"/>
        </div>
    );
};

export default SearchForm;