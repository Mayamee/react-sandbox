import { useMemo, useState, useCallback, useId } from "react";
import "./App.css";
import ListItem from "./components/ListItem";

const getList = (n, t) => new Array(n).fill().map((_, i) => `${t}-${i + 1}`);

const saturation = (min, max, value) => {
  return Math.min(Math.max(value, min), max);
};

const App = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState(false);
  const ID_01 = useId();
	const ID_02 = useId();
	const ID_03 = useId();
  const listContent = useMemo(() => getList(count, text), [count, text]);
  // на каждый рендер не срабатывает, только при изменении count или text

  const clickHandler = useCallback((e) => {
    console.log(`Clicked on ${e.target.innerText}`);
  }, []);
  // инициализируется только при первом рендере или добавлении нового элемента в массив

  const themeStyle = {
    backgroundColor: mode ? "black" : "white",
    color: mode ? "white" : "black",
  };

  return (
    <div className="App">
      <button onClick={() => setMode((prev) => !prev)}>Toggle Theme</button>
      <button
        onClick={() => {
          setText("");
          setCount(0);
        }}
      >
        Clear List
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(saturation(0, 500, +e.target.value))}
      />
      <div className="id">{ID_01}-{ID_02}-{ID_03}</div>
      <ul className="list" style={themeStyle}>
        {listContent.map((item) => (
          <ListItem key={item} text={item} onClick={clickHandler} />
        ))}
      </ul>
    </div>
  );
};
export default App;
