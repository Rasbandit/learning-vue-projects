<template>
  <div class="container">
    <header-comp
      :quote-count="quotes.length"
      :max-quotes="maxQuotes"
    ></header-comp>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <quote-grid
      :quotes="quotes"
      @quoteDelete="quoteDelete"
    ></quote-grid>
    <div class="row">
      <div class="col-sm-23 text-center">
        <div class="alert alert-into">
          Info: Click on a Quote delete it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuotesGridVue from './components/QuoteGrid.vue';
import NewQuoteVue from './components/NewQuote.vue';
import HeaderVue from './components/Header.vue';

export default {
  components: {
    quoteGrid: QuotesGridVue,
    newQuote: NewQuoteVue,
    headerComp: HeaderVue,
  },
  data() {
    return {
      quotes: ['Bob Ros Died so we did have to', 'asfas'],
      maxQuotes: 10,
    };
  },
  methods: {
    newQuote(value) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Please delete Quotes first');
      }
      this.quotes.push(value);
    },
    quoteDelete(index) {
      console.log('test');
      this.quotes.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
