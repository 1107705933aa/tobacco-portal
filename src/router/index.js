import Vue from "vue";
import Router from "vue-router";
import Gateway from '@/views/Gateway'
import Release from '@/views/Release'
import NewsDetail from '@/views/NewsDetail'
import Mechanism from '@/views/Mechanism'
import DetailMore from '@/views/DetailMore'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Gateway',
    component: Gateway
  },
  {
    path: '/NewsDetail',
    name: 'NewsDetail',
    component: NewsDetail
  },
  {
    path: '/Release',
    name: 'Release',
    component: Release
  },
  {
    path: '/Mechanism',
    name: 'Mechanism',
    component: Mechanism
  },
  {
    path: '/DetailMore',
    name: 'DetailMore',
    component: DetailMore
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
