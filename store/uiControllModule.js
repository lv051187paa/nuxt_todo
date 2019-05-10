const state = () => ({
  sideNavVisible: false,
  searchBarVisible: false,
});

const getters = {
  isSideNavVisible: state => state.sideNavVisible,
  isSerchBarVisible: state => state.searchBarVisible,
};

const actions = {
  toggleSideNav({commit}){
    commit('toggleSideNav')
  }
};

const mutations = {
  toggleSideNav: state => state.sideNavVisible = !state.sideNavVisible
};

export default {
  state,
  getters,
  actions,
  mutations
}
