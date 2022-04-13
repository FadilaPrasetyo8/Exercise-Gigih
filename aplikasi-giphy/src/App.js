import React, { useState, useMemo } from "react";
import SearchContext from "./contex/searchContex";

import Nav from "./components/navigasi/router";

const App = () => {
  const [keyword, setKeyword] = useState("naruto");
  const value = useMemo(() => ({ keyword, setKeyword }), [keyword]);
  return (
    <SearchContext.Provider value={"value"}>
      <Nav />
    </SearchContext.Provider>
  );
};

export default App;
