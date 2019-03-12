<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toLowercase | toUppercase }}</p>
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
        <hr>
        <app-list></app-list>
      </div>/
    </div>
  </div>
</template>

<script>
import List from './List.vue';
import fruitMixin from './fruitMixin.js';

export default {
  components: {
    appList: List,
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  mixins: [fruitMixin],
  data() {
    return {
      text: 'Hello there!',
    };
  },
};
</script>

<style>
</style>
