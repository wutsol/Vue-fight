<template>
  <div id="app">
    <keep-alive exclude="Detail">  <!-- 将路由中的内容放到内存中,exclude是为了防止keep-alive组件使用后对于新的界面不会重新发送ajax请求的问题，另一种解决方法是使用activated钩子(见Home.vue) -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
