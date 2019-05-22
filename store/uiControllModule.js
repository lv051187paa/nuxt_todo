import uiGetters from './uiControllModule/getters';
import uiActions from './uiControllModule/acions';
import uiMutations from './uiControllModule/mutations';

const state = () => ({
  sideNavVisible: false,
  searchBarVisible: false,
});

const getters = {
  ...uiGetters
};

const actions = {
  ...uiActions
};

const mutations = {
  ...uiMutations
};

export default {
  state,
  getters,
  actions,
  mutations
}
