import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((count) => count + 1);

  return (
    <div>
      <h1>Module federation host app</h1>
      <div>
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </div>
  );
}

export default App;
