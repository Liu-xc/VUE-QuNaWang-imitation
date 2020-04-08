<template>
  <div>
    <home-header></home-header>
    <!-- 为子组件传递数据 -->
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// 引入首页的各个部分组件
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  // 注册组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    // 使用axios异步请求获取首页组件所需要的数据
	// api的指向在config目录下的index文件中修改
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    // 请求返回的回调函数，接受请求的返回数据作为参数
    getHomeInfoSucc (res) {
      res = res.data
      // 如果返回值正确并且有数据项就将Home页面的数据更新
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  // 在挂载之后记录当前城市名并请求新的数据
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // activated()：在vue对象存活的情况下，进入当前存在activated()函数的页面时，
  // 一进入页面就触发；可用于初始化页面数据等
  // 如果更新后的城市名与记录的旧的城市名不同就发送一次数据请求，否则不发送
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style></style>
