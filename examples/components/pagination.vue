<template>
  <a-space>
    <a-pagination :default-current="6" :total="500"/>
    <a-divider type="vertical"/>
    <a-pagination
        v-model="current"
        :page-size-options="pageSizeOptions"
        :total="total"
        show-size-changer
        :page-size="pageSize"
        @showSizeChange="onShowSizeChange"
    >
      <template slot="buildOptionText" slot-scope="props">
        <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
        <span v-if="props.value === '50'">全部</span>
      </template>
    </a-pagination>
    <a-divider type="vertical"/>
    <a-pagination show-quick-jumper :default-current="2" :total="500"/>
  </a-space>
</template>

<script>
export default {
  name: 'zhl-pagination',
  data() {
    return {
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 50,
    };
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
    },
  },
}
</script>

<style lang="less" scoped>

</style>