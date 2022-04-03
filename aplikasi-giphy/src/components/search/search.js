import React from "react";

const Search = ({ onSubmit, onChange }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        id="input"
        onChange={onChange}
        placeholder="Search Gif.."
      />
      <button className="btn-submit">Search</button>
    </form>
  );
};

export default Search;
