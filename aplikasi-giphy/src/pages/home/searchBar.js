import React, { useState, useContext, useEffect } from "react";

import { Auth } from "../../Auth/Auth";

import GifCard from "../../components/gif/gif";
import Search from "../../components/search/search";
import SearchContext from "../../contex/searchContex";

import "./index.css";

export const Index = () => {
  const defaultKeyword = useContext(SearchContext);

  const [search, setSearch] = useState(defaultKeyword);
  const [results, setResult] = useState([]);

  useEffect(() => {
    Auth(defaultKeyword).then((Gif) => {
      setResult(Gif);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getResult = () => {
    Auth(search).then((res) => setResult(res));
  };

  // const data = Object.values(results).map((gif) => (
  //   <GifCard id={gif.id} images={gif.images.original.url} title={gif.title} />
  // ));

  const handleSubmit = (e) => {
    e.preventDefault();
    getResult();
  };

  return (
    <div className="container">
      <div className="top-form">
        <Search onSubmit={handleSubmit} onChange={handleChange} />
      </div>
      <GifCard data={results} />
    </div>
  );
};
