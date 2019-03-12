<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>{{userAge}}</p>
    <input type="text" v-model="input">
    <button @click="updateAge(+input)">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    userAge: Number,
    updateAge: Function
  },
  data: {
    input: 0
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
