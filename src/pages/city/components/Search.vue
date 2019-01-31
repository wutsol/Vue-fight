<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    > <!-- 当输入后才会显示该列表 -->
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          无匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () { // 当没找到匹配项时才显示
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) { // 做一个节流处理,提高性能
        clearTimeout(this.timer)
      }
      if (!this.keyword) { // 当没有输入搜索项时显示为空
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => { // 遍历cities
            if (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search) // 加载搜索列表中的滑动条
  }
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
  .search-content
    z-index 1 // 覆盖search区域
    overflow hidden
    position absolute
    top 1.58rem
    bottom 0
    left 0
    right 0
    background-color: #ccc
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background-color: #FFF
</style>
