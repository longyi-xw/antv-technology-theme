<template>
  <a-space id="app" direction="vertical">
    <zhl-button/>
    <a-divider/>
    <zhl-menu/>
    <a-divider/>
    <zhl-input/>
    <a-divider/>
    <zhl-select/>
    <a-divider/>
    <zhl-empty/>
    <a-divider/>
    <zhl-tab/>
    <a-divider/>
    <zhl-pagination/>
    <a-divider/>
    <zhl-table/>
    <a-divider/>
    <zhl-modal/>
    <a-divider/>
    <zhl-tree/>
  </a-space>
</template>

<script>
import ZhlButton from './components/button.vue'
import ZhlMenu from './components/menu.vue'
import ZhlInput from './components/input.vue'
import ZhlSelect from './components/select.vue'
import ZhlEmpty from './components/empty.vue'
import ZhlTab from './components/tab.vue'
import ZhlTable from './components/table.vue'
import ZhlPagination from './components/pagination.vue'
import ZhlModal from './components/modal.vue'
import ZhlTree from './components/tree.vue'

export default {
  components: { ZhlTree, ZhlModal, ZhlPagination, ZhlTable, ZhlTab, ZhlEmpty, ZhlSelect, ZhlInput, ZhlMenu, ZhlButton },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
#app {
  padding: 10px;
}

body {

}
</style>