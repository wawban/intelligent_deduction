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
              label-width="100rem"
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
                  style="width: 630rem"
                ></el-input>
              </el-form-item>
              <el-form-item label="任务描述：" prop="description">
                <el-input
                  :autosize="{ minRows: 5 }"
                  type="textarea"
                  placeholder="请输入"
                  class="inputtextarea"
                  v-model="ruleForm.description"
                  size="mini"
                  style="width: 630rem"
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
              label-width="120rem"
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
                    style="width: 630rem"
                    :autosize="{ minRows: 6, maxRows: 6 }"
                  ></el-input>
                </el-form-item>
                <el-form-item label="途径点：" prop="stem_cidrs">
                  <el-input
                    v-model="ruleForm.stem_cidrs"
                    type="textarea"
                    class="inputtextarea"
                    size="mini"
                    style="width: 630rem"
                    :autosize="{ minRows: 6, maxRows: 6 }"
                  ></el-input>
                </el-form-item>
                <el-form-item label="终点：" prop="head_cidrs">
                  <el-input
                    v-model="ruleForm.head_cidrs"
                    type="textarea"
                    class="inputtextarea"
                    size="mini"
                    style="width: 630rem"
                    :autosize="{ minRows: 6, maxRows: 6 }"
                  ></el-input>
                </el-form-item>
              </div>
              <div v-else class="teshu">
                <div>
                  <div style="color: #aaa; font-size: 14rem">
                    选择起始资产组：
                  </div>
                  <div style="display: flex; align-items: center">
                    <div class="treestyle gdstyle">
                      <Treemu
                        :datatree="zczdata"
                        @ontreee="ontreee"
                        ktype="1"
                      />
                    </div>
                    <div style="padding: 0 24rem">
                      <i
                        @click="qiehuan"
                        class="el-icon-d-arrow-right"
                        style="
                          color: #fa9600;
                          font-size: 28rem;
                          cursor: pointer;
                          font-weight: bolder;
                        "
                      ></i>
                    </div>
                    <div class="treestyle gdstyle youji">
                      <div v-for="(item, index) in huixiaer" :key="index">
                        {{ item.name }}
                      </div>
                    </div>
                    <!-- <div style="padding-left: 41rem">
                      <el-radio-group class="dxradio" v-model="xxx">
                        <div>
                          <el-radio label="1">外界资产优先</el-radio>
                        </div>
                        <div style="padding: 38rem 0">
                          <el-radio label="2">外联资产优先</el-radio>
                        </div>
                        <div>
                          <el-radio label="3">脆弱性资产优先</el-radio>
                        </div>
                      </el-radio-group>
                    </div> -->
                  </div>
                </div>
                <div style="margin: 20rem 0">
                  <div style="color: #aaa; font-size: 14rem">
                    选择途径资产组：
                  </div>
                  <div style="display: flex; align-items: center">
                    <div class="treestyle gdstyle">
                      <treemutow
                        :datatree="zczdata"
                        @ontreee="ontreee"
                        ktype="2"
                      />
                    </div>
                    <div style="padding: 0 24rem">
                      <i
                        @click="qiehuan"
                        class="el-icon-d-arrow-right"
                        style="
                          color: #fa9600;
                          font-size: 28rem;
                          cursor: pointer;
                          font-weight: bolder;
                        "
                      ></i>
                    </div>
                    <div class="treestyle gdstyle youji">
                      <div v-for="(item, index) in tuixiaer" :key="index">
                        {{ item.name }}
                      </div>
                      <!-- <Treemu :datatree="zczdata" /> -->
                    </div>
                    <!-- <div style="padding-left: 41rem">
                      <el-radio-group class="dxradio" v-model="xxx">
                        <div>
                          <el-radio label="1">外界资产优先</el-radio>
                        </div>
                        <div style="padding: 38rem 0">
                          <el-radio label="2">外联资产优先</el-radio>
                        </div>
                        <div>
                          <el-radio label="3">脆弱性资产优先</el-radio>
                        </div>
                      </el-radio-group>
                    </div> -->
                  </div>
                </div>
                <div>
                  <div style="color: #aaa; font-size: 14rem">
                    选择结束资产组：
                  </div>
                  <div style="display: flex; align-items: center">
                    <div class="treestyle gdstyle">
                      <treemutree
                        :datatree="zczdata"
                        @ontreee="ontreee"
                        ktype="3"
                      />
                    </div>
                    <div style="padding: 0 24rem">
                      <i
                        @click="qiehuan"
                        class="el-icon-d-arrow-right"
                        style="
                          color: #fa9600;
                          font-size: 28rem;
                          cursor: pointer;
                          font-weight: bolder;
                        "
                      ></i>
                    </div>
                    <div class="treestyle gdstyle youji">
                      <div v-for="(item, index) in zzixiaer" :key="index">
                        {{ item.name }}
                      </div>
                      <!-- <Treemu :datatree="zczdata" /> -->
                    </div>
                    <!-- <div style="padding-left: 41rem">
                      <el-radio-group class="dxradio" v-model="xxx">
                        <div>
                          <el-radio label="1">外界资产优先</el-radio>
                        </div>
                        <div style="padding: 38rem 0">
                          <el-radio label="2">外联资产优先</el-radio>
                        </div>
                        <div>
                          <el-radio label="3">脆弱性资产优先</el-radio>
                        </div>
                      </el-radio-group>
                    </div> -->
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
              label-width="100rem"
              class="demo-ruleForm"
            >
              <el-form-item label="推演算法：" prop="radio">
                <el-select
                  class="zhessless"
                  size="mini"
                  v-model="ruleForm.bqmc"
                  placeholder="请选择"
                  style="width: 340rem"
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
          <el-button
            v-if="type == 3"
            class="tsbuttonsy"
            size="mini"
            @click="onsbin"
            >完成</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { governance_groups, infer_taskspost } from "@/api";
