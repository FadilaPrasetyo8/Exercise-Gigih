import React, { useState } from "react";

import { Auth } from "../../Auth/Auth";

import GifCard from "../../components/gift/gift";
import Search from "../../components/search/search";

import "./index.css";

export const Index = () => {
  const [search, setSearch] = useState("");
  const [results, setResult] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getResult = () => {
    Auth(search).then((res) => setResult(res.data));
  };

  const data = Object.values(results).map((gif) => (
    <GifCard id={gif.id} images={gif.images.original.url} title={gif.title} />
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    getResult();
  };

  return (
    <div className="container">
      <div className="top-form">
        <Search onSubmit={handleSubmit} onChange={handleChange} />
      </div>
      {data}
    </div>
  );
};
