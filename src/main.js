import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store/index'
import "./plugins/axios"; // 导入axios
import "./api/tobacco"; // 导入axios
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount("#app");
