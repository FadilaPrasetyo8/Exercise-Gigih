import React from "react";

const GifCard = ({ id, images, title }) => {
  return (
    <div className="cards">
      <figure key={id}>
        <img src={images} />
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  );
};

export default GifCard;
