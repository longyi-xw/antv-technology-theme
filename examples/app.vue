<template>
  <a-space id="app" direction="vertical">
    <zhl-button/>
    <a-divider/>
    <zhl-menu/>
    <a-divider/>
    <zhl-input/>
    <a-divider/>
    <zhl-select/>
  </a-space>
</template>

<script>
import ZhlButton from './components/button.vue'
import ZhlMenu from './components/menu.vue'
import ZhlInput from './components/input.vue'
import ZhlSelect from './components/select.vue'

export default {
  components: { ZhlSelect, ZhlInput, ZhlMenu, ZhlButton },
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