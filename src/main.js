import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

import { router } from './../router'
import appPlugins from './helpers/plugins'
import VueToastr2 from 'vue-toastr-2'
import store from './store/index'

import moment from 'moment'

import './assets/css/tailwind.css'

import 'vue-toastr-2/dist/vue-toastr-2.min.css'

window.toastr = require('toastr')
 
Vue.use(VueToastr2)

Vue.use(appPlugins)
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

Vue.filter('currencyFormat', function(number) {
  return number ? number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0
})
Vue.filter('getFullDate', function(dateStr) {  
  return moment.utc(dateStr).local().format('L')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
