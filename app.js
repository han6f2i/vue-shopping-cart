import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { currency } from './currency'

Vue.filter('currency', currency)

var vm = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})