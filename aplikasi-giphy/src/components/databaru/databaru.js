import React from "react";
import data from "../data/data";
import "./databaru.css";

export default function Baru() {
  const Databaru = data
    .filter((data) => data.rating == "pg")
    .map((filterData) => (
      <figure key={filterData.id}>
        <img src={filterData.url} />
        <figcaption>{filterData.title}</figcaption>
      </figure>
    ));

  return <div className="cards">{Databaru}</div>;
}
