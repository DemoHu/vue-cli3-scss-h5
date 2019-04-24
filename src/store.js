import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 环境判断
const TEST_ENV = document.domain === 't-mch.aipaybox.com' || document.domain.includes('localhost')
const PRE_ENV = document.domain === 'p-mch.aipaybox.com'
export default new Vuex.Store({
  state: {
    login: JSON.parse(localStorage.getItem('isLogin')) || false,
    myInfo: JSON.parse(localStorage.getItem('myInfo')) || {},
    api_url: TEST_ENV ? 'https://t-api.xyhj.io/v1/m/zh' : PRE_ENV ? 'https://p-api.xyhj.io/v1/m/zh' : 'https://api-http.aipaybox.com/v1/m/zh' //接口主地址
  },
  mutations: {
    SET_LOGIN: (state, obj) => {
      localStorage.setItem('isLogin', obj)
      state.login = obj
    },
    SET_INFO: (state, info) => {
      localStorage.setItem('myInfo', JSON.stringify(info))
      state.myInfo = info
    }
  }
})
