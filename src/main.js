import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/styles/index.scss' // global css
import '@/plugins'
import '@/filters'
import '@/directive'
import api from '@/api'
import utils from '@/utils'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$utils = utils

// 路由管理 ↓↓↓↓↓↓↓↓↓↓↓↓
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.state.login) {
    next()
    // next({ path: '/login' })
  } else {
    next()
  }
})
router.afterEach((to, from) => {})
// 路由管理 ↑↑↑↑↑↑↑↑↑↑↑↑
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
