<template>
  <div class="content">
    <el-backtop target=".content .backtop"></el-backtop>
    <div class="backtop">
      <Head />
      <!-- 内容 -->
      <div
        :class="
          $store.state.isSpecialDate
            ? 'bodybg w1240 auto bgf4f4f4'
            : 'bgf4f4f4 bodybg'
        "
      >
        <div class="dqwz">
          <div class="w1200 auto">
            <img src="../assets/image/dqwz.png" />
            您当前的位置：
            <a style="cursor: pointer" @click="$router.push({ path: '/' })"
              >首页</a
            >--<a>{{ $store.state.storeData.name }}</a>
          </div>
        </div>
        <div class="inContent w1200 auto">
          <div class="listTlbg">
            <img src="../assets/image/listtlbg.png" />
          </div>
          <div class="tyList">
            <ul class="inTyList">
              <li
                v-for="(item, index) in $store.state.detailMoreArr"
                :key="item + index"
                style="cursor: pointer"
                @click="
                  () => {
                    $store.state.storeData = item;
                    $router.push({
                      name: 'NewsDetail',
                    });
                  }
                "
              >
                <a> {{ item.newsTitle }}</a
                ><span class="date fr">{{ item.createTime }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  </div>
</template>

<script>
import Head from "./Head.vue";
import Bottom from "./Bottom.vue";
export default {
  components: {
    Head,
    Bottom,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/scss/detailMore.scss";
</style>