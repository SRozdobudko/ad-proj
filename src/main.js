import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './routes'
import './plugins/vuetify'
import store from './store'
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
