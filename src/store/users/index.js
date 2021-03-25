import Vue from 'vue'

export default {
  state: {
    loader: false,
    allUsers: [],
    currentPage: 1,
    perPage: 10
  },
  mutations: {
    mutate(state, payload) {
      state[payload.property] = payload.with
    }
  },
  actions: {
    getAllUsers({ commit, state }) {
      commit('mutate', {
        property: 'loader',
        with: true
      })
      return new Promise((resolve, reject) => {
        const params = {
          page: state.currentPage,
          per_page: state.perPage
        }
        Vue.$http.get('admin/users', { params })
          .then((response) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            console.log(response);
            resolve(response);
          })
          .catch((err) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            console.log(err);
            reject(err);
          })
      }
    )}
  }
}