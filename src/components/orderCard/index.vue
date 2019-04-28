<!--
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-28 15:29:53
 * @LastEditTime: 2019-04-28 16:12:04
 * @Description: 订单记录
 -->
 <template>
   <div class="order_card">
    <div class="order_top">
      <div class="order_no">编号：{{ `1710113874528` }}</div>
      <div class="order_time">{{ `2017-10-11 14:13:38` }}</div>
    </div>
    <div class="order_middle">
      <div class="order_img"></div>
      <div class="info">
        <div class="item">
          <div class="item_title">期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</div>
          <span>850054</span>
        </div>
        <div class="item">
          <div class="item_title">竞猜投入：</div>
          <span>850054</span>
        </div>
        <div class="item">
          <div class="item_title">我的竞猜：</div>
          <span>幸运飞艇-两面-冠亚和-单</span>
        </div>
        <div class="item">
          <div class="item_title">开奖号码：</div>
          <span>暂未揭晓</span>
        </div>
      </div>
    </div>
    <div class="order_bottom">
      <!-- <div class="order_time">编号：{{ `1710113874528` }}</div> -->
      <!-- <div class="oil">
        <img src="@/assets/images/oil.png" alt="">再接再厉
      </div> -->
      <div class="win">
        <img src="@/assets/images/order_USDT.png" alt="">恭喜赢得100 USDT
      </div>
      <div class="order_status" :class="{'pending': false }">等待揭晓...</div>
    </div>
   </div>
 </template>
    
 <script>
    
 export default {
   name: 'order_card',
   data() {
     return {
       
     }
   },
   created() {
     
   },
   methods: {
     
   }
 }
 </script>
 <style lang='scss'>
.order_card {
  width: 100%;
  min-height: 150px;
  background-color: rgba(255,255,255,.15);
  padding: 10px;
  .order_top {
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 15px;
    color: $white;
    font-size: 12px;
    border-bottom: .5px solid #644165;
  }
  .order_middle {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    .order_img {
      width: 90px;
      height: 75px;
      background: url("../../assets/images/order_big_img.png") no-repeat;
      background-size: cover;
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      color: $white;
      font-size: 12px;
      .item {
        display: flex;
        align-items: center;
        line-height: 22px;
      }
      .item:nth-child(3),
      .item:nth-child(4) {
        span {
          color: $textOrderRankColor;
        }
      }
    }
  }
  .order_bottom {
    @extend .order_top;
    border-top: .5px solid #644165;
    border-bottom: 0 solid #644165;
    padding-bottom: 5px;
    padding-top: 20px;
    .order_time {
      color: $textOrderRankColor;
    }
    .oil {
      display: flex;
      align-items: center;
      font-size: 12px;
      img {
        margin-right: 4px;
      }
    }
    .win {
      @extend .oil;
      color: $textOrderRankColor;
    }
    .order_status {
      width: 69px;
      height: 23px;
      line-height: 23px;
      text-align: center;
      border-radius: 11.5px;
      color: $textOrderRankColor;
    }
    .order_status.pending {
      border: solid .5px #ffcc00;
    }
  }
}
 </style>

