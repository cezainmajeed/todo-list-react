import React from "react";

function TodoItem(props) {
  const [flag, setFlag] = React.useState(false);
  function addLine() {
    setFlag((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={addLine}
      style={{ textDecoration: flag ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
