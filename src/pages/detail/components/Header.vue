<template>
  <div class="header">
    <div class="header-abs" v-show="showAbs">
      <router-link tag="div" to="/" class="iconfont header-abs-back">&#xe624;</router-link>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <!-- 动态绑定style，通过修改透明度增加渐隐渐现的效果 -->
      <router-link tag="div" to="/" class="iconfont header-fixed-back">
        &#xe624;
      </router-link>
      <p class="header-fixed-text">景点详情</p>
    </div>
  </div>
</template>

<script> // 该组件实现detail界面中屏幕下滑时header渐隐渐现的效果
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop // 获得距离页面顶部的距离
      if (top > 60) {
        let opacity = top / 140 // 通过修改透明度增加渐隐渐现的效果
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () { // 由于之前使用了keep-alive，该钩子会存在
    window.addEventListener('scroll', this.handleScroll) // 当滑动到一定距离时使header-abs隐藏
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    background-color: $bgColor
    height $headerHeight
    line-height $headerHeight
    .header-fixed-back
      position absolute
      top 0
      left 0
      text-align center
      font-size .4rem
    .header-fixed-text
      font-size .32rem
      text-align center
      color #fff
</style>
