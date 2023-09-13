<template>
  <a-space>
    <a-input placeholder="please enter"/>
    <a-input disabled placeholder="please enter"/>
    <a-input-search placeholder="input search text"/>
    <a-textarea
        placeholder="Controlled autosize"
        :auto-size="{ minRows: 3, maxRows: 5 }"
    />
  </a-space>
</template>

<script>
export default {
  name: "zhl-input"
}
</script>

<style lang="less" scoped>

</style>