<!--
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-25 13:51:00
 * @LastEditTime: 2019-04-26 10:53:17
 * @Description: 首页页面切换卡
 -->
<template>
  <div class="home_tabs_view">
    <div v-for="(item, index) in tabs" :key="index" class="tabs_box" @click="routerUrl(item.route)">
      <div class="inner_box">
        <img :src="item.icon" alt="">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
   
<script>
   
export default {
  name: 'home-tabs-view',
  data() {
    return {
      tabs: [
        { title: '竞猜记录', icon: require('../../assets/images/order.png'), route: '/order' },
        { title: '助手', icon: require('../../assets/images/aide.png'), route: '/aide' },
        { title: '排行', icon: require('../../assets/images/rank.png'), route: '/rank' }
      ]
    }
  },
  created() {},
  methods: {
    routerUrl(url) {
      console.log(url)
      this.$router.push({ path: url })
    }
  }
}
</script>
<style lang='scss'>
.home_tabs_view {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tabs_box {
    width: 110px;
    height: 37px;
    border-radius: 3px;
    border: 2px solid #ff657a;
    display: flex;
    align-items: center;
    color: $white;
    justify-content: space-around;
    .inner_box {
      display: flex;
      align-items: center;
      img {
        width: 13.5px;
        height: 15px;
        margin-right: 4px;
      }
    }
  }
}
</style>
