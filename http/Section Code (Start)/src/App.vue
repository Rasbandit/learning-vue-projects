<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input
            v-model="user.username"
            type="form-control"
          >
        </div>
        <div class="form-group">
          <label for="">Mail</label>
          <input
            v-model="user.email"
            type="form-control"
          >
        </div>
        <button
          class="btn btn-primary"
          @click="submit"
        >
          Submit
        </button>
        <button
          class="btn btn-primary"
          @click="getData"
        >
          Get Data
        </button>
        <br><br>
        <ul>
          <li
            v-for="u in users"
            :key="u.email"
            class="list-group-item"
          >
            {{ u.username }} - {{ u.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
      },
      users: [],
    };
  },
  methods: {
    submit() {
      this.$http.post('', this.user).then(response => console.log(response) && null);
    },
    getData() {
      this.$http
        .get('')
        .then(responseJSON => responseJSON.json())
        .then(response => {
          const keys = Object.keys(response);
          this.users = keys.map(key => response[key]);
        });
    },
  },
};
</script>

<style>
</style>
