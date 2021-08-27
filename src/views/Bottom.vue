<template>
  <!-- 底部 -->
  <div class="bg0053a7">
    <div class="inBottom w1200 auto">
      <div class="inBottomNavs">
        <a>网站声明 </a>
        |
        <a>联系方式 </a>
        | <a>站点地图</a>
      </div>
      <div class="inBottomxx">
        <p>
          主管：国家烟草专卖局办公室&nbsp;&nbsp;&nbsp;&nbsp;主办：国家烟草专卖局信息中心&nbsp;&nbsp;&nbsp;&nbsp;政府网站标识码：bm64000012&nbsp;&nbsp;&nbsp;&nbsp;备案序号:<a
            >京ICP备05033420号</a
          >
        </p>
        <p>
          地址：中国北京西城区月坛南街55号(100045)&nbsp;&nbsp;&nbsp;&nbsp;京公网安备：110401200137
        </p>
        <p>
          版权所有：国家烟草专卖局，未经许可，本网站包括图像、图标、文字在内的所有数据不得转载
        </p>
      </div>
      <div class="inBottomIco">
        <a class="djtb">
          <img src="../assets/image/djtb.png" />
        </a>
        <span class="wzzc">
          <span id="_span_jiucuo"
            ><img
              style="margin: 0; border: 0;"
              src="../assets/image/jiucuo.png"
          /></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
// 底部
.inBottom {
  position: relative;
  height: 182px;
  color: #c8d8e9;
  font-size: 15px;
  line-height: 30px;
  background: #0053a7;
  a {
    color: #eaf0f5;
    font-size: 15px;
  }
  .inBottomNavs {
    line-height: 40px;
    padding-top: 20px;
  }
  .inBottomxx {
  }
  .inBottomIco {
    position: absolute;
    right: 0;
    top: 62px;
    a,
    .wzzc {
      display: inline-block;
      float: left;
      margin: 0 10px;
    }
    .wzzc img {
      width: 92px;
    }
  }
}
</style>