/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { injectSpeedInsights } from "@vercel/speed-insights";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

render(
  () => (
    <>
      {injectSpeedInsights}
      <Router>
        <App />
      </Router>
    </>
  ),
  root
);
