import Vue from 'vue';

export default {
  state: {
    loader: false,
    allCompanies: [],
    allCompaniesEmployees: [],
    companyEmployeesTotal: 0,
    perPage: 10,
    currentPage: 1,
    employeesCurrentPage: 1,
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
    getCompanyEmployees({ commit, state }, id) {
      commit('mutate', {
        property: 'loader',
        with: true
      })
      return new Promise((resolve, reject) => {
        const params = {
          page: state.employeesCurrentPage,
          per_page: state.perPage,
        }
        Vue.$http.get(`admin/companies/${id}/employees`, { params })
          .then((res) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            commit('mutate', {
              property: 'allCompaniesEmployees',
              with: res.data.data.results
            })
            commit('mutate', {
              property: 'companyEmployeesTotal',
              with: res.data.data.total
            })
            resolve(res)
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
    employeeshandleSizeChange({ commit, dispatch }, perPage) {
      commit('mutate', {
        property: 'perPage',
        with: perPage
      })
      commit('mutate', {
        property: 'employeesCurrentPage',
        with: 1
      })
      dispatch('getCompanyEmployees')
    },
    employeesCurrentChange({ commit, dispatch }, page) {
      commit('mutate', {
        property: 'employeesCurrentPage',
        with: page
      })
      dispatch('getCompanyEmployees')
    }
  }
}