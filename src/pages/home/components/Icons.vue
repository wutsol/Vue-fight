<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class="icon-image">
            <img class="icon-image-content" :src="item.imgUrl">  <!-- src前必须加冒号 -->
          </div>
          <p class="icon-text">{{item.text}}</p>
        </div>
      </swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '热门景点'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '热门景点'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        text: '热门景点'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        text: '热门景点'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '热门景点'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '热门景点'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '热门景点'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '热门景点'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '热门景点'
      }]
    }
  },
  computed: { // 实现多余的icon出现在第二张page上
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container // 实现icons区域整体可轮播
    height 0
    padding-bottom 50%
  .icon
    float left
    position relative
    width 25%
    height 0
    padding-bottom 25%
    .icon-image
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box // 限制盒子大小
      padding .1rem
      .icon-image-content
        display block // 图片居中
        margin 0 auto
        height 100% //缩小图片
    .icon-text
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      color $darkTextColor
      ellipsis() // 实现文字过多时显示省略号的效果
</style>
