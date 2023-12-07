import { Route, Routes } from "@solidjs/router";
import { Show, createSignal } from "solid-js";

import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/errors/NotFoundPage";
import { UnauthorizedPage } from "./pages/errors/UnauthorizedPage";
import { DocumentationPage } from "./pages/DocumentationPage";

function App() {
  const [userId, setUserId] = createSignal("");

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route
          path={"/"}
          data={userId}
          component={<HomePage userId={userId()} />}
        />
        <Show
          when={userId() !== ""}
          fallback={<Route path={"/dash"} component={UnauthorizedPage} />}
        >
          <Route path={"/dash"} component={HomePage} />;
        </Show>
        <Route path={"/docs"} component={DocumentationPage} />
        <Route path={"/about"} component={HomePage} />
        <Route path={"*"} component={NotFoundPage} />
      </Routes>
    </div>
  );
}

export default App;
