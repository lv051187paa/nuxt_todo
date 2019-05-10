const state = () => ({
  todos: [],
  loading: false,
});

const getters = {
  allTodos: state => state.todos,
  isLoadingTask: state => state.loading
};

const actions = {
  async fetchTodos ({commit}) {
    const response = await this.$axios.get( '/todos' );
    commit('setTodos', response.data);
  },
  async deleteTodo({commit}, id) {
    await this.$axios.delete( `/todos/${id}` );
    commit('deleteTodo', id);
  },
  async editTodo({commit}, todo) {
    const response = await this.$axios.patch( `/todos/${todo.id}`, {...todo} );
    commit('editTodo', response.data);
  },
  async storeTodo({commit}, title) {
    const response = await this.$axios.post( '/todos', {title, completed: false} );
    commit('saveTodo', response.data);
  },
  async toggletLoader({commit}, isLoading) {
    commit('controlLoader', isLoading);
  },
  saveTodo({dispatch, commit}, title) {
    return dispatch('toggletLoader', true).then(dispatch('storeTodo', title))
  }


};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  editTodo: (state, todo) => {
    const index = state.todos.findIndex(todoItem => todoItem.id === todo.id);
    state.todos.splice(index, 1, todo)
  },
  saveTodo: (state, todo) => {
    state.todos.unshift(todo)
  },
  controlLoader: (state, isLoading) => {
    state.loading = isLoading;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
