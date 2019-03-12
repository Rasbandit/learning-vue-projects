<template>
  <div class="col-xs-12 col-sm-6">
    <h1>Server ID: {{ server.id }}</h1>
    <h2>Status: {{ server.status }}</h2>
    <input
      v-model="input"
      type="text"
    >
    <button @click="updateStatus(server.id, input)">
      Update
    </button>
  </div>
</template>

<script>
export default {
  props: {
    server: {
      type: Object,
      default() {
        return { name: 'todd' };
      },
    },
    updateStatus: Function,
  },
  data() {
    return {
      input: '',
    };
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
