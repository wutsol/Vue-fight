<template>
  <div> <!-- 自定义的组件需要外面包一个div标签 -->
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '' // 传递给List组件
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json') // 无法正常导入，原因应该是代码过长括号匹配出错
        .then(this.getCityInfoSuc)
    },
    getCityInfoSuc (res) {
      res = res.data
      if (res.ret && res.data) { // 打字都给打错咯
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
