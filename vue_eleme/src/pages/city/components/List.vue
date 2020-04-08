<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
          v-for="item of hot"
          :key="item.id"
          @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
          v-for="innerItem of item"
          :key="innerItem.id"
          @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    // 修改缓存并跳转
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    // 获取修改城市的方法
    ...mapMutations(['changeCity'])
  },
  mounted () {
	  // 创建BScroll实例
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    // 当letter改变时将对应的字母开头的城市列表滚动到可视区内
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &::before
      border-color #ccc
    &::after
      border-color #ccc
  .border-bottom
    &::before
      border-color #ccc
    &::after
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    right 0
    left 0
    bottom 0
    .title
      line-height .54rem
      background-color #EAEAEA
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        width 33.33%
        float left
        .button
          text-align center
          padding .1rem 0
          border-radius .06rem
          margin .1rem
          border .02rem solid #ccc
    .item-list
      .item
        line-height .76rem
        padding .2rem
</style>
