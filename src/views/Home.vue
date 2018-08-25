<template>
  <div class="home">
    我是home组件
    <h3>{{ 1528894086450 | formatDate('yyyy年MM月dd日HH:mm:ss') }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.home{
  color:$mask-rgba;
}
</style>

