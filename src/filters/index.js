/*
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-24 11:34:18
 * @LastEditTime: 2019-07-09 16:44:02
 * @Description: Vue过滤器
 */

import Vue from 'vue'
import utils from '@/utils'
//时间格式化
Vue.filter('formatDate', (v, format) => {
  return utils.formatDate(v, format)
})
//保留n位小数
Vue.filter('toDecimal', (num) => {
  return utils.toDecimal(num, 2)
})
//数字千分位格式化
Vue.filter('comdify', (num) => {
  return utils.comdify(num)
})
