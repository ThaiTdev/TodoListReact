import { useState } from "react";
import Button from "./Button";

function EditTodo({ todo, editTodo, cancelTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleStart(e) {
    //j'enregistre les valeur de input  dans mon objet todo en appuyant sur start
    console.log(e);
    if (e.code === "Enter") {
      // si value existe
      if (value.length) {
        // je passe sa valeur en paramètre de ma fonction addTodo récupéré en props
        editTodo(value);
        // je repasse la valeur de mon input à vide
        setValue("");
      }
    }
  }
  //je passe la valeur de mon input à la variable d'état inputValue
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  //j'enregistre les valeur de input dans mon objet todo en appuyant sur Ajouter
  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }

  function handleCancel(id) {
    cancelTodo(id);
  }

  return (
    <div className="d-flex flex-row  justify-content-center align-items-center mb-20 ">
      <input
        //je recupére la touche sur laquelle j'appuye
        onKeyDown={handleStart}
        //je récupére la valeur de mon input
        onChange={handleChange}
        //je bind  la valeur de mon input a l'attribut value
        value={value}
        type="text"
        placeholder="ajouter une todo"
        className="mr-15 flex-fill"
      />
      <Button
        className="mr-15"
        text="cancel"
        onClick={() => handleCancel(todo.id)}
      />
      <Button text="update" onClick={handleClick} />
    </div>
  );
}
export default EditTodo;
