import React, { Component } from "react";
import data from "../../components/data/data";
import Gift from "../../components/gift/gift";
import "./indexCari.css";

export class Cari extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      results: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const x = document.getElementById("input").value;
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${x}&api_key=${process.env.REACT_APP_GIPHYKEY}&limit=10`
    )
      .then((response) => response.json())
      .then(({ data }) => {
        this.setState({ results: data });
      });
  }

  componentDidMount() {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=cat&api_key=${process.env.REACT_APP_GIPHYKEY}&limit=10`
    )
      .then((response) => response.json())
      .then(({ data }) => {
        this.setState({ results: data });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="top-form">
          <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" id="input" />
            <button className="btn-submit">Search</button>
          </form>
        </div>

        {this.state.results.map((gif) => {
          return (
            <div className="cards" key={gif.id}>
              <figure>
                <img src={gif.images.original.url} />
                <figcaption>{gif.title}</figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cari;
