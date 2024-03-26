<template>
  <div class="addquest">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">任务管理/推演任务/</div>
      <div class="yys">创建任务</div>
    </div>
    <div class="box wbb">
      <div class="zsbtbox">
        <div class="guns"></div>
        <div class="wenz">创建任务</div>
      </div>
      <!-- 正题 -->
      <div class="zhengti">
        <div :class="type == 1 ? 'bz1k' : 'bz1g'">
          <div class="xhuhao">1.</div>
          <div class="textr">任务基础设置</div>
        </div>
        <div :class="type == 2 ? 'bz2k' : 'bz2g'">
          <div class="xhuhao">2.</div>
          <div class="textr">推演目标设置</div>
        </div>
        <div :class="type == 3 ? 'bz2k' : 'bz2g'">
          <div class="xhuhao">3.</div>
          <div class="textr">高级设置</div>
        </div>
      </div>
      <div class="jducontainer">
        <!-- 任务基础设置 -->
        <div v-if="type == 1">
          <div class="formstyle">
            <el-form
              :rules="rules"
              :model="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
              ref="rwjicin"
            >
              <el-form-item label="推演类型：" prop="infer_type">
                <el-radio-group v-model="ruleForm.infer_type" class="dxradio">
                  <el-radio label="standard">常规推演</el-radio>
                  <el-radio label="simulated">模拟推演</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="任务名称：" prop="name"
                ><el-input
                  placeholder="请输入"
                  class="inpustyle"
                  v-model="ruleForm.name"
                  size="mini"
                  style="width: 630px"
                ></el-input>
              </el-form-item>
              <el-form-item label="任务描述：" prop="description">
                <el-input
                  type="textarea"
                  placeholder="请输入"
                  class="inputtextarea"
                  v-model="ruleForm.description"
                  size="mini"
                  style="width: 630px"
                ></el-input>
              </el-form-item>
              <el-form-item label="运行模式：" prop="timing_mode">
                <el-radio-group v-model="ruleForm.timing_mode" class="dxradio">
                  <el-radio label="immediate">立刻</el-radio>
                  <el-radio label="scheduled">定时</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div v-if="type == 2">
          <div class="formstyle">
            <el-form
              :model="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="推演目标：" prop="target_type">
                <el-radio-group v-model="ruleForm.target_type" class="dxradio">
                  <el-radio label="cidr">IP/IP段</el-radio>
                  <el-radio label="group">资产组</el-radio>
                </el-radio-group>
              </el-form-item>
              <div v-if="ruleForm.target_type == 'cidr'">
                <el-form-item label="起点：" prop="tail_cidrs">
                  <el-input
                    v-model="ruleForm.tail_cidrs"
                    type="textarea"
                    class="inputtextarea"
                    size="mini"
                    style="width: 630px"
                    :autosize="{ minRows: 6, maxRows: 6 }"
                  ></el-input>
                </el-form-item>
                <el-form-item label="途径点：" prop="stem_cidrs">
                  <el-input
                    v-model="ruleForm.stem_cidrs"
                    type="textarea"
                    class="inputtextarea"
                    size="mini"
                    style="width: 630px"
                    :autosize="{ minRows: 6, maxRows: 6 }"
                  ></el-input>
                </el-form-item>
                <el-form-item label="终点：" prop="head_cidrs">
                  <el-input
                    v-model="ruleForm.head_cidrs"
                    type="textarea"
                    class="inputtextarea"
                    size="mini"
                    style="width: 630px"
                    :autosize="{ minRows: 6, maxRows: 6 }"
                  ></el-input>
                </el-form-item>
              </div>
              <div v-else class="teshu">
                <div>
                  <div style="color: #aaa; font-size: 14px">
                    选择起始资产组：
                  </div>
                  <div style="display: flex; align-items: center">
                    <div class="treestyle gdstyle">
                      <Treemu :datatree="zczdata" />
                    </div>
                    <div style="padding: 0 24px">
                      <i
                        class="el-icon-d-arrow-right"
                        style="
                          color: #fa9600;
                          font-size: 28px;
                          cursor: pointer;
                          font-weight: bolder;
                        "
                      ></i>
                    </div>
                    <div class="treestyle gdstyle">
                      <!-- <Treemu :datatree="zczdata" /> -->
                    </div>
                    <div style="padding-left: 41px">
                      <el-radio-group class="dxradio" v-model="xxx">
                        <div>
                          <el-radio label="1">外界资产优先</el-radio>
                        </div>
                        <div style="padding: 38px 0">
                          <el-radio label="2">外联资产优先</el-radio>
                        </div>
                        <div>
                          <el-radio label="3">脆弱性资产优先</el-radio>
                        </div>
                      </el-radio-group>
                    </div>
                  </div>
                </div>
              </div>
            </el-form>
          </div>
        </div>
        <div v-if="type == 3">
          <div class="formstyle">
            <el-form
              :model="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="推演算法：" prop="radio">
                <el-select
                  class="zhessless"
                  size="mini"
                  v-model="ruleForm.bqmc"
                  placeholder="请选择"
                  style="width: 340px"
                  filterable
                  multiple
                >
                  <el-option
                    v-for="item in 4"
                    :key="item"
                    :label="'推演算法' + item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="bottbot">
          <el-button class="buttonsy" size="mini" @click="goto">取消</el-button>
          <el-button
            v-if="type != 1"
            class="tsbuttonsy"
            size="mini"
            @click="gousb"
            >上一步</el-button
          >
          <el-button
            v-if="type != 3"
            class="tsbuttonsy"
            size="mini"
            @click="gouxb"
            >下一步</el-button
          >
          <el-button v-if="type == 3" class="tsbuttonsy" size="mini"
            >完成</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { governance_groups } from "@/api";
