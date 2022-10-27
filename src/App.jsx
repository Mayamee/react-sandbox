import { useEffect } from "react";
import { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const doubleNumber = useMemo(() => slow(number), [number]);

  const themeStyles = useMemo(
    () => ({
      backgroundColor: darkMode ? "#333" : "#CCC",
      color: darkMode ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
    }),
    [darkMode]
  );

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div className="App">
      <h1>My App</h1>
      <div className="box" style={themeStyles}>
        <input
          type="number"
          value={number}
          placeholder="some text"
          onChange={handleChange}
        />
        <div
          className="result"
          style={{
            display: "inline-block",
          }}
        >
          Result is: {doubleNumber}
        </div>

        <button
          style={{
            display: "block",
            marginTop: "1rem",
          }}
          onClick={() => setDarkMode((prevMode) => !prevMode)}
        >
          Toggle Mode
        </button>
      </div>
    </div>
  );
};
export default App;

function slow(number) {
  console.log("Calling slow function");
  for (let i = 0; i < 2; i++) for (let i = 0; i <= 5e8; i++) {}
  return number * 2;
}
