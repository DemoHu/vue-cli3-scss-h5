<!--
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-26 10:48:59
 * @LastEditTime: 2019-04-26 16:16:45
 * @Description: 助手页面
 -->
<template>
  <div class="aide_view">
    <div class="timer_no_box">
      <div class="timer">
        <div>幸运飞艇距{{ currentNumber }}期封盘</div>
        <div class="current_timer">
          <img src="@/assets/images/current_timer.png" alt="">
          <span>{{ currentTimer }}</span>
        </div>
      </div>
      <div class="buy_btn">立即购买</div>
    </div>
    <div class="tabs_type">
      <div
        v-for="(item, index) in tabsType" 
        :key="index" 
        :class="{'tabs_active': activeTabs === item.type }"
        class="type_btn"
        @click="selectType(item.type)">
        {{ item.title }}
      </div>
    </div>
    <div class="aide_box">
      <aide-no :aide-list-props="aideList" :aide-type="activeTabs"></aide-no>
    </div>
  </div>
</template>
<script>
import aideNo from '@/components/aideNo'

import aideNo1 from '@/mock/aideNo1'
import aideNo2 from '@/mock/aideNo2'
import aideNo3 from '@/mock/aideNo3'
import aideNo4 from '@/mock/aideNo4'
import aideNo5 from '@/mock/aideNo5'
export default {
  name: 'aide',
  components: {
    aideNo
  },
  data() {
    return {
      currentNumber: '113',
      currentTimer: '04:56:01',
      activeTabs: 1,
      tabsType: [
        { type: 1, title: '大小' },
        { type: 2, title: '单双' },
        { type: 3, title: '龙虎' },
        { type: 4, title: '冠亚和' },
        { type: 5, title: '名次' }
      ],
      aideList: []
    }
  },
  created() {
    this.aideList = aideNo1
  },
  methods: {
    /**选中竞猜类型 */
    selectType(type) {
      this.activeTabs = type
      switch (this.activeTabs) {
        case 1:
          this.aideList = aideNo1
          return this.aideList
        case 2:
          this.aideList = aideNo2
          return this.aideList
        case 3:
          this.aideList = aideNo3
          return this.aideList
        case 4:
          this.aideList = aideNo4
          return this.aideList
        case 5:
          this.aideList = aideNo5
          return this.aideList
      }
      console.log(this.activeTabs)
    }
  }
}
</script>
<style lang='scss'>
.aide_view {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: url("../assets/images/main_bg.png") no-repeat;
  background-size: cover;
  padding: 10px 10px;
  .timer_no_box {
    width: 100%;
    height: 38px;
    background-color: rgba(255,255,255,.17);
    border-radius: 3px;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: $white;
    padding: 0 11px;
    .timer {
      flex: 1;
      display: flex;
      align-items: center;
      .current_timer {
        margin-left: 10px;
        padding: 3px 10px;
        margin-bottom: -3px;
        background-color: #3f1736;
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
    }
    .buy_btn {
      width: 70px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 2px;
      background: url("../assets/images/go_home.png") no-repeat;
      background-size: cover;
      color: $btnTextColor;
      font-size: 13px;
    }
  }
  .tabs_type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    margin-top: 11px;
    .type_btn {
      width: 19.7%;
      height: 42px;
      line-height: 42px;
      font-size: 17px;
      text-align: center;
      color: #a19eae;
      padding: 2px;
      border-radius: 4px 4px 0 0;
      background: url("../assets/images/tabs_aide.png") no-repeat;
      background-position: center;
    }
    .tabs_active {
      color: #ffe9ab;
      background: url("../assets/images/tabs_active_aide.png") no-repeat;
      background-position: center;
    }
  }
  .aide_box {
    width: 100%;
    margin:  0 auto;
    border-radius: 5px;
    padding: 5px;
    padding-bottom: 10px;
    background: url("../assets/images/guessing_bg.png") no-repeat;
    background-size: cover;
  }
}
</style>
