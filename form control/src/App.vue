<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              id="email"
              v-model="userData.email"
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model.lazy="userData.password"
              type="password"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              id="age"
              v-model.lazy="userData.age"
              type="number"
              class="form-control"
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
            id="message"
            v-model="message"
            rows="5"
            class="form-control"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                id="sendmail"
                v-model="sendMail"
                type="checkbox"
                value="SendMail"
              > Send Mail
            </label>
            <label for="sendInfomail">
              <input
                id="sendInfomail"
                v-model="sendMail"
                type="checkbox"
                value="SendInfoMail"
              > Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
              id="male"
              v-model="gender"
              type="radio"
              value="Male"
            > Male
          </label>
          <label for="female">
            <input
              id="female"
              v-model="gender"
              type="radio"
              value="Female"
            > Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
            id="priority"
            v-model="selectedPriority"
            class="form-control"
          >
            <option
              v-for="priority in priorities"
              :key="priority"
              :selected="priority === Medium"
            >
              {{ priority }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <switch-comp v-model="data"></switch-comp>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary"
            @click.prevent="submit"
          >
            Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div
v-if="isSubmitted"
         class="row"
>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }} </p>
            <p>Age: {{ userData.age }} </p>
            <p>Message: </p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendMail">
                {{ item }}
              </li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './Swich.vue';

export default {
  components: {
    switchComp: Switch,
  },
  data() {
    return {
      userData: {
        email: '',
        password: '',
        age: 26,
      },
      message: 'asdsdfdsfsf',
      sendMail: [],
      gender: 'Male',
      priorities: ['High', 'Medium', 'Low'],
      selectedPriority: 'High',
      data: true,
      isSubmitted: false,
    };
  },
  methods: {
    submit() {
      this.isSubmitted = true;
    },
  },
};
</script>

<style>
</style>
