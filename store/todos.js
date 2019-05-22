import todoActions from "./todos/acions";
import todoGetters from "./todos/getters";
import todoMutations from "./todos/mutations";

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
  ...todoGetters
}

const actions = { ...todoActions };

const mutations = {
  ...todoMutations,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
