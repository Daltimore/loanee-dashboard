import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

import { router } from './../router'

import './assets/css/tailwind.css'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
