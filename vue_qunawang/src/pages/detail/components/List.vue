<template>
  <div>
    <div class="item"
    v-for="(item, index) of list"
    :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归组件，在组件内部递归地调用自己，
      需要为组件命名，且传入的数据格式能够支持递归 -->
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position relative
    left .06rem
    top .06rem
    display inline-block
    width .36rem
    height .36rem
    background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png)
    margin-right .1rem
    background-size .4rem 3rem
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .6rem
  .item-children
    padding 0 .2rem
</style>
