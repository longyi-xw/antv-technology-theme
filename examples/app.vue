<template>
  <a-space id="app">
    <test-button/>
  </a-space>
</template>

<script>
import TestButton from './components/button.vue'

export default {
  components: { TestButton },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
#app {
  padding: 10px;
}
</style>