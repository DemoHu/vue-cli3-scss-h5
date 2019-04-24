<template>
  <div id="app">
    <router-view v-if="isRouterAkive" @childGetInfo="childGetInfo" />
  </div>
</template>
<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAkive: true
    }
  },
  created() {
    // this.getUserInfo()
  },
  methods: {
    /**刷新路由
     * inject: ['reload'],
     */
    reload() {
      this.isRouterAkive = false
      this.$nextTick(() => {
        this.isRouterAkive = true
      })
    },
    getUserInfo() {
      this.$api.getUserInfo().then(res => {
        this.$store.commit('SET_LOGIN', true) //更新登录状态
        this.$store.commit('SET_INFO', res) //更新登录状态
        if (this.$route.path === '/login') {
          this.$router.push({ path: '/account/accountList' })
        }
      }).catch(err => {
        this.$store.commit('SET_LOGIN', false) //更新登录状态
        this.$store.commit('SET_INFO', {})
        this.$router.push({ path: '/login' })
      })
    },
    // 子组件调用父组件方法 this.$emit('childGetInfo', {})
    childGetInfo(info) {
      this.getUserInfo()
    }
  }
}
</script>

<style lang="scss">

</style>
