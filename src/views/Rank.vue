<!--
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-26 16:12:37
 * @LastEditTime: 2019-04-28 10:31:21
 * @Description: 排行页
 -->
<template>
  <div class="rank_view">
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
    <div class="rank_box">
      <div class="rank1_3_stage">
        <div class="stage_box">
          <div v-for="(item, index) in rank1_3" :key="index" :class="`rank_${item.rankNo}`" class="rank1_3">
            <img :src="item.avatar" class="avatar">
            <div class="nick_amount">
              <div class="nick_name">{{ item.nickName }}</div>
              <div class="amount">已获胜：{{ item.amount }}份</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rank4_10">
      <div v-for="(item, index) in rank4_5" :key="index" class="item_class">
        <div class="rank_no">{{ item.rankNo }}</div>
        <img :src="item.avatar" class="avatar">
        <div class="nick_name">{{ item.nickName }}</div>
        <div class="amount">已获胜{{ item.amount }}份</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import rankList1 from '@/mock/rankList1'   
import rankList2 from '@/mock/rankList1'   
import rankList3 from '@/mock/rankList1'
export default {
  name: 'rank',
  data() {
    return {
      activeTabs: 1,
      tabsType: [
        { type: 1, title: '日榜' },
        { type: 2, title: '月榜' },
        { type: 3, title: '周榜' }
      ]
    }
  },
  computed: {
    rank1_3() {
      const rank1_3 = this.rankList.slice(0, 3)
      return rank1_3
    },
    rank4_5() {
      const rank4_5 = this.rankList.slice(3, this.rankList.length)
      return rank4_5
    }
  },
  created() {
    this.rankList = rankList1
  },
  methods: {
    /**选中榜单类型 */
    selectType(type) {
      this.activeTabs = type
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
.rank_view {
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
  .rank_box {
    width: 100%;
    margin:  0 auto;
    border-radius: 5px 5px 0 0;
    padding: 5px;
    padding-bottom: 10px;
    background: url("../assets/images/guessing_bg.png") no-repeat;
    background-size: cover;
    .rank1_3_stage {
      height: 186.5px;
      position: relative;
      .stage_box {
        width: 312.5px;
        height: 95px;
        background: url("../assets/images/stage.png") no-repeat;
        background-size: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        .rank_1 {
          position: absolute;
          width: 96px;
          height: 91px;
          top: -90%;
          left: 50%;
          transform: translate(-50%);
          background: url("../assets/images/rank1.png") no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          .avatar {
            width: 55px;
            height: 55px;
            margin: 0 auto;
            position: absolute;
            bottom: 16%;
          }
          .nick_amount {
            min-width: 100px;
            position: absolute;
            bottom: -80%;
            text-align: center;
            .nick_name {
              font-size: 12px;
              color: #fff;
            }
            .amount {
              font-size: 10px;
              color: #feda02;
            }
          }
        }
        .rank_2 {
          position: absolute;
          width: 62px;
          height: 78.5px;
          top: -67%;
          left: 17%;
          transform: translate(-50%);
          background: url("../assets/images/rank2.png") no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          .avatar {
            width: 52px;
            height: 52px;
            margin: 0 auto;
            position: absolute;
            bottom: 8%;
          }
          .nick_amount {
            min-width: 100px;
            position: absolute;
            bottom: -94%;
            left: -37%;
            text-align: center;
            .nick_name {
              font-size: 12px;
              color: #fff;
            }
            .amount {
              font-size: 10px;
              color: #feda02;
            }
          }
        }
        .rank_3 {
          position: absolute;
          width: 60px;
          height: 75px;
          top: -56%;
          right: -2%;
          transform: translate(-50%);
          background: url("../assets/images/rank3.png") no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          .avatar {
            width: 52px;
            height: 52px;
            margin: 0 auto;
            position: absolute;
            bottom: 4.5%;
          }
          .nick_amount {
            min-width: 100px;
            position: absolute;
            bottom: -94%;
            left: -30%;
            text-align: center;
            .nick_name {
              font-size: 12px;
              color: #fff;
            }
            .amount {
              font-size: 10px;
              color: #feda02;
            }
          }
        }
      }
    }
  }
  .rank4_10 {
    width: 100%;
    background-color: rgba(255,255,255,.1);
    padding: 9px 15px;
    .item_class {
      height: 50px;
      border-bottom: .5px solid #644165;
      display: flex;
      align-items: center;
      .rank_no {
        color: #ffc60a;
        font-size: 15px;
        font-weight: 700;
      }
      .avatar {
        width: 29px;
        height: 29px;
        border-radius: 50%;
        margin: 0 5px;
      }
      .nick_name {
        color: #fff;
        font-size: 12px;
      }
      .amount {
        flex: 1;
        color: #ffd804;
        font-size: 12px;
        text-align: right;
      }
    }
    .item_class:last-child{
      border-bottom: 0px solid #644165;
      .rank_no {
        margin-left: -7px;
      }
    }
  }
}
</style>
