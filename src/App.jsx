import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const renderCount = useRef(0);
  const prevName = useRef("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    prevName.current = text;
  }, [text]);

  return (
    <div>
      <input
        type="text"
        name="name"
        id="id"
        value={text}
        onChange={handleChange}
      />
      <h1>{text}</h1>
      <h2>Rendered: {renderCount.current} times</h2>
      <h3>
        My text is {text} and it used to be {prevName.current}
      </h3>
    </div>
  );
};

export default App;
