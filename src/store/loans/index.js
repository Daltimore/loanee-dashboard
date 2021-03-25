import Vue from 'vue'

export default {
  state: {
    loader: false,
    allLoanLevels: [],
    allLoansTotal: 0,
    currentPage: 1,
    perPage: 10
  },
  mutations: {
    mutate(state, payload) {
      state[payload.property] = payload.with
    }
  },
  actions: {
    getAllLoansLevels({ commit, state }) {
      commit('mutate', {
        property: 'loader',
        with: true
      })
      return new Promise((resolve, reject) => {
        const params = {
          page: state.currentPage,
          per_page: state.perPage
        }
        Vue.$http.get('admin/loans/settings/loan-levels', { params })
          .then((response) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            commit('mutate', {
              property: 'allLoanLevels',
              with: response.data.data.results
            })
            commit('mutate', {
              property: 'allLoansTotal',
              with: response.data.data.total
            })
            resolve(response)
          })
          .catch((err) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            reject(err)
          })
      })
    },
    createLoanLevel({ commit }, payload) {
      commit('mutate', {
        property: 'loader',
        with: true
      })
      return new Promise((resolve, reject) => {
        Vue.$http.post('admin/loans/settings/loan-levels', payload)
          .then((response) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            resolve(response)
          })
          .catch((err) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            reject(err)
          })
      })
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
      dispatch('getAllLoansLevels')
    },
    handleCurrentChange({ commit, dispatch }, page) {
      commit('mutate', {
        property: 'currentPage',
        with: page
      })
      dispatch('getAllLoansLevels')
    }
  }
}