/*
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-24 11:35:44
 * @LastEditTime: 2019-04-28 10:57:12
 * @Description: 第三方插件载入
 */

import Vue from 'vue'
import 'lib-flexible' //rem适配方案
import { Icon, NumberKeyboard, Toast, Dialog, Stepper } from 'vant'
Vue.use(Icon)
Vue.use(NumberKeyboard)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Stepper)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
