import React from "react";
import TodoItem from "./TodoItem";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    const newInput = event.target.value;
    setInputText(newInput);
  }
  function add() {
    setItems((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <TodoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
