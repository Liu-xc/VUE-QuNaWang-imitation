<template>
  <div>
    <div class="search">
      <input type="text" class="search-input"
        placeholder="输入城市名或拼音" v-model="keyword"/>
    </div>
    <div class="search-content"
      ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list" :key="item.id"
          class="search-item border-bottom"
          @click="handleCityClick(item.name)"
          >{{item.name}}</li>
        <li class="search-item border-bottom"
          v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
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
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      // 管理定时器
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果输入的关键字为空
      // 则将结果列表清空并直接返回
      if (!this.keyword) {
        this.list = []
        return
      }
      // 设置定时器使得即使在输入很快得情况下也不会频繁地发送请求
      // 能够起到优化效果
      this.timer = setTimeout(() => {
        const result = []
        // 遍历城市列表，如果能在城市的拼音或名字中包含有关键词
        // 就将该城市加入到结果列表
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
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
  methods: {
    handleCityClick (city) {
      // 调用改变城市方法修改缓存中的城市数据
      this.changeCity(city)
      // 路由跳转
      this.$router.push('/')
    },
    // 从store公共数据池中获取changeCity方法
    ...mapMutations(['changeCity'])
  },
  mounted () {
    // 创建BScroll实例，获得更好的滑动体验
    this.scroll = new BScroll(this.$refs['search'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background-color $bg-color
    .search-input
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
      padding 0 .1rem
      box-sizing border-box
  .search-content
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    background-color #EAEAEA
    z-index 1
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background-color #FFFFFF
</style>
