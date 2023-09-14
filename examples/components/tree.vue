<template>
  <a-space>
    <a-tree
        :show-line="true"
        :show-icon="true"
        :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
    >
      <a-icon slot="icon" type="carry-out"/>
      <a-tree-node key="0-0">
        <a-icon slot="icon" type="carry-out"/>
        <span slot="title" style="color: #1890ff">parent 1</span>
        <a-tree-node key="0-0-0" title="parent 1-0">
          <a-icon slot="icon" type="carry-out"/>
          <a-tree-node key="0-0-0-0" title="leaf">
            <a-icon slot="icon" type="carry-out"/>
          </a-tree-node>
          <a-tree-node key="0-0-0-1" title="leaf">
            <a-icon slot="icon" type="carry-out"/>
          </a-tree-node>
          <a-tree-node key="0-0-0-2" title="leaf">
            <a-icon slot="icon" type="carry-out"/>
          </a-tree-node>
        </a-tree-node>
        <a-tree-node key="0-0-1" title="parent 1-1">
          <a-icon slot="icon" type="carry-out"/>
          <a-tree-node key="0-0-1-0" title="leaf">
            <a-icon slot="icon" type="carry-out"/>
          </a-tree-node>
        </a-tree-node>
        <a-tree-node key="0-0-2" title="parent 1-2">
          <a-icon slot="icon" type="carry-out"/>
          <a-tree-node key="0-0-2-0" title="leaf">
            <a-icon slot="icon" type="carry-out"/>
          </a-tree-node>
          <a-tree-node key="0-0-2-1" title="leaf">
            <a-icon slot="icon" type="carry-out"/>
            <a-icon slot="switcherIcon" type="form"/>
          </a-tree-node>
        </a-tree-node>
      </a-tree-node>
    </a-tree>
  </a-space>
</template>

<script>
export default {
  name: 'zhl-tree'
}
</script>

<style lang="less" scoped>

</style>