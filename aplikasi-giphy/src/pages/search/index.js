import React, { Component } from "react";

export class Cari extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      results: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }
  //   _ubahNama = () => this.setState({ nama: "Ani", umur: 18 });
  //   _ubahNama2 = (namaBaru) => this.setState({ nama: namaBaru });
  //   _ubahUmur = (umurBaru) => this.setState({ umur: parseInt(umurBaru) });

  render() {
    return (
      //   <div>
      //     <div>State props</div>
      //     <div>{this.state.nama}</div>
      //     <div>{this.state.umur}</div>

      //     <input type="button" onClick={this._ubahNama} value="UBAH" />
      //     <br />
      //     <input
      //       type="text"
      //       onBlur={(event) => this._ubahNama2(event.target.value)}
      //     />

      //     <br />
      //     <input
      //       type="number"
      //       onBlur={(event) => this._ubahUmur(event.target.value)}
      //     />
      //   </div>

      <div>
        <form>
          <input type="text" onChange={this.handleChange} />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Cari;
