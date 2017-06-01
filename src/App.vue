<template>
  <div style="height:100%;">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar v-if="isIndex"></tabbar>
  </div>
</template>

<script>
  import 'config/common.less'
  import Tabbar from './components/tabbar.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      Tabbar,
    },
    computed: {
      isIndex () {
        console.log(this.$route.path);
        let depath = this.$route.path === '/' || this.$route.path === '/login'
        return depath ? false : true
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
</style>
