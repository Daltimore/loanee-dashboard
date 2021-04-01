import Vue from 'vue'

export default {
  state: {
    loader: false,
    allLoanLevels: [],
    loanees: [],
    allLoanRequests: [],
    loaneesTotal: 0,
    allLoansTotal: 0,
    loanRequestsTotal: 0,
    currentPage: 1,
    loaneesCurrentPage: 1,
    loanRequestCurrentPage: 1,
    perPage: 10,
    searchQuery: '',
    approval_status: '',
    payment_status: '',
    repayment_plan: ''
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
              property: 'loanees',
              with: response.data.data.results
            })
            commit('mutate', {
              property: 'loaneesTotal',
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
    getAllLoanRequests({ commit, state}) {
      commit('mutate', {
        property: 'loader',
        with: true
      })
      return new Promise((resolve, reject) => {
        const filterBy = {
          ...(state.approval_status && { approval_status: state.approval_status }),
          ...(state.payment_status && { payment_status: state.payment_status }),
          ...(state.repayment_plan && { repayment_plan: state.repayment_plan })
        }
        const params = {
          page: state.loanRequestCurrentPage,
          per_page: state.perPage,
          ...(Object.keys(filterBy).length > 0 && { filter_by: JSON.stringify(filterBy)}),
        }
        Vue.$http.get('/admin/loans/requests', { params })
          .then((res) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            commit('mutate', {
              property: 'allLoanRequests',
              with: res.data.data.results
            })
            commit('mutate', {
              property: 'loanRequestsTotal',
              with: res.data.data.total
            })
            resolve(res)
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
        property: 'loaneesCurrentPage',
        with: 1
      })
      dispatch('getAllLoanees')
    },
    loaneesHandleCurrentChange({ commit, dispatch }, page) {
      commit('mutate', {
        property: 'loaneesCurrentPage',
        with: page
      })
      dispatch('getAllLoanees')
    }
  },
  loanRequestHandleSizeChange({ commit, dispatch }, perPage) {
    commit('mutate', {
      property: 'perPage',
      with: perPage
    })
    commit('mutate', {
      property: 'loanRequestCurrentPage',
      with: 1
    })
    dispatch('getAllLoanRequests')
  },
  loanRequestHandleCurrentChange({ commit, dispatch }, page) {
    commit('mutate', {
      property: 'loanRequestCurrentPage',
      with: page
    })
    dispatch('getAllLoanRequests')
  }
}