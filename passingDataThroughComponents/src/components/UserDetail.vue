<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetFn()">Reset name</button>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      default: "Tim Allen"
    },
    resetFn: {
      type: Function
    },
    userAge: Number
  },

  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
