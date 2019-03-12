<template>
  <div>
    <p>Server Status: {{status }}</p>
    <hr>
    <button @click="changeStatus">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>

<style lang="scss">
</style>
