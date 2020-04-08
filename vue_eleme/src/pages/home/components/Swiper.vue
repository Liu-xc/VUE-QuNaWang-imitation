<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
     <!-- slides -->
     <swiper-slide v-for="item of list" :key="item.id">
       <img class="swiper-img"  :src="item.imgUrl" />
     </swiper-slide>
     <!-- Optional controls -->
     <!-- swiper插件的可选项，加上可以显示当前页在队列中的位置 -->
     <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
   </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: 'true',
        autoplay: false
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background white !important
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25%
    .swiper-img
      width 100%
</style>
