import { createSignal } from "solid-js";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./components/pages/home/HomePage";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div className="flex flex-col min-h-screen">
      <HomePage />
    </div>
  );
}

export default App;
