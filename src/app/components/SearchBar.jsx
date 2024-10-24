import React from 'react';

//icons
import SearchIcon from "@mui/icons-material/Search";


function SearchBar(props) {
    return (
        <div className="flex items-center rounded shadow">
            <input className="w-[100%] h-[39px] p-2 rounded-s text-secondary bg-input-bg" type="text" placeholder="Search"/>
            <button className="text-secondary h-[39px] w-14 rounded-e bg-input-bg"><SearchIcon/></button>
        </div>
    );
}

export default SearchBar;