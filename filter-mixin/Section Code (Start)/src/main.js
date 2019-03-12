import Vue from 'vue';
import App from './App.vue';

Vue.filter('toLowercase', val => val.toLowerCase());

new Vue({
  el: '#app',
  render: h => h(App),
});
