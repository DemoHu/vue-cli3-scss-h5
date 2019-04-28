<!--
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-26 09:57:37
 * @LastEditTime: 2019-04-28 15:28:07
 * @Description: 竞猜弹窗
 -->
<template>
  <div class="guessing_popup">
    <van-dialog v-model="guessingPopup" :show-confirm-button="false" class-name="guessing_popup_dialog">
      <div class="close" @click="close"></div>
      <div class="current_timer">
        <div class="timer">
          <img src="@/assets/images/current_timer_bai.png" alt="">
          <span>{{ currentTimer }}</span>
        </div>
        <div class="current_number">
          <span>本期号：</span>
          <span>{{ currentNumber }}</span>
        </div>
      </div>
      <div class="current_info">
        <div class="lef">当前购买： <span>{{ leftInfo }}</span></div>
        <div class="right">
          下注：<span class="right_number">{{ rightInfo }}</span>
          <img src="@/assets/images/USDT.png" class="ben_icon">
        </div>
      </div>
      <div class="select_box">
        <div class="title">选择购买份数</div>
        <div class="select_number">
          <div 
            v-for="(item, index) in selectNumerArr"
            :key="index"
            :class="{'active': buyNumber === item}"
            class="number_div"
            @click="selectNumberFunc(item)">{{ item }}
          </div>
          <van-stepper v-model="buyNumber" :integer="true" input-width="70%" class="popup_stepper" />
        </div>
        <div class="total_amount">
          <div class="current_total_box">
            本次支付：
            <span class="current_total">{{ currentTotal }}</span>
            <img src="@/assets/images/USDT.png" class="ben_icon">
          </div>
          <div class="balance_box">
            余&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额：
            <span class="balance">{{ balance }}</span>
            <img src="@/assets/images/USDT.png" class="ben_icon">
          </div>
        </div>
        <div class="popup_confirm" @click="confirm">确定</div>  
      </div>
    </van-dialog>
  </div>
</template>
   
<script>
   
export default {
  name: 'guessing_popup',
  props: {
    currentTitle: {
      type: null,
      default: ''
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
      guessingPopup: true,
      selectNumerArr: [
        1, 3, 5, 10, 15, 30, 50, 100
      ],
      buyNumber: 1,
      balance: 123323
    }
  },
  computed: {
    leftInfo() {
      return this.currentTitle
    },
    rightInfo() {
      return this.autoSelect ? this.autoSelect : this.chipType
    },
    currentTotal() {
      return this.$utils.accMul(this.rightInfo, this.buyNumber)
    }
  },
  created() {
    
  },
  methods: {
    close() {
      this.$emit('showPopupFunc', { status: false, close: true })
    },
    selectNumberFunc(amount) {
      this.buyNumber = amount
    },
    confirm() {
      this.$emit('showPopupFunc', { status: false })
    }
  }
}
</script>
<style lang='scss'>
.guessing_popup {
  .guessing_popup_dialog {
    width: 329px;
    min-height: 430px;
    padding: 0 17px;
    background: url("../../assets/images/popup_bg.png") no-repeat;
    background-size: 100%;
    .close {
      width: 27px;
      height: 27px;
      background: url("../../assets/images/close.png") no-repeat;
      background-size: 100%;
      background-position: center;
      position: absolute;
      right: 2%;
      top: 2.5%;
    }
    .van-dialog__content {
      .current_timer {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        height: 70px;
        justify-content: space-between;
        color: $white;
        .timer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 118px;
          height: 28px;
          background: url("../../assets/images/timer_bg.png") no-repeat;
          background-size: cover;
          img {
            margin-right: 4px;
          }
        }
        .current_number {
          font-size: 17px;
          color: $white;
          line-height: 40px;
          span:nth-child(2) {
            color: $textColor;
          }
        }
      }
      .current_info {
        display: flex;
        align-self: center;
        justify-content: space-between;
        font-size: 14px;
        color: $white;
        padding: 13px 0 13px 0;
        border-top: .5px solid #673d67;
        .lef, .right {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          span {
            color: $textColor;
          }
          .right_number {
            height: 16px;
            line-height: 20px;
          }
          .ben_icon {
            width: 19px;
            height: 17px;
            border-radius: 50%;
            margin-left: 3px;
          }
        }
      }
      .select_box {
        .title {
          color: $textColor;
          font-size: 12px;
        }
        .select_number {
          width: 100%;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 10px;
          .number_div {
            width: 68px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            color: $text333;
            background-color: $white;
            border-radius: 3px;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          .number_div.active {
            background-color: $textColor;;
          }
          .popup_stepper {
            height: 35px;
            .van-stepper__minus,
            .van-stepper__plus {
              height: 100%;
              width: 40px;
              &::before {
                width: 10px;
                height: 2px;
                background-color: #210a5a;
              }
            }
            .van-stepper__input {
              height: 100%;
              background-color: #3d1a69;
              color: $white;
              font-size: 18px;
              font-weight: 600;
            }
          }
        }
        .total_amount {
          margin-top: 20px;
          padding: 13.5px 0;
          border-top: .5px solid #673d67;
          border-bottom: .5px solid #673d67;
          font-size: 15px;
          color: $white;
          .current_total_box,.balance_box {
            display: flex;
            align-items: center;
            span {
              color: $textColor;
            }
            .ben_icon {
              width: 19px;
              height: 17px;
              border-radius: 50%;
              margin-left: 3px;
              margin-top: -2px;
            }
          }
        }
        .popup_confirm {
          width: 126px;
          height: 44px;
          line-height: 44px;
          color: #5d1603;
          font-size: 20px;
          text-align: center;
          background: url("../../assets/images/popup_confirm.png") no-repeat;
          background-size: 100%;
          background-position: center;
          margin: 0 auto;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