export default {
  data() {
    return {
      xxx: "",
      zczdata: [], // 资产组架构
      // +++++++++++++++++++++++++++++++++++
      type: 1, //当前步骤
      // 任务基础设置-表单数据
      ruleForm: {
        infer_type: "",
        name: "",
        description: "",
        timing_mode: "",
        target_type: "cidr",
        // target_type: "",
        tail_cidrs: "",
        stem_cidrs: "",
        head_cidrs: "",
      },
      // 表单验证
      rules: {
        infer_type: [
          { required: true, message: "请选择推演类型", trigger: "change" },
        ],
        name: [{ required: true, message: "请输入任务名称", trigger: "blur" }],
        timing_mode: [
          { required: true, message: "请选择运行模式", trigger: "change" },
        ],
        // { rules: [{ required: true, pattern: /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))|\*)(,((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))|\*))*$/, message: '请输入IP地址!' }] },
      },
    };
  },
  components: {
    Treemu: () => import("./treemu.vue"),
  },
  mounted() {
    this.getgovernancegroups();
  },
  methods: {
    // 下一步
    gouxb() {
      if (this.type == 1) {
        this.$refs["rwjicin"].validate((valid) => {
          if (valid) {
            this.type = 2;
          } else {
            return false;
          }
        });
      } else if (this.type == 2) {
        this.type = 3;
      }
    },
    // 上一步
    gousb() {
      if (this.type == 2) {
        this.type = 1;
      } else if (this.type == 3) {
        this.type = 2;
      }
    },
    // 资产组架构
    getgovernancegroups() {
      governance_groups().then((res) => {
        this.treedata(res);
      });
    },
    // 资产组架-tree数据处理
    treedata(e) {
      for (var i = 0; i < e.length; i++) {
        this.$set(e[i], "type", true);
        if (e[i].sub_groups && e[i].sub_groups.length !== 0) {
          this.dgtree(e[i].sub_groups);
        }
      }
      this.zczdata = e;
    },
    // 资产组架-tree数据处理递归
    dgtree(arr) {
      for (var i = 0; i < arr.length; i++) {
        this.$set(arr[i], "type", true);
        if (arr[i].sub_groups && arr[i].sub_groups.length !== 0) {
          this.dgtree(arr[i].sub_groups);
        }
      }
    },
    // 取消返回
    goto() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.addquest {
  .box {
    width: 1824px;
    height: 809px;
    padding: 20px 30px;
    .zhengti {
      padding-top: 40px;
      display: flex;
      > div {
        width: 576px;
        height: 42px;
        display: flex;
        align-items: center;
        .xhuhao {
          padding-left: 43px;
          font-size: 30px;
          font-weight: 900;
        }
        .textr {
          padding-left: 140px;
          font-size: 18px;
          font-weight: bold;
        }
      }
      .bz1k {
        background: url("../img/bz1k.png") no-repeat;
        background-size: 100% 100%;
      }
      .bz1g {
        background: url("../img/bz1g.png") no-repeat;
        background-size: 100% 100%;
      }
      .bz2k {
        background: url("../img/bz2k.png") no-repeat;
        background-size: 100% 100%;
      }
      .bz2g {
        background: url("../img/bz2g.png") no-repeat;
        background-size: 100% 100%;
      }
      //   .bz3k{
      //     background: url('../img/bz3k.png') no-repeat;
      //     background-size: 100% 100%;
      //   }
      //   .bz3g{
      //     background: url('../img/bz3g.png') no-repeat;
      //     background-size: 100% 100%;
      //   }
    }
    .jducontainer {
      padding-top: 40px;
      // background: red;
      height: 620px;
      position: relative;
      .bottbot {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        button {
          margin: 0 20px;
        }
        // 按钮样式
        .tsbuttonsy {
          background: #fa9600 !important;
          color: #fff !important;
          border-color: #fa9600;
        }
      }
      .teshu {
        > div {
          display: flex;
          .treestyle {
            width: 318px;
            height: 140px;
            overflow: auto;
            border: 1px solid #aaaaaa;
          }
        }
      }
    }
  }
}
</style>