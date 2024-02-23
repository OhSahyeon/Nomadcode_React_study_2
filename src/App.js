import styles from "./App.module.css";
import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);

  console.log(
    "아..... 그만.... 하고... 싶어..... 제...,.. 바라라라ㅏ라배랍라ㅑ밷ㄺㄷ8ㅑㅓ9ㅛㄷ모ㅔ랴9 ㅗ ㅔㄷㄱ려ㅑㅗ0 ㄷ로0ㅡㅓㅕ 뎌"
  );

  useEffect(() => console.log("I Run Only Once!"), []);

  return (
    <div className="App">
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me!" onClick={onClick} />
    </div>
  );
}

export default App;
