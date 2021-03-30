import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth/index'
import user from './users/index'
import loans from './loans/index'
import company from './companies/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    loans,
    company
  },
  state: {
    pageSizes: [10, 20, 30, 40]
  }
})