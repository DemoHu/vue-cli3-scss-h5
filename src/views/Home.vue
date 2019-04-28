<!--
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-24 11:08:08
 * @LastEditTime: 2019-04-28 15:25:16
 * @Description: 首页
 -->
<template>
  <div class="home">
    <my-header :updata-amount="updataAmount"></my-header>
    <div class="current_box">
      <div class="current_number">
        <span class="current_title">期号：</span>
        <span>{{ currentNumber }}</span>
      </div>
      <div class="current_timer">
        <img src="@/assets/images/current_timer.png" alt="">
        <span>{{ currentTimer }}</span>
      </div>
    </div>
    <home-tabs-view></home-tabs-view>
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
    <div class="guessing_box">
      <guessing-collapse
        v-for="(item, index) in guessingArr" 
        :key="index"
        :active-tabs="activeTabs"
        :current-number="currentNumber"
        :current-timer="currentTimer"
        :chip-type="chipType"
        :auto-select="autoSelect"
        :guessing-item="item">
      </guessing-collapse>
    </div>
    <news-notice></news-notice>
    <div :class="{'show_input': showChip}" class="chip_box">
      <div class="chip_title">选择下注</div>
      <div class="chip_type">
        <div v-for="(item, index) in chipImg" :key="index" class="chip_img" @click="selectChip(item.type)">
          <img v-if="chipType === item.type" :src="item.active" class="active_img">
          <img v-else :src="item.img" alt="">
          <div v-if="item.type === 100" class="zixuan" :class="{'active_img': item.type === 100}">{{ autoSelect ? autoSelect : '自选' }}</div>
        </div>
      </div>
    </div>
    <van-number-keyboard
      :show="showChip"
      :transition="false"
      :hide-on-click-outside="false"
      close-button-text="确定"
      @blur="confirmKeyboard"
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import myHeader from '@/components/header'
import homeTabsView from '@/components/homeTabsView'
import guessingCollapse from '@/components/guessingCollapse'
import newsNotice from '@/components/newsNotice'

import guessingArr from '@/mock/guessingArr'
import liangmian from '@/mock/liangmian'
import hezhi from '@/mock/hezhi'
export default {
  name: 'home',
  components: {
    myHeader,
    homeTabsView,
    guessingCollapse,
    newsNotice
  },
  data() {
    return {
      updataAmount: false,
      currentNumber: '889340',
      currentTimer: '04:56:11',
      activeTabs: 1,
      tabsType: [
        { type: 1, title: '两面' },
        { type: 2, title: '名次' },
        { type: 3, title: '冠亚和值' }
      ],
      guessingArr: [],
      chipImg: [
        { type: 5, img: require('../assets/images/chip_5.png'), active: require('../assets/images/chip_5_active.png') },
        { type: 10, img: require('../assets/images/chip_10.png'), active: require('../assets/images/chip_10_active.png') },
        { type: 100, img: require('../assets/images/chip_zi.png'), active: require('../assets/images/chip_zi_active.png') }
      ],
      chipType: 10, //筹码类型 5-10-100
      autoSelect: '',
      showChip: false
    }
  },
  created() {
    this.guessingArr = guessingArr
  },
  methods: {
    /**通知更新资产 */
    updataAmountFunc() {
      this.updataAmount = !this.updataAmount
    },
    /**选中竞猜类型 */
    selectType(type) {
      this.activeTabs = type
      switch (this.activeTabs) {
        case 1:
          this.guessingArr = guessingArr
          return this.guessingArr
        case 2:
          this.guessingArr = liangmian
          return this.guessingArr
        case 3:
          this.guessingArr = hezhi
          return this.guessingArr
      }
    },
    /**选择筹码类型 */
    selectChip(type) {
      this.chipType = type
      if (type !== 100) {
        this.autoSelect = ''
      }
      this.showChip = this.chipType === 100 ? true : false
    },
    /**键盘输入自选筹码 */
    confirmKeyboard() {
      this.showChip = false
      if (+this.autoSelect <= 0) {
        this.chipType = 10
        this.autoSelect = ''
      }
    },
    onInput(value) {
      if (+this.autoSelect > 100) {
        this.$toast({
          message: '只能输入1-1000',
          position: 'bottom',
          duration: 1000
        })
        return
      }
      this.autoSelect = this.autoSelect + value
    },
    onDelete() {
      this.autoSelect = this.autoSelect.substr(0, this.autoSelect.length - 1)
    }
  }
}
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: url("../assets/images/main_bg.png") no-repeat;
  background-size: cover;
  padding: 5px 10px;
  .current_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $white;
    font-size: 14px;
    padding: 10px 0;
    .current_number {
      .current_title {
        color: #ff98a6;
      }
    }
    .current_timer {
     display: flex;
     align-items: center;
     font-size: 12px;
     img {
       margin-right: 4px;
     }
    }
  }
  .tabs_type {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    margin-top: 14px;
    .type_btn {
      width: 108px;
      height: 42px;
      line-height: 42px;
      font-size: 17px;
      text-align: center;
      color: #a19eae;
      padding: 2px;
      background: url("../assets/images/tabs.png") no-repeat;
      background-size: 100%;
      background-position: center;
    }
    .tabs_active {
      color: #ffe9ab;
      background: url("../assets/images/tabs_active.png") no-repeat;
      background-size: 100%;
      background-position: center;
    }
  }
  .guessing_box {
    width: 95%;
    margin:  0 auto;
    border-radius: 5px;
    padding: 5px;
    padding-bottom: 10px;
    background: url("../assets/images/guessing_bg.png") no-repeat;
    background-size: cover;
  }
  .chip_box {
    width: 100%;
    height: 48px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: url("../assets/images/chip_box.png") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-timing-function: ease-out;
    .chip_title {
      font-size: 12px;
      position: absolute;
      top: 16px;
      left: 20px;
      color: #ffdae1;
    }
    .chip_type {
      width: 60%;
      margin-top: -20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .chip_img {
        position: relative;
        img {
          width: 64px;
          height: 64px;
        }
        .active_img {
          transform: scale(1.05);
        }
        .zixuan {
          position: absolute;
          top: 50%;
          left: 50%;
          transform:translate(-50%,-100%);
          color: $white;
          font-size: 13.5px;
        }
      }
    }
  }
  .show_input {
    // animation: van-slide-up-enter .3s both ease;
    bottom: 246px;
  }
}
</style>

