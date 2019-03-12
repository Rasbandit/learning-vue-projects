<template>
  <div class="row">
    <form>
      <div class="col-sm8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <label>Quote</label>
        <textarea
          v-model="quote"
          class="form-control"
          row="3"
        ></textarea>
      </div>
      <div class="col-sm8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <button
          class="btn btn-primary"
          @click.prevent="createNew"
        >
          Add Quote
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: '',
    };
  },
  methods: {
    createNew() {
      console.log(this.quote);
      this.$emit('quoteAdded', this.quote);
      this.quote = '';
    },
  },
};
</script>

<style>
</style>
