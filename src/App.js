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

  useEffect(() => console.log(toDos), [toDos]);
  useEffect(() =>
    console.log(toDos.map((item, index) => <li key={index}>{item}</li>))
  );

  return (
    <div className="App">
      <form>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <h1>List({toDos.length})</h1>
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
