function TestReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: crypto.randomUUID(),
            content: action.content,
            done: false,
            edit: false,
            number: false,
            selected: false,
          },
        ],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };

    case "TOGGLE_VALIDE_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, edit: !todo.edit } : todo
        ),
      };
    case "NUMBER_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, number: !todo.number } : todo
        ),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id
            ? { ...todo, content: action.content, edit: false }
            : todo
        ),
      };
    case "SELECT_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id
            ? { ...todo, selected: true }
            : { ...todo, selected: false }
        ),
      };
    case "UPDATE_THEME":
      return {
        ...state,
        theme: action.theme,
      };

    default:
      throw new Error("function invalide");
  }
}
export default TestReducer;
