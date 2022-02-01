import { FC } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";

import BooksScreen from "./screens/BooksScreen";
import PlaygroundScreen from "./screens/PlaygroundScreen";

const App: FC = () => {
  return (
    <div style={{ padding: 10 }}>
      <nav
        style={{ borderWidth: 2, borderColor: "black", borderStyle: "solid" }}
      >
        <p>
          <Link to="/books">Books</Link>
        </p>
        <p>
          <Link to="/playground/">Playground</Link>
        </p>
        <p>
          <Link to="/counter">Counter</Link>
        </p>
      </nav>

      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home">
          <div>Home Screen</div>
        </Route>
        <Route strict path="/playground/">
          <PlaygroundScreen />
        </Route>
        <Route path="/books">
          <BooksScreen />
        </Route>
        <Route path="/counter/:start/:step">
          <Counter />
        </Route>
        <Route>
          <div>404 Fehler!</div>
        </Route>
      </Switch>

      <div>Counter 2</div>

      <Switch>
        <Route path="/counter/123">
          <Counter />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
