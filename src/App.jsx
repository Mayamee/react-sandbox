import "./App.css";
import { createContext } from "react";
import Component from "./components/Component";
import { ThemeProvider } from "./hooks/ThemeContext";
export const ThemeContext = createContext();

function App() {
  return (
    <>
      <ThemeProvider>
        <Component />
      </ThemeProvider>
    </>
  );
}

export default App;

// useEffect(() => {
//   window.addEventListener("keyup", (e) => {
//     if (e.key === "t") {
//       toggleTheme();
//     }
//   });
//   return () => {
//     window.removeEventListener("keydown", (e) => {
//       if (e.key === "t") {
//         toggleTheme();
//       }
//     });
//   };
// }, []);
