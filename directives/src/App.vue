<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-text="'heyo'"></p>
        <p v-html="'heyo'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-highlight:background.delayed="'red'">
          this is an example
        </p>
        <p v-local-highlight:background="'lightgreen'">
          this is an example
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        console.log(binding);
        let delay = 0;
        if (binding.modifiers.delayed) {
          delay = 3000;
        }
        setTimeout(() => {
          if (binding.arg === 'background') {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      },
    },
  },
};
</script>

<style>
</style>
