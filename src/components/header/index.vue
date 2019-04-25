<template>
  <div class="header_banner">
    <div class="header_box">
      <div class="avatar">
        <img src="@/assets/images/img_avatar.png" alt="">
      </div>
      <div class="assets_box_big">
        <div class="assets_box" @click="rechargeBtn">
          <img src="@/assets/images/USDT.png" class="ben_icon">
          <div class="ben_amount">{{ amount | comdify }}</div>
          <img src="@/assets/images/recharge_btn.png" class="ben_add">
        </div>
      </div>
      <div class="go_home" @click="goHome">返回大厅</div>
    </div>
    <div class="banner_box">
      <img src="@/assets/images/banner.png">
    </div>
  </div>
</template>
   
<script>
   
export default {
  name: 'my-header',
  props: {
    updataAmount: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      amount: 343242 // 资产
    }
  },
  watch: {
    updataAmount() {
      this.amount = this.amount + 100
    }
  },
  created() {},
  methods: {
    rechargeBtn() {
      alert('充值')
    },
    goHome() {
      alert('返回大厅')
    }
  }
}
</script>
<style lang='scss'>
.header_banner {
  .header_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .avatar {
      width: 25px;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
    .assets_box_big {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
      .assets_box {
        min-width: 108px;
        height: 20px;
        background-color: rgba(255, 255, 255, .14);
        border-radius: 10px;
        margin-left: 4px;
        display: flex;
        align-items: center;
        .ben_icon, .ben_add {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        .ben_amount {
          flex: 1;
          margin: 0 6px;
          color: $white;
          font-size: 13px;
        }
      }
    }
    .go_home {
      width: 70px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 2px;
      background: url("../../assets/images/go_home.png") no-repeat;
      background-size: cover;
      color: $btnTextColor;
      font-size: 13px;
    }
  }
  .banner_box {
    img {
      width: 100%;
      height: 105px;
      margin-top: 4px;
      border-radius: 3px;
    }
  }
}

</style>
