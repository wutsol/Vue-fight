<template>
  <div> <!-- 使用组件时最外层必须包裹一个div -->
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key='item.id'>
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-text">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [ {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/fd61f19f3f1cc1.jpg_r_640x214_6ebc0c51.jpg',
        title: '常州旅游胜地',
        text: '最美多彩常州'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/fd61f19f3f1cc1.jpg_r_640x214_6ebc0c51.jpg',
        title: '常州旅游胜地',
        text: '最美多彩常州'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/fd61f19f3f1cc1.jpg_r_640x214_6ebc0c51.jpg',
        title: '常州旅游胜地',
        text: '最美多彩常州'
      } ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background-color: #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
      padding .1rem
  .item-info
    padding .1rem
    .item-title
      line-height .56rem
      font-size .32rem
      ellipsis()
    .item-text
      line-height .44rem
      color #ccc
      ellipsis()
</style>
