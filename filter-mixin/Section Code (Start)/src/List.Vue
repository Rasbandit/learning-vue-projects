<template>
  <div class="container">
    <h1>Filters & Mixins</h1>
    <hr>
    <input
      v-model="filterText"
      type="text"
    >
    <ul>
      <li
        v-for="fruit in filtedFruits"
        :key="fruit"
      >
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
import fruitMixin from './fruitMixin.js';

export default {
  mixins: [fruitMixin],
};
</script>

<style>
</style>
