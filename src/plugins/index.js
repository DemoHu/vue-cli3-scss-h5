/*
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-24 11:35:44
 * @LastEditTime: 2019-04-25 18:35:13
 * @Description: 第三方插件载入
 */

import Vue from 'vue'
import 'lib-flexible' //rem适配方案
import { Icon, NumberKeyboard, Toast } from 'vant'
Vue.use(Icon)
Vue.use(NumberKeyboard)
Vue.use(Toast)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
