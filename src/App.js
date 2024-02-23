import styles from "./App.module.css";
import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyWord, setKeyWord] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => {
    setKeyWord(e.target.value);
  };

  // 검색할때만 실행
  useEffect(() => {
    if (keyWord !== "") {
      console.log("SEARCH FOR", keyWord);
    }
  }, [keyWord]);

  // 버튼 눌룰때만 실행
  useEffect(() => console.log("SEARCH FOR", counter), [counter]);

  return (
    <div className="App">
      <input
        value={keyWord}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me!" onClick={onClick} />
    </div>
  );
}

export default App;
