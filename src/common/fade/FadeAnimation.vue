<template>
  <transition>
    <slot></slot> <!-- 将gallary轮播图作为插槽 -->
  </transition>
</template>

<script>
export default { // 该组件为轮播图放大时加载动画效果
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity 0
  .v-enter-active, .v-leave-active
    transition opacity .5s
</style>
