function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
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
    }
    case "SELECT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id === action.id
            ? { ...t, selected: true }
            : { ...t, selected: false }
        ),
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.id),
      };
    }
    case "NUMBER_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id ? t : { ...t, number: !t.number }
        ),
      };
    }

    case "TOGGLE_EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id === action.id ? { ...t, edit: !t.edit } : t
        ),
      };
    }

    case "TOGGLE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id === action.id ? { ...t, done: !t.done } : t
        ),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id === action.id
            ? { ...t, content: action.content, edit: false }
            : t
        ),
      };
    }
    case "SET_THEME": {
      return { ...state, theme: action.theme };
    }
    default: {
      throw new Error("action inconnue");
    }
  }
}

export default TodoReducer;
