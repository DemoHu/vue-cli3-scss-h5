<template>
  <div class="home">
    <div class="btn">信息按钮</div>
    <van-button type="info">信息按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
    }
  }
}
</script>
<style lang="scss">

</style>

