<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
      <!-- VUE中一般不使用a标签来跳转 -->
      <!-- 路由目标地址需要在router文件夹的index文件中进行注册 -->
      <!-- 由此指明将要跳转的页面或组件 -->
      <router-link to='/city'>
        <div class="header-right">{{this.city}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // mapState是vuex对于state的语法糖
    // 可以方便地使用展开语法获取存储在公用数据池store中的数据city
    // 并且可以实现数据在非同源子组件之间同步
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  // 引入stylus语法的变量文件
  @import '~styles/varibles.styl'
  .header
    display flex
    background $bg-color
    line-height $headerHeight
    color #ff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      background #fff
      border-radius .1rem
      margin-top .12rem
      height .64rem
      line-height .64rem
      margin-left .2rem
      color #CACACA
      padding-left .2rem
    .header-right
      min-width 1.04rem
      padding  0 .1rem
      float right
      text-align center
      color white
      .arrow-icon
        font-size .24rem
        margin-left -.04rem
</style>
