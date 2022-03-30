import logo from "./logo.svg";
import "./App.css";
import Giphy from "./pages/home/index.js";
import { Cari } from "./pages/search";
import IndexF from "./pages/search/indexF";

function App() {
  return (
    <div>
      {/* <Cari /> */}
      <IndexF />
    </div>
  );
}

export default App;
