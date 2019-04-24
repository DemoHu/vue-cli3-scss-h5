/*
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-03-26 13:52:16
 * @LastEditTime: 2019-04-24 11:37:00
 * @Description: 混入
 */
/**公共的混入 */
export const publicFun = {
  methods: {
    /**打开链接 */
    openUrl(url) {
      window.location.href = url
    },
    /**复制成功 */
    onCopy() {
      // this.$message.closeAll()
      // this.$message.success(`复制成功`)
    },
    /**复制失败 */
    onError() {
      // this.$message.closeAll()
      // this.$message.error(`复制失败，请重试`)
    }
  }
}

/**获取验证码混入 */
export const getCode = {
  data() {
    return {
      time: 0,
      timer: null,
      disabledCode: false
    }
  },
  computed: {
    codeState() {
      if (this.time <= 0) {
        this.disabledCode = false
        return '获取验证码'
      } else {
        this.disabledCode = true
        let time = this.time
        time = String(time)
        time = time.length < 2 ? `0${time}` : time
        return `重新获取${time}`
      }
    }
  },
  methods: {
    /**获取验证码倒计时 */
    getCodeTime() {
      return new Promise((resolve, reject) => {
        if (this.time > 0) {
          reject(false)
          return
        } else {
          this.time = 60
          this.timer = setInterval(() => {
            if (this.time === 0) {
              clearInterval(this.timer)
              return false
            }
            this.time--
          }, 1000)
          resolve(true)
        }
      })
    }
  }
}
