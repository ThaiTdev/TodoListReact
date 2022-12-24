import TodoItems from "./TodoItems";
import EditTodo from "./EditTodo";

function TodoListe({
  todoList,
  deleteTodo,
  toggleEdit,
  toggleValidate,
  ajoutNumber1,
  editTodo,
  selectTodo,
}) {
  const todoSort = todoList.sort((a, b) => a.content.localeCompare(b.content));
  return TodoListe.length ? (
    <ul>
      {todoSort.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            editTodo={(content) => editTodo(todo.id, content)}
            cancelTodo={toggleEdit}
          />
        ) : (
          <TodoItems
            key={todo.id}
            todo={todo}
            toggleValidate={() => toggleValidate(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleEdit={() => toggleEdit(todo.id)}
            ajoutNumber1={() => ajoutNumber1(todo.id)}
            selectTodo={() => selectTodo(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>'aucune liste pour le moment'</p>
  );
}
export default TodoListe;
