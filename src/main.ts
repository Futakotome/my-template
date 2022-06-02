import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './layouts/styles/index.scss'
import '@/style/uniformStyle.scss'

Vue.use(ElementUI)

let dayjs = require('dayjs')
Vue.prototype.$dayjs = dayjs;
Vue.config.productionTip = false

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
