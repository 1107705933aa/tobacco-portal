<template>
  <div>
    <Head />
    <!-- 内容 -->
    <div :class="$store.state.isSpecialDate ? 'bodybg w1240 auto bgf4f4f4' : 'bgf4f4f4 bodybg'">
      <div class="dqwz">
        <div class="w1200 auto">
          <img src="../assets/image/dqwz.png" />
          您当前的位置：
          <a style="cursor: pointer" @click="$router.go(-1)">首页</a>--<a>{{
            $store.state.storeData.name
          }}</a
          >--<a>{{ $store.state.storeData.newsOrigin }}</a>
        </div>
      </div>
      <div class="inContent w1200 auto">
        <div class="tyContent">
          <h1>
            {{ contentObj.title }}
          </h1>
          <div class="conXxly">
            <span
              >文章来源：<span class="source">{{ contentObj.from }}</span></span
            >    时间：{{ contentObj.time }}
            <div class="conZhDy">
              <span class="bigger" @click="addCount"
                ><img src="../assets/image/jia.png"
              /></span>
              <span class="smaller" @click="reduceCount"
                ><img src="../assets/image/jian.png"
              /></span>
              <span class="printIco" @click="print"
                ><img src="../assets/image/dayin.png"
              /></span>
            </div>
          </div>
          <div class="ldConRMain tyContentMain" ref="print">
            <p
              style="
                text-align: center;
                width: 300px;
                margin: 0 auto;
                font-weight: 700;
              "
            >
              <span :style="{ fontSize: wordCount + 'px' }"
                >{{ contentObj.secondTitle }} <br
              /></span>
            </p>
            <div :style="{ fontSize: wordCount + 'px' }">
              <br />
              <div v-html="contentObj.content"></div>
              <br />
              <br />
              <br />
            </div>
          </div>
          <div class="contentBotshare">
            <div id="share">
              <b>分享到：</b>
              <a id="wechat"
                ><i></i>
                <div id="share-qrcode">
                  <em>◆</em>
                  <span>◆</span>
                  <h3>微信分享“扫一扫”</h3>
                  <div id="Qrcode"></div>
                </div>
              </a>
              <a id="weibo"><i></i></a>
            </div>
          </div>
          <div class="cl"></div>
        </div>
      </div>
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
    return {
      wordCount: 16,
      contentObj: {
        title: this.$store.state.storeData.newsTitle,
        from: this.$store.state.storeData.newsOrigin,
        time: this.$store.state.storeData.createTime,
        secondTitle: this.$store.state.storeData.newsSubtitle,
        content: this.$store.state.storeData.newsContent,
      },
    };
  },
  mounted() {},
  methods: {
    addCount() {
      this.wordCount += 2;
    },
    reduceCount() {
      this.wordCount -= 2;
    },
    print() {
      const printHTML = this.$refs.print.innerHTML;
      // 将打印的区域赋值，进行打印
      window.document.body.innerHTML = printHTML;
      window.print(); // 调用window打印方法
      this.$router.go(0); // 打印完成后重新加载页面
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/scss/detail.scss";
</style>