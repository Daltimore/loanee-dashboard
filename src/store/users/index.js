import Vue from 'vue'

export default {
  state: {
    loader: false,
    allUsers: [],
    usersTotal: 0,
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
        Vue.$http.get('admin/users/admin', { params })
          .then((response) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            commit('mutate', {
              property: 'allUsers',
              with: response.data.data.results
            })
            commit('mutate', {
              property: 'usersTotal',
              with: response.data.data.total
            })
            resolve(response);
          })
          .catch((err) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            reject(err);
          })
        }
      )
    },
    handleSizeChange({ commit, dispatch }, perPage) {
      commit('mutate', {
        property: 'perPage',
        with: perPage
      })
      commit('mutate', {
        property: 'currentPage',
        with: 1
      })
      dispatch('getAllUsers')
    },
    handleCurrentChange({ commit, dispatch }, page) {
      commit('mutate', {
        property: 'currentPage',
        with: page
      })
      dispatch('getAllUsers')
    }
  }
}