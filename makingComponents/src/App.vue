<template>
  <div class="container">
    <AppHeader></AppHeader>
    <hr>
    <div class="row">
      <AppServers :servers="servers" :selectServer="selectServer"></AppServers>
      <AppServerStatus :server="selectedServer" :updateStatus="updateServerStatus"></AppServerStatus>
    </div>
    <hr>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./components/shared/Header.vue";
import AppFooter from "./components/shared/Footer.vue";
import AppServers from "./components/server/Servers.vue";
import AppServerStatus from "./components/server/ServerStatus.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppServers,
    AppServerStatus
  },
  data() {
    return {
      servers: [
        { id: 1, status: "Critical" },
        { id: 2, status: "Normal" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" },
        { id: 5, status: "Not Responding" }
      ],
      selected: 1
    };
  },
  methods: {
    selectServer(input) {
      this.selected = input;
    },
    updateServerStatus(id, status) {
      this.servers = this.servers.map(server => {
        if (server.id === id) return Object.assign(server, { status: status });
        return server;
      });
    }
  },
  computed: {
    selectedServer() {
      return this.servers.find(server => server.id === this.selected);
    }
  }
};
</script>

<style>
</style>
