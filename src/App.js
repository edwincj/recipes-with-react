import { createContext, useState } from "react";

import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Using class components
      <Counter initialCount={0} />
      Using functional components
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme((prev) => {
            return prev === "red" ? "blue" : "red";
          })
        }
      >
        Toggle
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
