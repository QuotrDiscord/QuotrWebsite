/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Router, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

import { Navbar } from "./components/Navbar/Navbar";

const root = document.getElementById("root");

const App = lazy(() => import("./App"));

render(
  () => (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} component={App} />
        <Route path={"/dash"} component={App} />
        <Route path={"/docs"} component={App} />
        <Route path={"/about"} component={App} />
      </Routes>
    </Router>
  ),
  root
);
