import { Route, Routes } from "@solidjs/router";
import { Show, createSignal } from "solid-js";

import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/errors/NotFoundPage";
import { UnauthorizedPage } from "./pages/errors/UnauthorizedPage";
import { DocumentationPage } from "./pages/DocumentationPage";

function App() {
  const [userId, setUserId] = createSignal("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userId={userId()} />
      <Routes>
        <Route path={"/"} component={HomePage} />
        <Show
          when={userId() !== ""}
          fallback={<Route path={"/dash"} component={UnauthorizedPage} />}
        >
          <Route path={"/dash"} component={HomePage} />;
        </Show>
        <Route path={"/docs"}>
          <Route path={"/s/:query"} component={DocumentationPage} />
          <Route path={"/"} component={DocumentationPage} />
        </Route>
        <Route path={"/about"} component={HomePage} />
        <Route path={"*"} component={NotFoundPage} />
      </Routes>
    </div>
  );
}

export default App;
