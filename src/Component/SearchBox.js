import React from "react";

const SearchBox = ({ searchText, setSearchText, onSubmit }) => {
    return (
        <div className="bg-pink-50 pl-10 pb-4 mb-2">
            <input
                type="text"
                value={searchText}
                placeholder="Enter the key"
                className="rounded-md border-solid border-2 border-black"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="button" onClick={onSubmit} className="ml-4 px-2 bg-purple-700 text-white rounded-md hover:bg-purple-500">
                Submit
            </button>
        </div>
    );
};

export default SearchBox;
