import React from "react";

const GifCard = ({ data }) => {
  return Object.values(data).map((gif) => (
    <figure key={gif.id}>
      <img src={gif.images.fixed_width.url} alt="Result" />
      <figcaption className="gif-title">{gif.title}</figcaption>
    </figure>
  ));
};

export default GifCard;
