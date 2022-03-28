import React from "react";
import Search from "../../components/search/search";
import "./index.css";
import Baru from "../../components/databaru/databaru";

export default function Giphy(props) {
  // const [input, setInput] = useState();
  // const [value, setValue] = useState();

  // const handleCharge = (e) => {
  //   setInput(e.target.value);
  // };

  // const handleClick = () => setValue(input);

  // const Databaru = data
  //   .filter((data) => data.rating == "pg")
  //   .map((filterData) => (
  //     <figure key={filterData.id}>
  //       <img src={filterData.url} />
  //       <figcaption>{filterData.title}</figcaption>
  //     </figure>
  //   ));

  return (
    <div>
      <Search />
      <Baru />
    </div>
  );
}
