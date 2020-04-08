<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>
<!-- 在transition组件执行动画的过程中VUE会自动为DOM对象绑定一些特定的类
 可以通过改写这些特定的类来实现自己想要的渐隐渐显效果-->
<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity 0
  .v-enter-active, .v-leave-active
    transition opacity .5s
</style>
