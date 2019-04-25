<template>
  <div class="news_notice">
    <div class="title">最新动态</div>
    <div class="news_list">
      <div v-for="(item, index) in newsList" :key="index" class="item_news">
        <img :src="item.avatar" class="avatar">
        <div class="nick_name">{{ item.nickName }}</div>
        <div class="amount">竞猜投入{{ item.amount }}金币</div>
      </div>
    </div>
  </div>
</template>
   
<script>
   
export default {
  name: 'news_notice',
  data() {
    return {
      newsList: [
        { avatar: require('../../assets/images/img_avatar.png'), nickName: '小雨', amount: '550' },
        { avatar: require('../../assets/images/img_avatar.png'), nickName: '小雨', amount: '1350' },
        { avatar: require('../../assets/images/img_avatar.png'), nickName: '小雨', amount: '350' },
        { avatar: require('../../assets/images/img_avatar.png'), nickName: '小雨', amount: '5350' },
        { avatar: require('../../assets/images/img_avatar.png'), nickName: '小雨', amount: '150' }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>
<style lang='scss'>
.news_notice {
  width: 100%;
  min-height: 200px;
  background-color: rgba(41, 6, 15, .5);
  border-radius: 5px;
  margin-top: 13px;
  padding: 15px 25px;
  margin-bottom: 48px;
  .title {
    width: 100%;
    height: 9px;
    margin-bottom: 22px;
    line-height: 9px;
    text-align: center;
    color: #ffe9ac;
    font-size: 15px;
    background: url("../../assets/images/news_notice.png") no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .news_list {
    .item_news {
      display: flex;
      align-items: center;
      color: #dcbfc3;
      font-size: 12px;
      height: 35px;
      .avatar {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #105e8b;
      }
      .nick_name {
        margin-left: 5px;
        width: 30%;
      }
      .amount {
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>
