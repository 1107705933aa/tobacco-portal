/**
 * axios的拦截器处理
 * */

import Vue from 'vue';
import axios from 'axios';

const createConfig = {};
const axiosCreate = axios.create(createConfig);
// axios安装配置
Plugin.install = (pluInstall) => {
  const VueInstall = pluInstall;
  VueInstall.axios = axiosCreate;
  window.axios = axiosCreate;
  Object.defineProperties(VueInstall.prototype, {
    axios: {
      get() {
        return axiosCreate;
      },
    },
    $axios: {
      get() {
        return axiosCreate;
      },
    },
  });
};

// 将axios安装入vue中
Vue.use(Plugin);

export default Plugin;