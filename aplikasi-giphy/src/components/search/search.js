import React from "react";
import gif from "../data/data.js";

export default function Search(props) {
  return (
    <div>
      <div className="input">
        <input placeholder="Giphy" type="text" />
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
}
