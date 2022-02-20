import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import './SearchForm.scss';

const SearchForm = () => {

  const [open, setOpen] = useState(false);

  return (
    open ? <><input type="text" className="inputForm"/> <CancelIcon onClick={() => {
      setOpen(false)
    }} className="cancel_icon"/></> : <div className="search">
      <SearchIcon className="icon" fontSize="large" onClick={() => {
        setOpen(true);
      }}/>
    </div>
  );
};

export default SearchForm;