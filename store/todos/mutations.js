const todoMutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
    const pageCount = (state.pagination.total =
      todos.length / state.pagination.perPage);
    state.visible = todos.slice(
      0,
      state.pagination.perPage * state.pagination.active
    );
  },
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  editTodo: (state, todo) => {
    const index = state.todos.findIndex(todoItem => todoItem.id === todo.id);
    state.todos.splice(index, 1, todo);
  },
  saveTodo: (state, todo) => {
    state.todos.unshift(todo);
    state.loading = false;
  },
  controlLoader: (state, isLoading) => {
    state.loading = isLoading;
  },
  changePage: (state, page) => {
    console.log(page);
    state.pagination.active = page;
    state.visible = state.todos.slice(
      (page - 1) * state.pagination.perPage,
      state.pagination.perPage * page
    );
  }
};

export default todoMutations;
