<template>
  <div> <!-- 使用组件时最外层必须包裹一个div -->
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key='item.id'>
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background-color: #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      height 1.7rem
      width 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0 // 使省略号正常显示
      .item-title
        line-height .56rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .44rem
        color #ccc
        ellipsis()
      .item-btn
        border-radius .06rem
        background-color: #ff9300
        line-height .44rem
        margin-top .16rem
        padding 0 .2rem
        color #fff
</style>
