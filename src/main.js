import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 安装axios
import axios from 'axios'
Vue.prototype.axios = axios
// 关闭提示
Vue.config.productionTip = false
// vant引入
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
