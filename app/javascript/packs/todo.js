import Vue from 'vue/dist/vue.esm.js'
import Header from './conponents/header.vue'

var app = new Vue({
  el: '#app',
  components: {
    'navbar': Header,
  }
});
