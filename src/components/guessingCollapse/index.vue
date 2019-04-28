<!--
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-25 15:31:03
 * @LastEditTime: 2019-04-28 15:28:27
 * @Description: 竞猜选项模版
 -->
<template>
  <div class="guessing_collapse">
    <div class="title_box" @click="open = !open">
      <div class="title">{{ guessing.name }}</div>
      <van-icon :name="open ? 'arrow-down' : 'arrow-up'" />
    </div>
    <div v-show="open" class="type_select" :class="`type_select_${activeTabs}`">
      <div
        v-for="(item, index) in guessing.option"
        :key="index" 
        :class="{'dragon_tiger': item.name === '龙' || item.name === '虎'}" 
        class="item_btn"
        @click="activeItem(item.id, item.name, guessing.name, item.number)">
        <div class="item_title">{{ item.name }}</div>
        <div class="item_number">{{ item.number }}</div>
      </div>
    </div>
    <guessing-popup
      v-if="showPopup"
      :current-title="currentTitle"
      :current-number="currentNumber"
      :current-timer="currentTimer"
      :chip-type="chipType"
      :auto-select="autoSelect"
      @showPopupFunc="showPopupFunc">
    </guessing-popup>
    <tips-dialog v-if="tipsDialog" title="提示" class="tips_box">
      <div slot="body">
        <div class="tips_info">下单成功</div>
      </div>
      <div slot="footer" class="dialog_btn">
        <div class="btn_left" @click="tipsDialog = false">继续下单</div>
        <router-link to="/order" class="btn_right">查看订单</router-link>
      </div>
    </tips-dialog>
  </div>
</template>
   
<script>
import guessingPopup from '@/components/guessingCollapse/popup.vue'
import tipsDialog from '@/components/dialog'
export default {
  name: 'guessing-collapse',
  components: {
    guessingPopup,
    tipsDialog
  },
  props: {
    guessingItem: {
      type: null,
      default: ''
    },
    activeTabs: {
      type: null,
      default: 1
    },
    currentTimer: {
      type: null,
      default: ''
    },
    currentNumber: {
      type: null,
      default: ''
    },
    chipType: {
      type: null,
      default: 10
    },
    autoSelect: {
      type: null,
      default: ''
    }
  },
  data() {
    return {
      tipsDialog: false,
      showPopup: false,
      open: true,
      sd: 1
    }
  },
  computed: {
    guessing() {
      return this.guessingItem
    }
  },
  watch: {
    activeTabs() {
      this.open = true
    }
  },
  created() {},
  methods: {
    /**选中 */
    activeItem(id, itemName, type, number) {
      this.currentTitle = `${type}-${itemName}-${number}`
      console.log(this.currentTitle)
      this.showPopupFunc({ status: true })
    },
    showPopupFunc({ status, close }) {
      this.showPopup = status
      if (!close) {
        this.tipsDialog = !status
      }
    }
  }
}
</script>
<style lang='scss'>
.guessing_collapse {
  width: 100%;
  padding: 8px 17px;
  background-color: rgba(255,255,255,.15);
  margin-bottom: 10px;
  .title_box {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: $white;
    height: 13px;
    .title {
      margin-right: 3px;
    }
  }
  .type_select {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    .item_btn {
      width: 24.2%;
      height: 35px;
      background: url("../../assets/images/select_btn.png") no-repeat;
      background-size: 100%;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .item_title {
        color: #fefefe;
        font-size: 15px;
        margin-right: 4px;
      }
      .item_number {
        color: #ffcd5e;
        font-size: 14px;
      }
    }
    .dragon_tiger {
      width: 49.5%;
      margin-top: 10px;
    }
    .dragon_tiger:nth-child(5) {
      background: url("../../assets/images/dragon.png") no-repeat;
      background-size: 100%;
      background-position: center;
    }
    .dragon_tiger:nth-child(6) {
      background: url("../../assets/images/tiger.png") no-repeat;
      background-size: 100%;
      background-position: center;
    }
  }
  .type_select_2, .type_select_3 {
    justify-content: flex-start;
    .item_btn {
      width: 23.6%;
      margin-right: 4px;
      margin-bottom: 5px;
      .item_title {
        width: 22px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        border-radius: 50%;
        background-color: #df2272;
        color: #fefefe;
        font-size: 13px;
      }
    }
  }
}
.guessing_collapse:nth-child(11){
  margin-bottom: 0;
}
</style>
