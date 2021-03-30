import Vue from 'vue'

export default {
  state: {
    loader: false,
    allLoanLevels: [],
    allLoanees: [],
    loaneesTotal: 0,
    allLoansTotal: 0,
    currentPage: 1,
    loaneesCurrentPage: 1,
    perPage: 10,
    searchQuery: '',
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
    getAllLoanees({ commit, state }) {
      commit('mutate', {
        property: 'loader',
        with: true
      })
      return new Promise((resolve, reject) => {
        const params = {
          page: state.loaneesCurrentPage,
          per_page: state.perPage,
          ...(state.searchQuery && { search_query: state.searchQuery })
        }
        Vue.$http.get('/admin/loanees', { params })
          .then((response) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            commit('mutate', {
              property: 'allLoanees',
              value: response.data.results
            })
            commit('mutate', {
              property: 'loaneesTotal',
              value: response.data.total
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
    },
    loaneesHandleSizeChange({ commit, dispatch }, perPage) {
      commit('mutate', {
        property: 'perPage',
        with: perPage
      })
      commit('mutate', {
        property: 'currentPage',
        with: 1
      })
      dispatch('getAllLoanees')
    },
    loaneesHandleCurrentChange({ commit, dispatch }, page) {
      commit('mutate', {
        property: 'currentPage',
        with: page
      })
      dispatch('getAllLoanees')
    }
  }
}