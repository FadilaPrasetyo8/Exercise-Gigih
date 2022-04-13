import { authTrending } from "../../Auth/Auth";

import GifCard from "../../components/gif/gif";

import React, { useState, useEffect } from "react";

import "./trending.css";

const Trending = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    authTrending().then((gif) => {
      setResult(gif);
    });
  }, []);

  return (
    <div className="trending">
      <header>
        <h1>Trending</h1>
        <div className="trending-giphy">
          <GifCard data={result} />
        </div>
      </header>
    </div>
  );
};

export default Trending;
