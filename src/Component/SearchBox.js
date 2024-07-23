import React from "react";

const SearchBox = ({ searchText, setSearchText, onSubmit }) => {
    return (
        <div className="search-box">
            <input
                type="text"
                value={searchText}
                placeholder="Enter the key"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="button" onClick={onSubmit}>
                Submit
            </button>
        </div>
    );
};

export default SearchBox;
