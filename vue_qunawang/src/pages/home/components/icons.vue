<template>
  <div class="icons">
    <!-- 使用了awesome-swipper插件，可以自动实现很好的图片滚动效果 -->
    <!-- option是插件的配置属性 -->
    <swiper :options="swiperOption">
      <!-- 每页包裹一个swiper-slide -->
      <swiper-slide v-for="page of pages" :key="page.id">
        <div class="icon" v-for="item of page"
        :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-imgcontent" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      // 为swiper配置属性
      swiperOption: {
        // 是否自动滚动
        autoplay: false
      }
    }
  },
  computed: {
    // 通过计算将首页的图标进行分页，每页八个
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>>.swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      position  relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-imgcontent
          display block
          height 100%
          margin 0 auto
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        line-height .44rem
        height .44rem
        color $darkTextColor
        text-align center
        ellipsis()
</style>
