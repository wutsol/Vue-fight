<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市
    </div>
    <router-link to="/city">  <!-- 点击时跳转到city界面 -->
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex' // vuex高级一些的API
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // 将vuex公用数据映射给计算属性并命名为city,用this.city取代html中this.$store.state.city
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background-color $bgColor
    color #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex: 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background-color #fff
      border-radius .1rem
      color #ccc
    .header-right
      min-width: 1.04rem // 防止城市名过长导致页面布局混乱
      padding 0 .1rem
      float: right
      text-align center
      color #fff // 去除使用router-link后字体颜色的变化
      .arrow-icon
        font-size .24rem
</style>
