/*
 * @Author: Siwen
 * @Date: 2019-05-17 16:17:08
 * @LastEditors: Siwen
 * @LastEditTime: 2019-06-26 13:40:38
 * @Description: WebSocket封装
 */
import store from '../store'

let Socket = ''
let setIntervalWesocketPush = null

/**建立连接 */
export function createSocket(userId = store.state.myInfo.userInfo.userId) {
  if (!Socket) {
    console.log('建立websocket连接')
    Socket = new WebSocket(`${store.state.WSS_URL}${userId}`)
    Socket.onopen = onopenWS
    Socket.onmessage = onmessageWS
    Socket.onerror = onerrorWS
    Socket.onclose = oncloseWS
  } else {
    console.log('websocket已连接')
  }
}
/**打开WS之后发送数据 */
export function onopenWS() {
  sendPing() //发送心跳
  sendWSPush([
    { expireTime: 3600, toggle: 1, type: 'orderOpen' },
    { expireTime: 3600, toggle: 1, type: 'lotteryOpen' }
  ])
}
/**连接失败重连 */
export function onerrorWS() {
  Socket.close()
  clearInterval(setIntervalWesocketPush)
  createSocket()
}
/**WS数据接收统一处理 */
export function onmessageWS(e) {
  window.dispatchEvent(new CustomEvent('onmessageWS', {
    detail: {
      data: e.data
    }
  }))
}
/**发送数据
 * @param eventType: orderOpen 个人开奖  lotteryOpen 彩票开奖推送
 */
export function sendWSPush(eventTypeArr) {
  const obj = {
    appId: 'race',
    cover: 0,
    event: eventTypeArr
  }
  if (Socket !== null && Socket.readyState === 3) {
    Socket.close()
    createSocket()
  } else if (Socket.readyState === 1) {
    Socket.send(JSON.stringify(obj))
  } else if (Socket.readyState === 0) {
    setTimeout(() => {
      Socket.send(JSON.stringify(obj))
    }, 3000)
  }
}
/**关闭WS */
export function oncloseWS() {
  clearInterval(setIntervalWesocketPush)
  console.log('websocket已断开')
}
/**发送心跳 */
export function sendPing() {
  Socket.send('ping')
  setIntervalWesocketPush = setInterval(() => {
    Socket.send('ping')
  }, 5000)
}

