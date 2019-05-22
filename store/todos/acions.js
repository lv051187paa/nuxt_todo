const todoActions = {
    async fetchTodos({ commit }) {
      const response = await this.$axios.get("/todos");
      commit("setTodos", response.data);
    },
    async deleteTodo({ commit }, id) {
      await this.$axios.delete(`/todos/${id}`);
      commit("deleteTodo", id);
    },
    async editTodo({ commit }, todo) {
      const response = await this.$axios.patch(`/todos/${todo.id}`, {
        ...todo
      });
      commit("editTodo", response.data);
    },
    async storeTodo({ commit }, { title, fn }) {
      commit("controlLoader", true);
      const response = await this.$axios.post("/todos", {
        title,
        completed: false
      });
      commit("saveTodo", response.data);
      fn();
    },
    async toggletLoader({ commit }, isLoading) {
      commit("controlLoader", isLoading);
    },
    changePage({ commit }, page) {
      commit("changePage", page);
    }
  };

export default todoActions;