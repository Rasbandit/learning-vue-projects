<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span>
        <slot></slot>
      </span>
    </div>
    <hr>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: String
  }
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px solid black;
  padding: 30px;
  margin: auto;
  text-align: center;
}

h2 {
  color: orangered;
}

.title {
  font-style: italic;
}
</style>
