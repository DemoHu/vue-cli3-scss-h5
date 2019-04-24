/*
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-03-21 14:02:10
 * @LastEditTime: 2019-04-24 11:51:01
 * @Description: 接口中心
 */
import { post } from './http'
import store from '../store'

export default {
  /**登录
   * @param mobile 用户名
   * @param code 验证码
   */
  login(mobile, code) {
    return new Promise((resolve, reject) => {
      post('/admin/login', { mobile, code }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**获取用户信息 */
  getUserInfo() {
    return new Promise((resolve, reject) => {
      post('/admin/getUserInfo', {}).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**获取验证码 */
  getCode(mobile) {
    return new Promise((resolve, reject) => {
      post('/admin/sendSms', { mobile }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**退出登录 */
  logOut() {
    return new Promise((resolve, reject) => {
      post('/admin/logout', {}).then(res => {
        resolve(res)
        store.commit('SET_LOGIN', false)
        store.commit('SET_INFO', {})
      }).catch(err => {
        reject(err)
      })
    })
  }
}
