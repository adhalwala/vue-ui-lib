import Vue from 'vue';
import Dev from './serve.vue';
// import vuetify from './../src/plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  // vuetify,
  render: (h) => h(Dev),
}).$mount('#app');
