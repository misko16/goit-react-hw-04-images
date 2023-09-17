import React, { useState } from "react";

const SearchBar = ({onSearch}) => {

const[inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
    setInputValue("");
    };

    return (
      <header className="searchBar">
        <form className="form" onSubmit={handleSubmit}>


          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={inputValue}
          />
        </form>
      </header>
    );
  };

export default SearchBar;