<template>
  <div class="list" ref="wrapper"> <!-- ref获取DOM -->
    <div>
      <div class="area">
        <div class="title boder-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{this.city}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title boder-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id"
              @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title boder-topbottom">
          {{key}}
        </div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll' // 导入better-scroll插件，详情见github
import { mapState, mapMutations } from 'vuex' // vuex高级一些的API
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String // 获取传递过来的letter
  },
  computed: {
    ...mapState(['city']) // 将vuex公用数据映射给计算属性并命名为city,用this.city取代html中this.$store.state.city
  },
  methods: {
    handleCityClick (city) { // 使用这个函数后会导致点击Alphabet中的字母时无法跳转到对应list(已完善)
      this.changeCity(city) // 相当于this.$store.commit('changeCity', city)
      this.$router.push('/') // 跳转到Home界面
    },
    ...mapMutations(['changeCity']) // 该方法相当于commit一个请求
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0] // 借助refs获得目标区域DOM元素
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .boder-topbottom // 使1像素边框颜色加深
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
  .title
    background-color: #eee
    line-height .54rem
    padding-left .2rem
    color #666
    font-size .26rem
  .button-list
    overflow hidden // 触发BFC
    padding .1rem .6rem .1rem .1rem // 给右侧字母排序留空间
    .button-wrapper
      float left
      width 33.3%
      .button
        border-radius .06rem
        border .02rem solid #ccc
        padding .1rem 0
        text-align center
        margin .1rem
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>
