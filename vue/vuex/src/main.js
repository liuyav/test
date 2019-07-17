import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import filter from './filter/index'

Vue.config.productionTip = false

Object.keys(filter).forEach(keys=> {
  Vue.filter(keys, filter[keys]);
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
