import Vue from 'vue'

export default {
  state: {
    loader: ''
  },
  mutations: {
    mutate(state, payload) {
      state[payload.property] = payload.with
    }
  },
  actions: {
    login({ commit }, payload) {
      commit('mutate', {
        property: 'loader',
        with: true
      })
      return new Promise((resolve, reject) => {
        Vue.$http.post('auth/login', payload)
          .then((response) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            resolve(response);
          })
          .catch((err) => {
            commit('mutate', {
              property: 'loader',
              with: false
            })
            reject(err)
          })
      }
    )}
  }
}