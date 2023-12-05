import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  return <div className='text-3xl'>Hello World</div>;
}

export default App;
