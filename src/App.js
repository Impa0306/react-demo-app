//import logo from './logo.svg';
import "./App.css";
import Home from "./Components/Home";
import Parent from "./Components/Parent";
//import CharCounter from './Components/CharCounter';
import MovieList from "./Components/MovieList";
import Login from "./Components/SignIn/Login";
import Register from "./Components/SignIn/Register";
import Dashboard from "./Components/SignIn/Dashboard";
import NotFound from "./Components/SignIn/NotFound";
import Lifecycle from "./Components/LifeCycle";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CheckBox from "./Components/controls/CheckBox";
import { useState } from "react";

// const title = "Movie List";

function App() {
  const [checked, setChecked] = useState(false);

  const handleCheckBox = () => {
    setChecked(!checked);
  };

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/lifecycle">
          <Lifecycle />
        </Route>
        <Route path="/parent">
          <Parent />
        </Route>
        <Route path="/movie">
          <MovieList />
        </Route>
        {/* <Route path="/charcounter">
            <CharCounter />
          </Route> */}
        <Route path="/controls">
          <CheckBox checked={checked} onChange={handleCheckBox} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard increment={1} />
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>

    // <div className="container">
    //   <Home />
    //   <nav>
    //     <MovieList />
    //   </nav>
    //   <CharCounter />

    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
