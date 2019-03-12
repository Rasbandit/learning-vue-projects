<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="quote"
      @click.native="deleteQuote(index)"
    >
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
import QuoteVue from './Quote.vue';

export default {
  components: {
    appQuote: QuoteVue,
  },
  props: ['quotes'],
  methods: {
    deleteQuote(index) {
      console.log(index);
      this.$emit('quoteDelete', index);
    },
  },
};
</script>

<style>
</style>
