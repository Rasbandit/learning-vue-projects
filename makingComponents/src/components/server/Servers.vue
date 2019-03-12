<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="server in servers"
        @click="selectServer(server.id)"
      >Server #{{ server.id }} Status: {{server.status}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    servers: Array,
    selectServer: Function
  }
};
</script>

<style scoped>
div {
  border: 1px solid aquamarine;
}
</style>
