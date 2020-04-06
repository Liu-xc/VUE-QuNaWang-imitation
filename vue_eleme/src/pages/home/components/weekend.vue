<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl' />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
        title: '药王谷',
        desc: '药王谷所在区域盛产中药材，山林遍生百年药树，山上居民一直有供奉药王菩萨的习俗，药王谷因此得名。'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',
        title: '药王谷',
        desc: '药王谷所在区域盛产中药材，山林遍生百年药树，山上居民一直有供奉药王菩萨的习俗，药王谷因此得名。'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/e0/e055cb2c79da8f33.water.jpg_200x200_93193a93.jpg',
        title: '药王谷',
        desc: '药王谷所在区域盛产中药材，山林遍生百年药树，山上居民一直有供奉药王菩萨的习俗，药王谷因此得名。'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background-color #EAEAEA
    text-indent .2rem
    margin-top .2rem
  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 33.9%
    .item-img
      width 100%
      height auto
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #CACACA
      ellipsis()
</style>
