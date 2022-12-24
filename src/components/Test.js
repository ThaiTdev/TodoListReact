import { useState } from "react";

function Test({ addTodo }) {
  const [value, setValue] = useState("");
  function handleOnChange(e) {
    const valueInput = e.target.value;
    setValue(valueInput);
    console.log(value);
  }
  function handleOnKeyDown(e) {
    if (e.code === "Enter") {
      if (value.length) {
        addTodo(value);
        setValue("");
      }
    }
  }

  function handleOnClick() {
    if (value.length) {
      addTodo(value);
      setValue("");
    }
  }
  return (
    <div className="d-flex flex-row ">
      <input
        value={value}
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChange}
        className="flex-fill"
        type="text"
        placeholder="here"
      />
      <button onClick={handleOnClick} className="btn btn-primary">
        cliquez pour ajouter
      </button>
    </div>
  );
}

export default Test;
