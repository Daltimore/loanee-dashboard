import Vue from 'vue';

export default {
  state: {
    loader: false,
    allCompanies: [],
    perPage: 10,
    currentPage: 1,
    companiesTotal: 0,
    searchQuery: ''
  },
  mutations: {
    mutate(state, payload) {
      state[payload.property] = payload.with
    }
  },
  actions: {
    getAllCompanies({ commit, state }) {
      commit('mutate', {
        property: 'loader',
        with: true
      })
      return new Promise((resolve, reject) => {
        const params = {
          page: state.currentPage,
          per_page: state.perPage,
          ...(state.searchQuery && { search_query: state.searchQuery })
        }
        Vue.$http.get('/admin/companies', { params })
          .then((response) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            commit('mutate', {
              property: 'allCompanies',
              with: response.data.data.results
            })
            commit('mutate', {
              property: 'companiesTotal',
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
      })
    },
    createCompany({ commit }, payload) {
      commit('mutate', {
        property: 'loader',
        with: true
      })
      return new Promise((resolve, reject) => {
        Vue.$http.post('/admin/companies', payload)
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
      dispatch('getAllCompanies')
    },
    handleCurrentChange({ commit, dispatch }, page) {
      commit('mutate', {
        property: 'currentPage',
        with: page
      })
      dispatch('getAllCompanies')
    },
  }
}