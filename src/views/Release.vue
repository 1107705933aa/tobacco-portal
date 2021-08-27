<template>
  <div>
    <Head />
    <div class="bgf4f4f4 bodybg">
      <div class="dqwz">
        <div class="w1200 auto">
          <img src="../assets/image/dqwz.png" />
          您当前的位置：
          <a href="http://10.1.201.5:86/gjyc/index.shtml">首页</a>--
          <a href="">办事服务</a>--
          <span>信息发布</span>
        </div>
      </div>
      <div class="inContent w1200 auto">
        <div class="listTlbg">
          <img src="../assets/image/listtlbg.png" />
        </div>
        <div class="pb30">
          <div class="tyList cxlyCons">
            <div class="fl cxlyLeft">
              <h3 class="lyListTit">
                信息发布
                <img src="../assets/image/wylyico.png" />
              </h3>
              <div class="cxlyForm">
                <el-form
                  :model="ruleForm"
                  :rules="rules"
                  ref="ruleForm"
                  label-width="100px"
                  class="demo-ruleForm"
                >
                  <el-form-item label="文章类型" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="文章大标题" prop="name1">
                    <el-input
                      v-model="ruleForm.name1"
                      placeholder="请输入"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="文章小标题" prop="name2">
                    <el-input
                      v-model="ruleForm.name2"
                      placeholder="请输入"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="文章来源" prop="name3">
                    <el-input
                      v-model="ruleForm.name3"
                      placeholder="请输入"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="发布时间" required>
                    <el-col :span="11">
                      <el-form-item prop="date1">
                        <el-date-picker
                          type="date"
                          placeholder="选择日期"
                          v-model="ruleForm.date1"
                          style="width: 100%"
                        ></el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                      <el-form-item prop="date2">
                        <el-time-picker
                          placeholder="选择时间"
                          v-model="ruleForm.date2"
                          style="width: 100%"
                        ></el-time-picker>
                      </el-form-item>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="文章内容" prop="name4">
                    <el-input
                      type="textarea"
                      v-model="ruleForm.name4"
                      placeholder="请输入"
                      :rows="5"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')"
                      >立即发布</el-button
                    >
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div class="fr cxlyRight">
              <h3>发布须知</h3>
              <div class="lyxzCon">
                <p>
                  欢迎您访问国家烟草专卖局网站领导信箱栏目！您对我们的工作有何意见或建议，可直接通过此栏目进行提交。衷心感谢您对烟草工作的支持和关爱！
                </p>
                <p>
                  为了提高办事效率，明确责任，提交信息时请务必留下真实姓名、电子邮件和联系电话，便于有关部门向您了解具体的情况，妥善处理您反映的问题；未署真实姓名、电邮地址和联系电话的信息，我们无法处理与反馈，敬请原谅。
                </p>
              </div>
            </div>
            <div class="cl"></div>
          </div>
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
      ruleForm: {
        name1: "",
        name2: "",
        name3: "",
        name4: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      options: [
        {
          value: "选项1",
          label: "科技纵览",
        },
        {
          value: "选项2",
          label: "机构动态",
          disabled: true,
        },
        {
          value: "选项3",
          label: "办事服务",
        },
        {
          value: "选项4",
          label: "公益事业",
        },
        {
          value: "选项5",
          label: "信息发布",
        },
      ],
      value: "",
      rules: {
        name1: [
          { required: true, message: "请输入文章大标题", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        name2: [
          { required: true, message: "请输入文章小标题", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        name3: [
          { required: true, message: "请输入文章来源", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        name4: [
          { required: true, message: "请输入文章内容", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        region: [
          { required: true, message: "请选择文章类型", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/scss/release.scss";
</style>