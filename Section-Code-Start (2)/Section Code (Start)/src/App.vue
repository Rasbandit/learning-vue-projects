<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <appQuote>
          <h2 slot="title">The QuoteVue</h2>
          <p>Heyo</p>
        </appQuote>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteVue from "./components/Quote.vue";

export default {
  components: {
    appQuote: QuoteVue
  }
};
</script>

<style>
</style>
