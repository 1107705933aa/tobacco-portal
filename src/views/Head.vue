<template>
  <div :class="$store.state.isSpecialDate?'w1240 auto pdlr20':''">
    <!-- 顶部 -->
    <div class="inTop">
      <div class="intopbg"></div>
      <div class="w1200 auto">
        <div class="inTopHead">
          <div class="guohui"><img src="../assets/image/guohui.png" /></div>
        </div>
        <div class="inTopBot">
          <div class="fl inLogo">
            <a @click="$router.push({ path: '/' })" style="cursor: pointer"
              ><img src="../assets/image/inlogo.png"
            /></a>
            <img class="intopby" src="../assets/image/intopby.png" />
          </div>
          <div class="fl inLiyi">国家利益至上<br />  消费者利益至上</div>
          <div class="fr inSearch">
            <div class="inSearchForm">
              <input
                name="siteCode"
                type="hidden"
                id="siteCode"
                value="bm64000012"
              />
              <input
                class="input_1"
                v-model="searchValue"
                value="请输入关键字"
                type="text"
              />
              <input
                @click="find"
                type="submit"
                id="btn1"
                class="button_1"
                value=""
              />
            </div>
            <div class="inHotSearch">
              热搜词：
              <a @click="keyWorsFind('专卖')">专卖</a>
              <a @click="keyWorsFind('中国')">中国</a>
              <a @click="keyWorsFind('卷烟')">卷烟</a>
              <a @click="keyWorsFind('烟叶')">烟叶</a>
              <a @click="keyWorsFind('招聘')">招聘</a>
            </div>
            <div class="inTopTishi inHotSearch">
              本网站含有烟草内容 谢绝未成年人访问!
            </div>
          </div>
          <div class="cl"></div>
        </div>
      </div>
    </div>
    <!-- 菜单 -->
    <div class="inNavs bg015293">
      <div class="w1200 auto">
        <ul>
          <li class="sy">
            <a
              class="menu"
              @click="
                () => {
                  $router.push({
                    name: 'Mechanism',
                  });
                }
              "
              >机构简介</a
            >
            <div class="navZlist">
              
            </div>
          </li>
          <li>
            <a
              class="menu"
              @click="
                () => {
                  $store.state.storeData.name='科技纵览'
                  $store.state.detailMoreArr = $store.state.scienceArr;
                  $router.push({
                    name: 'DetailMore',
                  });
                }
              "
              >科技纵览</a
            >
            <ul v-if="false">
              <li>
                <a>烟草新闻</a>
              </li>
              <li>
                <a>扶贫工作</a>
              </li>
              <li>
                <a>专卖管理</a>
              </li>
              <li>
                <a>数字化转型</a>
              </li>
              <li>
                <a>人事与培训</a>
              </li>
              <li>
                <a>统计信息</a>
              </li>
              <li>
                <a>互联网+政务服务</a>
              </li>
              <li>
                <a>采购信息</a>
              </li>
              <li>
                <a>计划规划</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              class="menu"
              @click="
                () => {
                  $store.state.storeData.name='质检资讯'
                  $store.state.detailMoreArr = $store.state.qualityArr;
                  $router.push({
                    name: 'DetailMore',
                  });
                }
              "
              >质检资讯</a
            >
            <ul v-if="false">
              <li>
                <a>行政许可</a>
              </li>
              <li>
                <a>监管信息</a>
              </li>
              <li>
                <a>政策文件</a>
              </li>
              <li>
                <a>政策解读</a>
              </li>
              <li>
                <a>监督检查</a>
              </li>
              <li>
                <a>应急预案</a>
              </li>
              <li>
                <a>建议、提案答复</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              class="menu"
              @click="
                () => {
                  $store.state.storeData.name='机构动态'
                  $store.state.detailMoreArr = $store.state.mechanismArr;
                  $router.push({
                    name: 'DetailMore',
                  });
                }
              "
              >机构动态</a
            >
            <ul v-if="false">
              <li>
                <a>我要办</a>
              </li>
              <li>
                <a>我要查</a>
              </li>
              <li>
                <a>我要看</a>
              </li>
              <li>
                <a>我要问</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              class="menu"
              @click="
                () => {
                  $store.state.storeData.name='办事服务'
                  $store.state.detailMoreArr = $store.state.workArr;
                  $router.push({
                    name: 'DetailMore',
                  });
                }
              "
              >办事服务</a
            >
            <ul v-if="false">
              <li>
                <a>热点问答</a>
              </li>
              <li>
                <a>我要留言 </a>
              </li>
              <li>
                <a>留言统计</a>
              </li>
              <li>
                <a>在线访谈</a>
              </li>
              <li>
                <a>留言列表 </a>
              </li>
              <li>
                <a>网上调查 </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              class="menu"
              @click="
                () => {
                  $store.state.storeData.name='公益事业'
                  $store.state.detailMoreArr = $store.state.publicArr;
                  $router.push({
                    name: 'DetailMore',
                  });
                }
              "
              >公益事业</a
            >
          </li>
          <li>
            <a
              class="menu"
              @click="
                () => {
                  $store.state.storeData.name='信息发布'
                  $store.state.detailMoreArr = $store.state.inforArr;
                  $router.push({
                    name: 'DetailMore',
                  });
                }
              "
              >信息发布
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    find() {
      const self = this;
      let params = { blurry: self.searchValue };
      let url = self.$API.newsQuery + "&" + qs.stringify(params);
      self.axios.get(url).then(({ data }) => {
        self.$store.state.detailMoreArr = data.rows;
        self.$router.push({
          name: "DetailMore",
        });
      });
    },
    keyWorsFind(val) {
      this.searchValue = val;
      this.find();
    },
  },
};
</script>

