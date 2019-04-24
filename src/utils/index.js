/*
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-03-21 11:34:08
 * @LastEditTime: 2019-04-23 15:17:18
 * @Description: utils 工具类
 */
import store from '@/store'
export default {
  /**
   * 拼接对象为请求字符串
   * @param {Object} obj - 待拼接的对象
   * @returns {string} - 拼接成的请求字符串
   * @param {string} baseUrl - url地址
   */
  encodeParams(obj) {
    const params = []
    Object.keys(obj).forEach(key => {
      let value = obj[key]
      // 如果值为undefined则空
      if (typeof value === 'undefined') {
        value = ''
      }
      if (typeof value === 'object') {
        value = JSON.stringify(value)
      }
      // 对于需要编码的文本（比如说中文）进行编码
      params.push([key, encodeURIComponent(value)].join('='))
    })
    return params.join('&')
  },
  encodeParams2(obj) {
    const params = []
    Object.keys(obj).forEach(key => {
      let value = obj[key]
      // 如果值为undefined则空
      if (typeof value === 'undefined') {
        value = ''
      }
      if (typeof value === 'object') {
        value = JSON.stringify(value)
      }
      // 对于需要编码的文本（比如说中文）进行编码
      console.log(value)
      params.push([key, value].join('='))
    })
    return params.join('&')
  },
  /**
   * 下载报表函数
   * @param {string} url 下载地址
   * @param {object} params 参数
   */
  downloadCSV(url, params = {}) {
    const baseUrl = `${store.state.app.api_url}${url}`
    const finalUrl = `${baseUrl}?${this.encodeParams(params)}`
    const link = document.createElement('a')
    link.style.display = 'none'
    console.log(finalUrl)
    link.href = finalUrl
    link.setAttribute('download', '下载报表')
    document.body.appendChild(link)
    link.click()
  },
  /**
   * 千分位格式化
   * @param {number | string} num 格式化数字
   */
  comdify(num) {
    return num.toString().replace(/\d+/, (n) => {
      return n.replace(/(\d)(?=(\d{3})+$)/g, (v) => {
        return `${v},`
      })
    })
  },
  /**
   * 将base64图片转file文件
   * @param {string} dataurl base64字符串
   * @param {string} filename 文件名
   */
  dataURLtoFile(dataurl, filename) {
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, {
      type: mime
    })
  },
  /**
   * 倒计时
   * @param {string | number} times 剩余毫秒数
   * @param {function} callback 回调函数
   */
  countDown(times, callback) {
    let timer = null
    timer = setInterval(() => {
      if (times > 0) {
        let day = Math.floor(times / (60 * 60 * 24))
        let hour = Math.floor(times / (60 * 60)) - (day * 24)
        let minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60)
        let second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
        day = `${day < 10 ? '0' : ''}${day}`
        hour = `${hour < 10 ? '0' : ''}${hour}`
        minute = `${minute < 10 ? '0' : ''}${minute}`
        second = `${second < 10 ? '0' : ''}${second}`
        callback(`${hour}:${minute}:${second}`)
        times--
      } else {
        clearInterval(timer)
        callback(false)
      }
    }, 1000)
    if (times <= 0) {
      clearInterval(timer)
      callback(false)
    }
  },
  /**
   * 将时间戳转换成格式化日期
   * @param {string | number} x 时间戳
   * @param {string} y 时间格式字符串
   */
  formatDate(x, y) {
    if (!(x instanceof Date)) {
      const date = new Date()
      date.setTime(x * 1000)
      x = date
    }
    const z = {
      y: x.getFullYear(),
      M: x.getMonth() + 1,
      d: x.getDate(),
      h: x.getHours(),
      m: x.getMinutes(),
      s: x.getSeconds()
    }
    sessionStorage.removeItem(z)
    return y.replace(/(y+|M+|d+|h+|m+|s+)/g, (v) => {
      return ((v.length > 1 ? '0' : '') + eval('z.' + v.slice(-1))).slice(
        -(v.length > 2 ? v.length : 2)
      )
    })
  },
  //将日期格式转换成时间戳
  timeStamp(myDate) {
    var date = new Date(myDate)
    return date.getTime() / 1000
  },
  /**
   * 保留n位小数
   * @param {string | number} cnum 需要保留的数据
   * @param {string} cindex 保留的小数位数
   */
  toDecimal(cnum, cindex) {
    const value = String(cnum)
    if (value.indexOf('.') > 0) {
      const left = value.substr(0, value.indexOf('.'))
      let right = value.substr(value.indexOf('.') + 1, value.length)
      if (right.length > cindex) {
        right = right.substr(0, cindex)
      }
      return `${left}.${right}`
    } else {
      return cnum
    }
  },
  /**加法运算 */
  accAdd(arg1, arg2) {
    let r1 = null
    let r2 = null
    let m = null
    try { r1 = arg1.toString().split('.')[1].length } catch (error) { r1 = 0 }
    try { r2 = arg2.toString().split('.')[1].length } catch (error) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  },
  /**减法运算 */
  accSub(arg1, arg2) {
    let r1 = null
    let r2 = null
    let m = null
    let n = null
    try { r1 = arg1.toString().split('.')[1].length } catch (error) { r1 = 0 }
    try { r2 = arg2.toString().split('.')[1].length } catch (error) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    n = (r1 >= r2) ? r1 : r2
    return ((arg1 * m - arg2 * m) / m).toFixed(n)
  },
  // 除法运算
  accDiv(arg1, arg2) {
    let t1 = 0
    let t2 = 0
    let r1 = null
    let r2 = null
    try { t1 = arg1.toString().split('.')[1].length } catch (e) { console.log() }
    try { t2 = arg2.toString().split('.')[1].length } catch (e) { console.log() }
    r1 = Number(arg1.toString().replace('.', ''))
    r2 = Number(arg2.toString().replace('.', ''))
    return (r1 / r2) * Math.pow(10, t2 - t1)
  },
  // 乘法运算
  accMul(arg1, arg2) {
    let m = 0
    const s1 = arg1.toString()
    const s2 = arg2.toString()
    try { m += s1.split('.')[1].length } catch (e) { console.log() }
    try { m += s2.split('.')[1].length } catch (e) { console.log() }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
  },
  /**是否手机号 */
  isPhone(str) {
    const reg = /^1[3456789]\d{9}$/
    return reg.test(str)
  },
  /**是否邮箱 */
  isEmail(str) {
    const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return reg.test(str)
  },
  /**密码正则 */
  isPassword(str) {
    // 8到20位（字母，数字，特殊符号任意两种组合）
    const reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!"#$%&'()*+,-./:;<=>?^_`\{|}~@]+$)[a-zA-Z\d!"#$%&'()*+,-./:;<=>?^_`\{|}~@]{8,20}$/
    return reg.test(str)
  },
  /**检查小数点 */
  isDecimal(n) {
    if (n.toString().split('.')[1] !== undefined) {
      return n.toString().split('.')[1].length
    } else {
      return 0
    }
  },
  /**获取uuid */
  generateUUID() {
    let d = new Date().getTime()
    if (window.performance && typeof window.performance.now === 'function') {
      d += performance.now()
    }
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
  }
}
