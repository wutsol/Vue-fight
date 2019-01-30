<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
      <p class="header-text">城市选择</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow hidden
    background-color: $bgColor
    height $headerHeight
    line-height $headerHeight
    .back-icon
      position absolute
      top 0
      left 0
      text-align center
      font-size .4rem
      color #fff // 去除使用router-link后字体颜色的变化
    .header-text
      font-size .32rem
      text-align center
      color #fff
</style>
