/*
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-03-21 14:02:10
 * @LastEditTime: 2019-04-28 14:02:16
 * @Description: 接口中心
 */
import { post } from './http'
import store from '../store'

export default {
  /**获取用户信息 */
  getUserInfo() {
    return new Promise((resolve, reject) => {
      post('/user/getInfo', {}).then(res => {
        resolve(res)
      }).catch(err => {
        store.commit('SET_LOGIN', false)
        store.commit('SET_INFO', {})
        reject(err)
      })
    })
  }
}
