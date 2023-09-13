<template xmlns="a-menu-item">
  <a-space>
    <a-menu
        mode="inline"
        v-model="selectedKeys"
        @click="handleMenuItemClick"
        :inline-collapsed="collapsed"
        :inlineIndent="15"
    >
      <a-button @click="handleCollapseClick" class="collapse-button"
                :icon="collapsed ? 'menu-unfold': 'menu-fold'" type="primary">
      </a-button>
      <a-divider/>
      <a-menu-item v-for="menu in menus" :key="menu.icon">
        <a-icon class-name="anticon img-ant-icon" :type="menu.icon"/>
        <span>{{ menu.title }}</span>
      </a-menu-item>
    </a-menu>

    <a-menu v-model="selectedKeys" mode="horizontal">
      <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
        ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
        >Navigation Four - Link</a
        >
      </a-menu-item>
    </a-menu>
  </a-space>
</template>

<script>
export default {
  name: "zhl-menu",
  data() {
    return {
      collapsed: false,
      selectedKeys: [],
      menus: [
        { title: '菜单一', icon: "android" },
        { title: "菜单二", icon: 'apple' }
      ]
    }
  },
  methods: {
    handleMenuItemClick() {

    },
    handleCollapseClick() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="less" scoped>

</style>