import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

require('@/assets/css/admin.css')


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
