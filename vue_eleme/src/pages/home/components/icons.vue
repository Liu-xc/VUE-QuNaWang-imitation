<template>
  <div class="icons">
    <swiper :options="swiperOption">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: 'true'
      },
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        desc: '熊猫基地'
      }, {
        id: '0003',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
        desc: '都江堰'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        desc: '川剧变脸'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        desc: '滑雪'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      }, {
        id: '0008',
        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
        desc: '成都海昌'
      }, {
        id: '0009',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/02bbb71bd1f629c2348d0c97ef82c129.png',
        desc: '青城山'
      }, {
        id: '0010',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/02bbb71bd1f629c2348d0c97ef82c129.png',
        desc: '西岭雪山'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
        padding .1srem
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
