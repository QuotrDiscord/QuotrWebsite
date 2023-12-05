import { createSignal } from "solid-js";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <Navbar />
      <div className='h-screen bg-black' />
    </>
  );
}

export default App;
