<template>
  <div class="home">
    <div class="btn">信息按钮</div>
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
.home {
  .btn {
    width: 1.333333rem;
    height: .666667rem;
    background-color: pink;
    font-size: .213333rem;
  }
}
</style>

