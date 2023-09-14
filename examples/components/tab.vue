<template>
  <a-space>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Tab 1">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3" disabled>
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>

    <a-tabs default-active-key="2">
      <a-tab-pane key="1">
      <span slot="tab">
        <a-icon type="apple" />
        Tab 1
      </span>
        Tab 1
      </a-tab-pane>
      <a-tab-pane key="2">
      <span slot="tab">
        <a-icon type="android" />
        Tab 2
      </span>
        Tab 2
      </a-tab-pane>
    </a-tabs>

    <a-tabs type="card">
      <a-tab-pane key="1" tab="Tab 1">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
  </a-space>
</template>

<script>
export default {
  name: 'zhl-tab'
}
</script>

<style lang="less" scoped>

</style>