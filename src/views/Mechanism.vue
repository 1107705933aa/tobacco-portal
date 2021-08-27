<template>
  <div
    :class="$store.state.isSpecialDate ? 'container w1240 auto' : 'container'"
  >
    <Head :class="$store.state.isSpecialDate ? 'nopdlr20' : ''" />
    <div class="content w1200 auto mt20">
      <div style="display:flex;">
        <img src="../assets/image/listtlbg.png" alt="" />
      </div>
      <el-tabs tab-position="left">
        <el-tab-pane
          v-for="(item, index) in contentArr"
          :key="index + item"
          :label="item.newsTitle"
        >
          <div>
            <div>
              <a class="right-title">简介内容</a>
            </div>
            <div class="content-right" v-html="item.newsContent"></div></div
        ></el-tab-pane>
      </el-tabs>
      <div style="clear: both"></div>
    </div>
    <Bottom />
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
  computed: {
    contentArr() {
      return this.$store.state.introduceArr;
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/scss/mechanism.scss";
</style>