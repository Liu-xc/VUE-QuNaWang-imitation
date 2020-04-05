<template>
  <div class="wrapper">
 <swiper :options="swiperOption">
     <!-- slides -->
     <swiper-slide v-for="item of swiperList" :key="item.id">
       <img class="swiper-img"  :src="item.imgUrl" />
     </swiper-slide>
     <!-- Optional controls -->
     <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
   </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: 'true'
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5d7c1bffddc1a75cbfb59a389e68583f.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c95ee8fe1700026cad03bc4852112592.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background red !important
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25%
    .swiper-img
      width 100%
</style>
