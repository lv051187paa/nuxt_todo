const state = () => ({
  todos: [],
  visible: [],
  loading: false,
  pagination: {
    total: 1,
    active: 1,
    perPage: 10
  }
});

const getters = {
  allTodos: state => state.todos,
  todos: state => state.visible,
  isLoadingTask: state => state.loading,
  getPagination: state => state.pagination
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
  async storeTodo({commit}, {title, fn}) {
    commit('controlLoader', true);
    const response = await this.$axios.post( '/todos', {title, completed: false} );
    commit('saveTodo', response.data);
    fn()
  },
  async toggletLoader({commit}, isLoading) {
    commit('controlLoader', isLoading);
  },
  changePage({commit}, page){
    commit('changePage', page)
  },
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
    const pageCount =
    state.pagination.total = todos.length / state.pagination.perPage;
    state.visible = todos.slice(0, state.pagination.perPage * state.pagination.active)
  },
  deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  editTodo: (state, todo) => {
    const index = state.todos.findIndex(todoItem => todoItem.id === todo.id);
    state.todos.splice(index, 1, todo)
  },
  saveTodo: (state, todo) => {
    state.todos.unshift(todo);
    state.loading = false;
  },
  controlLoader: (state, isLoading) => {
    state.loading = isLoading;
  },
  changePage: (state, page) => {
    console.log(page)
    state.pagination.active = page
    state.visible = state.todos.slice((page - 1) * state.pagination.perPage, state.pagination.perPage * page)
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
