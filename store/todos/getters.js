const todoGetters = {
    allTodos: state => state.todos,
    todos: state => state.visible,
    isLoadingTask: state => state.loading,
    getPagination: state => state.pagination
  };

  export default todoGetters;