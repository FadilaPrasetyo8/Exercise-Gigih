import React, { useState } from "react";
import axios from "axios";

export default function IndexF() {
  const [value, setValue] = useState("");
  const [gift, setGift] = useState([]);

  const handleValue = (e) => setValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(`http://api.giphy.com/v1/gifs/search?`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        params: {
          q: value,
          api_key: `${process.env.REACT_APP_GIPHYKEY}`,
          limit: 10,
        },
      })
      .then((res) => setGift(res.data.data));
  };

  const data = gift.map((gift) => (
    <div className="cards">
      <figure key={gift.id}>
        <img src={gift.images.original.url} />
        <figcaption>{gift.title}</figcaption>
      </figure>
    </div>
  ));

  return (
    <div className="container">
      <div className="top-form">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="input"
            onChange={handleValue}
            placeholder="Search Gif.."
          />
          <button className="btn-submit">Search</button>
        </form>
      </div>
      {data}
    </div>
  );

  // return (
  //   <div className="container">
  //     <div className="top-form">
  //       <form className="form" onSubmit={this.handleSubmit}>
  //         <input type="text" id="input" />
  //         <button className="btn-submit">Search</button>
  //       </form>
  //     </div>
  //     {this.state.results.map((gif) => {
  //       return (
  //         <div className="cards">
  //           <figure key={gif.id}>
  //             <img src={gif.images.original.url} />
  //             <figcaption>{gif.title}</figcaption>
  //           </figure>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}
