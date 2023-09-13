<template>
  <a-space>
    <a-select default-value="lucy" style="width: 120px">
      <a-select-option value="jack">
        Jack
      </a-select-option>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
      <a-select-option value="disabled" disabled>
        Disabled
      </a-select-option>
      <a-select-option value="Yiminghe">
        yiminghe
      </a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" disabled>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" loading>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
  </a-space>
</template>

<script>
export default {
  name: 'zhl-select'
}
</script>

<style lang="less" scoped>

</style>