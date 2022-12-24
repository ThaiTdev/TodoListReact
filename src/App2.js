import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoListe from "./components/TodoList";
import ThemeContext from "./context/Theme";
import TodoReducer from "./reducers/TodoReducer";
// import Test from "./components/Test";

function App() {
  const [state, dispatch] = useReducer(TodoReducer, {
    theme: "primary",
    todoList: [],
  });

  function addTodo(content) {
    dispatch({
      type: "ADD_TODO",
      content,
    });
  }

  function selectTodo(id) {
    dispatch({ type: "SELECT_TODO", id });
  }

  function deleteTodo(id) {
    dispatch({ type: "DELETE_TODO", id });
  }

  function ajoutNumber1(id) {
    dispatch({ type: "NUMBER_TODO", id });
  }

  function toggleValidate(id) {
    dispatch({ type: "TOGGLE_TODO", id });
  }

  function toggleEdit(id) {
    dispatch({ type: "TOGGLE_EDIT_TODO", id });
  }

  function editTodo(id, content) {
    dispatch({ type: "EDIT_TODO", id, content });
  }

  function handleChange(e) {
    dispatch({ type: "SET_THEME", theme: e.target.value });
  }

  return (
    <ThemeContext.Provider value={state.theme}>
      <div className="d-flex flex-row justify-content-center align-items-center p-20 ">
        <div className="card container p-20">
          <h1 className="d-flex flex-row justify-content-center align-items-center mb-20">
            <span className="flex-fill">Todo list</span>
            <select value={state.theme} onChange={handleChange}>
              <option value="primary">red</option>
              <option value="secondary">blue</option>
            </select>
          </h1>
          <AddTodo addTodo={addTodo} />
          {/* <Test addTodo={addTodo} /> */}
          <TodoListe
            todoList={state.todoList}
            deleteTodo={deleteTodo}
            toggleValidate={toggleValidate}
            toggleEdit={toggleEdit}
            ajoutNumber1={ajoutNumber1}
            editTodo={editTodo}
            selectTodo={selectTodo}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