export default {
  data() {
    return {
      ityew: "",
      huixiaer: [],
      tuixiaer: [],
      zzixiaer: [],
      chuangdnag: {},
      tujingar: {},
      zdianjd: {},
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
        // tail_groups: "",
        // stem_groups: "",
        // head_groups: "",
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
    treemutow: () => import("./treemutow.vue"),
    treemutree: () => import("./treemutree.vue"),
  },
  mounted() {
    this.getgovernancegroups();
  },
  methods: {
    // 提交
    onsbin() {
      var obj = {
        name: this.ruleForm.name,
        config: {
          infer_type: this.ruleForm.infer_type,
          target_type: this.ruleForm.target_type,
        },
        description: this.ruleForm.description,
        schedule: {
          timing_mode: this.ruleForm.timing_mode,
        },
        task_targets: {
          // head:{
          //   cidrs:[]
          // }
          tail: {
            // cidrs:[],
            // groups:[]
            // cidrs: [this.ruleForm.tail_cidrs],
            cidrs: this.ruleForm.tail_cidrs.split("\n"),
            groups: this.huixiaer.map((e) => {
              return e.id;
            }),
          },
          stem: {
            cidrs: this.ruleForm.stem_cidrs.split("\n"),
            groups: this.tuixiaer.map((e) => {
              return e.id;
            }),
          },
          head: {
            // cidrs: [this.ruleForm.head_cidrs],
            cidrs: this.ruleForm.head_cidrs.split("\n"),
            // groups: [], //this.zdianjd
            groups: this.zzixiaer.map((e) => {
              return e.id;
            }),
          },
        },
        algorithm: [
          {
            id: "1",
            name: "2",
            class: "3",
          },
        ],
      };

      // <el-radio-group v-model="ruleForm.target_type" class="dxradio">
      //             <el-radio label="cidr">IP/IP段</el-radio>
      //             <el-radio label="group">资产组</el-radio>

      infer_taskspost(obj).then((res) => {
        this.$router.go(-1);
      });
    },
    // 传值
    ontreee(e, i) {
      this.ityew = i;
      if (i == "1") {
        this.chuangdnag = e;
      } else if (i == "2") {
        this.tujingar = e;
      } else {
        this.zdianjd = e;
      }
    },
    // 选中资产
    qiehuan() {
      // alert(this.ityew);
      if (this.ityew == "1") {
        var arr = this.huixiaer.map((res) => {
          return res.id;
        });
        if (arr.indexOf(this.chuangdnag.id) == -1) {
          this.huixiaer.push(this.chuangdnag);
        }
      } else if (this.ityew == "2") {
        var arr = this.tuixiaer.map((res) => {
          return res.id;
        });
        if (arr.indexOf(this.tujingar.id) == -1) {
          this.tuixiaer.push(this.tujingar);
        }
      } else {
        var arr = this.zzixiaer.map((res) => {
          return res.id;
        });
        if (arr.indexOf(this.zdianjd.id) == -1) {
          this.zzixiaer.push(this.zdianjd);
        }
      }
    },
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
        if (this.ruleForm.target_type == "cidr") {
          if (this.ruleForm.tail_cidrs.length == 0) {
            return this.$message.error("请输入起点");
          }
          if (this.ruleForm.stem_cidrs.length == 0) {
            return this.$message.error("请输入途径点");
          }
          if (this.ruleForm.head_cidrs.length == 0) {
            return this.$message.error("请输入终点");
          }
        }
        if (this.ruleForm.target_type == "group") {
          if (this.huixiaer.length == 0) {
            return this.$message.error("请选择起点");
          }
          if (this.tuixiaer.length == 0) {
            return this.$message.error("请选择途径点");
          }
          if (this.zzixiaer.length == 0) {
            return this.$message.error("请选择终点");
          }
        }
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
    width: 1824rem;
    height: 809rem;
    padding: 20rem 30rem;
    .zhengti {
      padding-top: 40rem;
      display: flex;
      > div {
        width: 576rem;
        height: 42rem;
        display: flex;
        align-items: center;
        .xhuhao {
          padding-left: 43rem;
          font-size: 30px;
          font-weight: 900;
        }
        .textr {
          padding-left: 140rem;
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
      padding-top: 40rem;
      // background: red;
      height: 620rem;
      position: relative;
      .bottbot {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        button {
          margin: 0 20rem;
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
            width: 318rem;
            height: 140rem;
            overflow: auto;
            border: 1px solid #aaaaaa;
          }
          .youji {
            padding: 10rem;
            > div {
              font-size: 14rem;
            }
          }
        }
      }
    }
  }
}
</style>