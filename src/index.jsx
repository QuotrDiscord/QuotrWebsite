/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Router, Route, Routes } from "@solidjs/router";

import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/home/HomePage";

const root = document.getElementById("root");

render(
  () => (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} component={HomePage} />
          <Route path={"/dash"} component={HomePage} />
          <Route path={"/docs"} component={HomePage} />
          <Route path={"/about"} component={HomePage} />
        </Routes>
      </Router>
    </div>
  ),
  root
);
