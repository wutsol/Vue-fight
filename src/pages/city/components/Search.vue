<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .2rem
    background-color: $bgColor
    .search-input
      box-sizing border-box
      width 100%
      padding 0 .1rem
      border-radius .06rem
      height .62rem
      line-height .62rem
      text-align center
      color #666
</style>
