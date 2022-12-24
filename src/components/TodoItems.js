import Button from "./Button";
import styles from "./TodoItem.module.scss";

function TodoItems({
  todo,
  deleteTodo,
  toggleValidate,
  toggleEdit,
  ajoutNumber1,
  selectTodo,
}) {
  // function handleOnClikDelete(id) {
  //   deleteTodo(id);
  // }

  return (
    <li
      onClick={selectTodo}
      className={`d-flex flex-row justify-content-center align-items-center p-10 mb-10 ${
        styles.todoItem
      }  ${todo.selected ? styles.todoSelect : ""}`}
    >
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "(✔)"} {todo.number && "(1)"}
      </span>
      <Button
        className="mr-15"
        text="valider"
        onClick={(e) => {
          e.stopPropagation();
          toggleValidate();
        }}
      />
      <Button
        className="mr-15"
        text="number1"
        onClick={(e) => {
          e.stopPropagation();
          ajoutNumber1();
        }}
      />
      <Button
        className="mr-15"
        text="Modifier"
        onClick={(e) => {
          e.stopPropagation();
          toggleEdit();
        }}
      />
      <Button
        text="supprimer"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
      />
    </li>
  );
}
export default TodoItems;
