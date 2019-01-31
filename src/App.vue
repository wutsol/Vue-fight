<template>
  <div id="app">
    <keep-alive>  <!-- 将路由中的内容放到内存中 -->
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
