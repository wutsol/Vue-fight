<template>
  <div class="wraper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="siper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 加载轮播时的点状图
        loop: true, // 实现循环播放
        autoplay: 3000 // 每3秒自动滚动
      }
    }
  },
  computed: { // 解决轮播图加载后不是第一张图片的问题
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wraper >>> .swiper-pagination-bullet-active // 使轮播点状为白色
    background-color #fff
  .wraper // 防止页面加载时有明显跳动
    overflow hidden
    width 100%
    height 0
    padding-bottom 32%
    background-color #ccc
    .siper-img
      width 100%
</style>
