import React from "react";
import gif from "../data/data.js";
import data from "../data/data.js";

export default function Gift(props) {
  const Databaru = data
    .filter((data) => data.rating == "pg")
    .map((filterData) => (
      <figure key={filterData.id}>
        <img src={filterData.url} />
        <figcaption>{filterData.title}</figcaption>
      </figure>
    ));

  return (
    <div>
      <div className="images">
        <img src={props.data[0].url} />
        <p>{props.data[0].title}</p>
      </div>
    </div>
  );
}
