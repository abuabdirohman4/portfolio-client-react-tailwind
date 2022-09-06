import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-lg rounded-lg border-t border-gray-600 bg-gray-800 p-6 shadow">
        <h4 className="text-2xl text-white">Hello React</h4>
        <div className="flex justify-center">
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="" alt="React logo" />
          </a>
        </div>
        <button onClick={() => setCount((count) => count + 1)} className="text-gray-400">
          count is {count}
        </button>
        <p className="text-lg leading-relaxed text-gray-400">
          A JavaScript library for building user interfaces
        </p>
      </div>
    </div>
  );
}

export default App;
