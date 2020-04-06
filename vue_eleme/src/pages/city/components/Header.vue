<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height $headerHeight
    line-height $headerHeight
    position relative
    overflow hidden
    color #FFFFFF
    text-align center
    background-color $bg-color
    font-size .32rem
    .header-back
    position absolute
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
