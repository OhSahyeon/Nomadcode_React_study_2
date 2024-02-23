import { func } from "prop-types";
import styles from "./App.module.css";
import Button from "./Button";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("나 여깄어!");
    return () => console.log("근데 이제 갈거야! 뿅!");
  }, []);
  return <h1>Hello!</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div className="App">
      {showing ? <Hello /> : null}
      <Button text={showing ? "Hide" : "Show"} onClick={onClick} />
    </div>
  );
}

export default App;
