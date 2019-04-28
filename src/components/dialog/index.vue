<!--
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-28 14:31:44
 * @LastEditTime: 2019-04-28 14:57:00
 * @Description: 弹窗组件
 -->
<template>
  <div class="my_dialog">
    <van-dialog v-model="tipsDialog" :show-confirm-button="false" class-name="tips_dialog">
      <div v-if="title" class="tips_dialog_title">{{ title }}</div>
      <div class="tips_dialog_body">
        <slot name="body"></slot>
      </div>
      <div class="tips_dialog_footer">
        <slot name="footer"></slot>
      </div>
    </van-dialog>
  </div>
</template>
   
<script>
   
export default {
  name: 'my_dialog',
  props: {
    title: {
      type: null,
      default: ''
    }
  },
  data() {
    return {
      tipsDialog: true
    }
  },
  created() {
    
  },
  methods: {
    
  }
}
</script>
<style lang='scss'>
.tips_dialog {
  width: 329px;
  min-height: 227px;
  padding: 0 35.7px;
  background: url("../../assets/images/tips_dialog.png") no-repeat;
  background-color: transparent !important;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $white;
  justify-content: space-between;
  .van-dialog__content {
    width: 329px;
    min-height: 227px;
    padding: 0 35.7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $white;
    justify-content: space-between;
    
    .tips_dialog_title {
      width: 176px;
      height: 41.5px;
      line-height: 41.5px;
      text-align: center;
      background: url("../../assets/images/timer_bg.png") no-repeat;
      background-size: cover;
      font-size: 20px;
      color: $white;
    }
    .tips_dialog_body {
      width: 100%;
    }
    .tips_dialog_footer {
      width: 100%;
      margin-bottom: 20px;
      margin-top: 10px;
    }
  }
}
</style>
