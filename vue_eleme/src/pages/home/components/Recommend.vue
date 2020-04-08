<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <!-- 由于ul标签内部只能有li标签，router可以用tag来实现模拟li标签 -->
      <!-- 这种写法可以使得ul标签正常编译，语义性更强更简洁（这段代码也可以用div来实现） -->
      <!-- 给router绑定动态的目标页面使其能够在点击不同项时都能跳转到对应的页面上 -->
        <router-link tag="li" :to="'/detail/' + item.id"
          class="item border-bottom" v-for="item of list" :key="item.id">
          <img class="item-img" :src='item.imgUrl' />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background-color #EAEAEA
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex: 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #CACACA
        ellipsis()
      .item-button
        margin-top .16rem
        background-color #ff9300
        padding 0 .2rem
        line-height .4rem
        border-radius .06rem
        color #fff
</style>
