<template>
  <a-space>
    <a-button type="primary" @click="showModal">
      Open Modal
    </a-button>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </a-space>
</template>

<script>
export default {
  name: 'zhl-modal',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
}
</script>

<style lang="less" scoped>

</style>