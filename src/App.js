import { func } from "prop-types";
import styles from "./App.module.css";
import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    } else {
      setToDos((current) => [toDo, ...current]);
      setToDo("");
    }
  };
  console.log(toDo);
  useEffect(() => console.log(toDos), [toDos]);
  return (
    <div className="App">
      <form>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <h1>
          {toDos}({toDos.length})
        </h1>
        <button onClick={onSubmit}>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
