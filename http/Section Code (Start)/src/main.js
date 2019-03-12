import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-a59a7.firebaseio.com/data.json';
Vue.http.interceptors.push((request, next) => {});

new Vue({
  el: '#app',
  render: h => h(App),
});
