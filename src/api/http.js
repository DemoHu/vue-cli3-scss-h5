/*
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-03-21 12:20:52
 * @LastEditTime: 2019-04-24 11:32:51
 * @Description: axios封装
 */

import axios from 'axios'
import qs from 'qs'
import store from '../store'
import vueRouter from '../router'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true //请求携带cookie
axios.defaults.crossDomain = true //请求携带额外数据(不包含cookie)
axios.defaults.baseURL = store.state.api_url

//http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'post' && config.url.indexOf('uploadKYC') === -1) {
      config.data = qs.stringify({
        ...config.data
      })
    } else if (config.method === 'get') {
      config.params = {
        ...config.params
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//http response 拦截器
axios.interceptors.response.use(
  response => {
    if (!response.data.success) {
      if (response.data.error.code === '2002') {
        vueRouter.push({ path: '/login' })
      }
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params }).then(response => {
      if (response.data.success) {
        resolve(response.data.payload)
      } else {
        reject(response.data.error)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      if (response.data.success) {
        resolve(response.data.payload)
      } else {
        reject(response.data.error)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
