<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title boder-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children">
        <detail-list :list="item.children" class="item-chlidren"></detail-list>
      </div>
    </div>
  </div>
</template>

<script> // 该组件实现递归组件的使用，即item有次级list时复用组件进行加载
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-title-icon
    display inline-block
    position relative
    left .06rem
    top .06rem
    width .36rem
    height .36rem
    background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right .1rem
    background-size .4rem 3rem
  .item-chlidren
    padding 0 .2rem
</style>
