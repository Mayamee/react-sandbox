import { useTransition } from "react";
import { useState } from "react";
import "./App.css";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
  const [text, setText] = useState("");
  const [listArray, setListArray] = useState([]);
  const [isPending, startTransition] = useTransition();
  const handleInput = (e) => {
    setText(e.target.value);
		// set low code here
    startTransition(() => {
			const l = [];
      for (let i = 0; i < 10000; i++) {
				l.push(e.target.value);
			}
			setListArray(l);
    });
		// set low priority code here
  };

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleInput} />
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {isPending && (
          <div
            className="spinner"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <Spinner />
          </div>
        )}
        {!isPending && listArray.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};
export default App;
