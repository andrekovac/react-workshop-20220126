import { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import BooksScreen from "./screens/BooksScreen";
import PlaygroundScreen from "./screens/PlaygroundScreen";
import { StoreT } from "./store";
import CounterScreen from "./screens/CounterScreen";

const App: FC = () => {
  const count = useSelector<StoreT>((state) => state.countReduxToolkit);

  return (
    <>
      <nav>
        <NavLink exact strict activeClassName="activeLink" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="activeLink" to="/playground/">
          Playground
        </NavLink>
        <NavLink activeClassName="activeLink" to="/counter">
          Counter
        </NavLink>
        <NavLink activeClassName="activeLink" to="/books">
          Books
        </NavLink>
      </nav>

      <main>
        <h3>Aktueller count: {count}</h3>

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
          <Route path="/counter">
            <CounterScreen />
          </Route>
          <Route>
            <div>404 Fehler!</div>
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
