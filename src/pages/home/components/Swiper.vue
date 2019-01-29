<template>
  <div class="wraper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperlist" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 加载轮播时的点状图
        loop: true // 实现循环播放
      },
      swiperlist: [{
        id: '0001',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/34be2916bec81475a3306c4bdee7cc48.jpg_890x330_666e78c4.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/082459d561042a0d196a0e02c55f28a9.jpg_890x330_ad732bd6.jpg'
      }]
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
    padding-bottom 37.08%
    background-color #ccc
    .siper-img
      width 100%
</style>
