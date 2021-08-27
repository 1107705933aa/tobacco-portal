/**
 *后端接口api
 * */

import Vue from 'vue';

const API = {
  // 查询文章列表 : 
  newsQuery: "/portals-api/portals/newsSet/page?newsStatus=1&orderByColumn=create_time&isAsc=desc",
  // 查询文章详情 
  newsDetailQuery: "/portals-api/portals/newsSet",
  // 查询轮播
  carouselQuery: "/portals-api/portals/groupData/page",
};

Vue.prototype.$API = API;