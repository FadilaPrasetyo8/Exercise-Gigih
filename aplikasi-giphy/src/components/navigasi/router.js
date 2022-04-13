import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./router.css";

import Trending from "../../pages/home/trending";
import { Index } from "../../pages/home/searchBar";

const Nav = () => {
  return (
    <Router>
      <nav className="router">
        <ul>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/trending-giphy">Trending</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/trending-giphy">
          <Trending />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
