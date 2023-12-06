import { Router, Route, Routes } from "@solidjs/router";

import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/HomePage";
import { Show, createSignal } from "solid-js";

function App() {
  const [userId, setUserId] = createSignal("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userIdGetter={userId} />
      <Routes>
        <Route path={"/"} component={HomePage} />
        <Show when={userId() !== ""}>
          <Route path={"/dash"} component={HomePage} />;
        </Show>
        <Route path={"/docs"} component={HomePage} />
        <Route path={"/about"} component={HomePage} />
      </Routes>
    </div>
  );
}

export default App;
