<!--
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-28 15:04:05
 * @LastEditTime: 2019-04-28 16:17:56
 * @Description: 订单记录
 -->

<template>
  <div class="order_view">
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
    <div class="order_list">
      <order-card v-for="(item, index) in 10" :key="index" class="item_card"></order-card>
    </div>
  </div>
</template>
  
<script>
import orderCard from '@/components/orderCard'
import rankList1 from '@/mock/rankList1'   
import rankList2 from '@/mock/rankList1'  
import rankList3 from '@/mock/rankList1'
export default {
  name: 'order',
  components: {
    orderCard
  },
  data() {
    return {
      activeTabs: 1,
      tabsType: [
        { type: 1, title: '全部' },
        { type: 2, title: '已中奖' },
        { type: 3, title: '待揭晓' }
      ]
    }
  },
  created() {
    this.rankList = rankList1
  },
  methods: {
    /**选中榜单类型 */
    selectType(type) {
      this.activeTabs = type
      document.getElementsByClassName('order_list')[0].scrollTop = 0
      switch (this.activeTabs) {
        case 1:
          this.rankList = rankList1
          return this.rankList
        case 2:
          this.rankList = rankList2
          return this.rankList
        case 3:
          this.rankList = rankList3
          return this.rankList
      }
      console.log(this.activeTabs)
    }
  }
}
</script>
<style lang='scss'>
.order_view {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: url("../assets/images/main_bg.png") no-repeat;
  background-size: cover;
  padding: 10px 10px;
  .tabs_type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    margin-top: 11px;
    .type_btn {
      width: 33.5%;
      height: 42px;
      line-height: 42px;
      font-size: 17px;
      text-align: center;
      color: #a19eae;
      padding: 2px;
      border-radius: 4px 4px 0 0;
      background: url("../assets/images/tabs.png") no-repeat;
      background-size: cover;
      background-position: center;
    }
    .tabs_active {
      color: #ffe9ab;
      background: url("../assets/images/tabs_active.png") no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
  .order_list {
    width: 100%;
    margin:  0 auto;
    height: calc(100% - 60px);
    overflow-y: auto;
    border-radius: 5px 5px 0 0;
    padding: 5px;
    padding-bottom: 10px;
    background: url("../assets/images/guessing_bg.png") no-repeat;
    background-size: cover;
    .item_card {
      margin-bottom: 10px;
    }
  }
}
</style>