<style lang="scss" scoped>
// 顶部
.inTop {
  background: #fff;
  .intopbg {
    background: #015293;
    height: 48px;
  }

  .inTopHead {
    color: #8a8a8a;
    font-size: 14px;
    .guohui {
      text-align: center;
      margin-top: -32px;
      background: url(../assets/image/inguohuibg.png) no-repeat center 66px;
    }
  }
  .inTopBot {
    padding: 12px 0;
    .inLogo {
      margin: 14px 0 20px;
      .intopby {
        margin-left: 30px;
        display: none;
      }
    }
    .inLiyi {
      background: url(../assets/image/top_lybg.jpg) no-repeat;
      width: 248px;
      height: 68px;
      margin-left: 80px;
      margin-top: 12px;
      font-size: 24px;
      color: #fff;
      line-height: 30px;
      padding-left: 20px;
      padding-top: 8px;
      font-family: "黑体";
    }
    .inSearch {
      width: 304px;
      margin: 12px 0 0;
      .inSearchForm {
        border: 1px solid #d9d9d9;
        height: 33px;
        line-height: 33px;
        border-radius: 38px;
        .input_1 {
          width: 258px;
          font-size: 14px;
          color: #8a8a8a;
          text-indent: 15px;
          outline: none;
          height: 33px;
          padding: 0;
          border: 0;
          background: none;
          float: left;
        }
        .button_1 {
          background: url(../assets/image/serchico.png) no-repeat center;
          padding: 0;
          border: 0;
          width: 33px;
          height: 33px;
          float: right;
          cursor: pointer;
        }
      }
      .inHotSearch {
        color: #8a8a8a;
        font-size: 14px;
        margin-top: 5px;
        cursor: pointer;
        a {
          color: #8a8a8a;
          font-size: 14px;
          padding: 0 4px 0 0;
        }
      }
      .inTopTishi {
        font-size: 14px;
        color: #8a8a8a;
        text-indent: 1em;
      }
    }
  }
}
// 菜单
.inNavs {
  position: relative;
  li:hover .menu {
    cursor: pointer;
    background: #0f73c4;
  }
  li {
    ul {
      position: absolute;
      z-index: 100;
      display: none;
      padding: 5px 0;
      background: rgba(236, 246, 255, 0.9);
      li {
        height: 34px;
        line-height: 34px;
        background: none;
        display: block;
        cursor: pointer;
        a {
          color: #333;
          font-size: 18px;
          font-weight: normal;
        }
      }
    }
  }
  li > ul li:hover a {
    color: #0f73c4;
  }

  // li:hover .navZlist {
  //   display: block;
  // }

  li:hover ul {
    display: block;
  }
  .sy {
    width: 189px;
    background: none;
    padding: 0px;
  }
  li {
    display: inline-block;
    width: 164px;
    background: url(../assets/image/navline.jpg) no-repeat left center;
    text-align: center;
    height: 56px;
    line-height: 56px;

    a {
      color: #fff;
      font-size: 22px;
      display: block;
      font-weight: bold;
    }

    .navZlist {
      position: absolute;
      left: 0;
      top: 56px;
      width: 100%;
      background: #fff;
      display: none;
      z-index: 4;
      text-align: left;
      .syLdxx {
        width: 56%;
        margin: 20px 0;
        border-right: 1px solid #d9d9d9;
        h3 a {
          color: #015293;
          border-bottom: 1px solid #015293;
          display: inline-block;
          font-weight: normal;
          background: none;
        }
      }
      .syJggk {
        width: 43%;
        margin: 20px 0;
        margin: 20px 0;
        h3 a {
          color: #015293;
          border-bottom: 1px solid #015293;
          display: inline-block;
          font-weight: normal;
          background: none;
        }
        dl {
          padding-top: 14px;
          a {
            background: none;
            padding: 0;
            color: #333;
            font-size: 16px;
            font-weight: normal;
          }
          dt {
            width: 176px;
            margin-top: 6px;
            img {
              width: 100%;
            }
          }
          dd {
            width: 330px;
            line-height: 32px;
            height: auto;
            text-align: justify;
          }
        }
      }

      li {
        background: none;
        width: 100%;
        height: 32px;
        line-height: 32px;
        text-align: left;
        display: block;
        a {
          background: none;
          color: #333;
          font-weight: normal;
          font-size: 16px;
        }
      }
    }
  }
}
</style>