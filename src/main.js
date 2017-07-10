// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.base.css';
import 'vue-ydui/dist/ydui.rem.css';
import App from './App'
import router from './router'

Vue.use(YDUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
