<!-- 主机资产 -->
<template>
  <div class="hostmachine">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">数字空间治理/</div>
      <div class="yys">主机资产</div>
    </div>
    <div class="container">
      <div class="left wbb">
        <div class="toptetol">
          <div class="guns"></div>
          <div class="wenz">资产组架构</div>
        </div>
        <div class="treestyle gdstyle">
          <!-- 树形 -->
          <Trees :datatree="zczdata" :treekry="modedata.id" />
        </div>
      </div>
      <div class="right wbb">
        <div class="toptetol">
          <div class="guns"></div>
          <div class="wenz">主机资产</div>
        </div>
        <!-- 查询组件 -->
        <div class="zheipr">
          <div class="marginr">
            <!-- <el-popover placement="bottom" width="500" trigger="click"> hover-->
            <el-popover placement="bottom" trigger="hover">
              <div class="ckqbtopqian">
                <el-button
                  class="buttonsy"
                  size="mini"
                  @click="getgovernancehosts('clear')"
                  >查看全部</el-button
                >
              </div>
              <div slot="reference" class="boxjc">
                <img src="../img/qb.png" alt="" />
                查看全部
              </div>
            </el-popover>
          </div>
          <!-- 复合查询 -->
          <div class="marginr">
            <el-popover placement="bottom" width="530" trigger="click">
              <div slot="reference" class="boxjc">
                <img src="../img/tj.png" alt="" />
                条件筛选
              </div>
              <div class="tjiansxian">
                <div class="top">
                  <div @click="getgovernancehosts">筛选</div>
                  <div @click="getgovernancehosts('clear')">清空</div>
                </div>
                <div
                  style="padding: 12rem 0; display: flex; align-items: center"
                >
                  符合以下&nbsp;&nbsp;
                  <el-select
                    class="zhessless"
                    size="mini"
                    style="width: 74rem"
                    v-model="rysy"
                    placeholder="请选择"
                  >
                    <el-option label="任一" value="or"></el-option>
                    <el-option label="所有" value="and"></el-option>
                  </el-select>
                  &nbsp;&nbsp;条件
                </div>
                <div class="tjiansearch">
                  <div v-for="(e, i) in searcharr" :key="i">
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        v-model="e.key"
                        filterable
                        style="width: 180rem"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in 4"
                          :key="item"
                          :label="'条件' + item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </div>
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        style="width: 88rem"
                        v-model="e.value"
                        placeholder="请选择"
                      >
                        <el-option label="包含" value="contain"></el-option>
                        <el-option
                          label="不包含"
                          value="notcontain"
                        ></el-option>
                        <el-option label="等于" value="eq"></el-option>
                        <el-option label="不等于" value="ne"></el-option>
                        <!-- <el-option label="为空" value="3"></el-option>
                        <el-option label="不为空" value="4"></el-option> -->
                      </el-select>
                    </div>
                    <div>
                      <el-input
                        placeholder="请输入"
                        class="inpustyle"
                        v-model="e.type"
                        size="mini"
                        style="width: 180rem"
                      ></el-input>
                    </div>
                    <div style="width: 20rem">
                      <i
                        @click="cxoff(i)"
                        class="el-icon-close"
                        style="cursor: pointer"
                      ></i>
                    </div>
                  </div>
                  <div style="padding-top: 20rem">
                    <el-button class="buttonsy" @click="appendtj" size="mini"
                      >添加条件</el-button
                    >
                  </div>
                </div>
              </div>
            </el-popover>
          </div>
          <!-- -------------------------------------------------------- -->
          <div class="marginr">
            <el-popover placement="bottom" width="220" trigger="hover">
              <div class="zduanpeizi">
                <div>字段配置</div>
                <div class="zdbox">
                  <div
                    v-for="(e, i) in btarr"
                    :key="i"
                    v-dragging="{ list: btarr, item: e }"
                    :dragable="true"
                  >
                    <div>{{ e.label }}</div>
                    <div>
                      <img
                        @click="fields('1', i)"
                        v-if="e.type"
                        src="../img/yk.png"
                        alt=""
                      />
                      <img
                        @click="fields('2', i)"
                        v-else
                        src="../img/yg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div slot="reference" class="boxjc">
                <img src="../img/zd.png" alt="" />
                字段配置
              </div>
            </el-popover>
          </div>
        </div>
        <!-- 列表 -->
        <div class="biaotab">
          <!-- 表格 -->
          <el-table
            class="tablebottom"
            :data="tableData"
            style="width: 100%"
            :header-cell-style="{
              backgroundColor: '#292929',
              color: '#fff',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              fontSize: '14rem',
              padding: '16rem 0',
            }"
            :cell-style="{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              backgroundColor: '#161616',
              color: '#fff',
              fontSize: '14rem',
              padding: '16rem 0',
            }"
          >
            <!-- show-overflow-tooltip -->
            <el-table-column
              align="center"
              v-for="(item, index) in vararr"
              :key="index"
              :prop="item.prop"
              :label="item.label"
              :width="item.width"
            >
              <template slot-scope="scope">
                <!-- 风险值 -->
                <div v-if="item.label == '风险值'" class="fxianz">
                  <div
                    :class="
                      scope.row.risk_level == 'high'
                        ? 'g'
                        : scope.row.risk_level == 'medium'
                        ? 'z'
                        : scope.row.risk_level == 'low'
                        ? 'd'
                        : '--'
                    "
                  >
                    {{
                      scope.row.risk_level == "high"
                        ? "高"
                        : scope.row.risk_level == "medium"
                        ? "中"
                        : scope.row.risk_level == "low"
                        ? "低"
                        : "--"
                    }}
                  </div>
                </div>
                <!-- 状态 -->
                <div v-else-if="item.label == '状态'">
                  <div
                    :class="
                      scope.row.state == 1
                        ? 'ch'
                        : scope.row.state == 0
                        ? 'bch'
                        : '--'
                    "
                  >
                    {{
                      scope.row.state == 1
                        ? "存活"
                        : scope.row.state == 0
                        ? "不存活"
                        : "--"
                    }}
                  </div>
                </div>
                <!-- 资产标签 -->
                <div v-else-if="item.label == '资产标签'">
                  <div class="rqfangy">
                    <div class="lan" v-for="(e, i) in scope.row.tags" :key="i">
                      {{ e.name }}
                    </div>
                    <div
                      class="lv"
                      v-for="(e, i) in scope.row.custom_tags"
                      :key="i + '0'"
                    >
                      {{ e.name }}
                    </div>
                  </div>
                </div>
                <!-- 所属资产组 -->
                <div v-else-if="item.label == '所属资产组'">
                  {{ scope.row.asset_group.name }}
                </div>
                <!-- 操作 -->
                <div v-else-if="item.label == '操作'">
                  <img
                    @click="gotu(scope.row)"
                    style="height: 22rem; cursor: pointer"
                    src="../img/cx.png"
                    alt=""
                  />
                  <img
                    @click="bqflag = true"
                    style="height: 22rem; cursor: pointer; margin: 0 26rem"
                    src="../img/bq.png"
                    alt=""
                  />
                  <img
                    @click="editor(scope.row)"
                    style="height: 22rem; cursor: pointer"
                    src="../img/bj.png"
                    alt=""
                  />
                </div>
                <span v-else>{{ scope.row[scope.column.property] }}</span>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <div class="pagefy" style="padding-top: 20px; padding-bottom: 20px">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page.offset"
              :page-sizes="[10, 20]"
              :page-size="page.limit"
              layout="total, sizes, prev, pager, next, jumper"
              :total="page.total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- --------------------------------------------------------------------- -->
    <!-- 编辑 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="dialogVisible"
        width="520rem"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div
          style="
            color: #fff;
            text-align: center;
            font-size: 18rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 16rem;
          "
        >
          编辑
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100rem"
            class="demo-ruleForm"
          >
            <el-form-item label="资产名称：" prop="name">
              <el-input
                class="inpustyle"
                v-model="ruleForm.name"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="内外网：" prop="intranet">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.intranet"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="内网" :value="1"> </el-option>
                <el-option label="外网" :value="0"> </el-option>
                <el-option label="未知" :value="-1"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="资产价值：" prop="value">
              <el-input
                class="inpustyle"
                v-model="ruleForm.value"
                size="mini"
                style="width: 340rem"
                placeholder="请输入1-5，分值越高，资产越重要"
              ></el-input>
            </el-form-item>
            <el-form-item label="操作系统：" prop="os">
              <el-input
                class="inpustyle"
                v-model="ruleForm.os"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="等级保护：" prop="location">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.location"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="一级" value="1"> </el-option>
                <el-option label="二级" value="2"> </el-option>
                <el-option label="三级" value="3"> </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div style="text-align: center">
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-right: 30rem"
            @click="submit"
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30rem"
            @click="dialogVisible = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- --------------------------------------------------------------------- -->
    <!-- 添加标签 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="bqflag"
        width="520rem"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div
          style="
            color: #fff;
            text-align: center;
            font-size: 18rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 16rem;
          "
        >
          添加标签
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="bqform"
            ref="bqform"
            label-width="100rem"
            class="demo-ruleForm"
          >
            <el-form-item label="标签分类：" prop="radio">
              <el-radio-group v-model="bqform.radio" class="dxradio">
                <el-radio :label="3">常用标签</el-radio>
                <el-radio :label="6">预置标签</el-radio>
                <el-radio :label="9">自定义</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="标签名称：" prop="bqmc">
              <el-select
                class="zhessless"
                size="mini"
                v-model="bqform.bqmc"
                placeholder="请选择"
                style="width: 340rem"
                filterable
                multiple
              >
                <el-option
                  v-for="item in 4"
                  :key="item"
                  :label="'标签' + item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div style="text-align: center">
          <el-button class="buttonsy" size="mini" style="margin-right: 30rem"
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30rem"
            @click="bqflag = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { governance_groups, governance_hosts, governance_meta } from "@/api";
export default {
  data() {
    return {
      zczdata: [], // 资产组架构
      modedata: {}, //资产组架构-树形默认选中数据
      // 表格数据
      tableData: [],
      // 表头原始数据
      tablearr: [
        {
          label: "风险值",
          type: true,
        },
        {
          prop: "name",
          label: "资产名称",
          type: true,
        },
        {
          prop: "ip",
          label: "IP地址",
          type: true,
        },
        {
          label: "状态",
          type: true,
        },
        {
          prop: "category",
          label: "资产类型",
          type: true,
        },
        {
          label: "资产标签",
          type: true,
        },
        {
          prop: "count_vulns",
          label: "漏洞数",
          type: true,
        },
        {
          prop: "count_ports",
          label: "端口数",
          type: true,
        },
        {
          label: "所属资产组",
          type: true,
        },
        {
          label: "操作",
          type: true,
        },
      ],
      btarr: [], // 表头数据
      vararr: [], // 表头改变数据
      // -------------------------------------------------------------------------------------------
      // -------------------------------------------------------------------------------------------
      // 标签表单
      bqform: {
        radio: 3,
        bqmc: [],
      },
      bqflag: false, // 标签表单弹窗
      // ------------------------------
      // 表单验证
      rules: {
        name: [{ required: true, message: "请输入资产名称", trigger: "blur" }],
        // password: [{ validator: funcpassword, trigger: "blur" }],
      },
      dialogVisible: false, // 编辑弹窗
      // 编辑表单数据
      ruleForm: {
        name: "",
        os: "",
        value: "",
        intranet: "",
        location: "",
      },
      bjid: "", //编辑id
      // 分页
      page: {
        offset: 1,
        limit: 10,
        total: 44,
      },
      // 复合查询
      rysy: "and", //符合条件，任一或所有
      //   查询数据
      searcharr: [],
    };
  },
  watch: {
    btarr: {
      handler: function (val, oldVal) {
        this.vararr = this.btarr.filter((e) => {
          return e.type;
        });
        this.$nextTick(() => {
          this.tableData = JSON.parse(JSON.stringify(this.tableData));
        });
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.btarr = localStorage.getItem("lochostassets")
      ? JSON.parse(localStorage.getItem("lochostassets"))
      : this.tablearr;
    this.$dragging.$on("dragged", (e) => {
      this.btarr = e.value.list;
      localStorage.setItem("lochostassets", JSON.stringify(this.btarr));
    });
    this.getgovernancegroups(); //资产组架构
    this.getgovernancehosts(); // 主机资产列表
  },
  methods: {
    // 表格头是否显示
    fields(e, i) {
      if (e == "1") {
        this.btarr[i].type = false;
      } else {
        this.btarr[i].type = true;
      }
      localStorage.setItem("lochostassets", JSON.stringify(this.btarr));
    },
    // 资产组架构
    getgovernancegroups() {
      governance_groups().then((res) => {
        this.modedata = res[0];
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
    // 主机资产列表
    getgovernancehosts(e) {
      // 清空条件+查询所有
      if (e == "clear") {
        this.searcharr = [];
        this.page.offset = 1;
      }
      var obj = {
        offset: this.page.offset,
        limit: this.page.limit,
      };
      if (this.searcharr.length != 0) {
        var arr = this.searcharr.filter((item) => {
          return item.key.length != 0 && item.type.length != 0;
        });
        if (arr.length != 0) {
          var tj = arr.map((req) => {
            var jihe = req.key + " " + req.value + " " + (req.type || "");
            return jihe;
          });
          obj.filter = tj.join(" " + this.rysy + " ");
        }
      }
      governance_hosts(obj).then((res) => {
        this.page = res.pagination;
        this.tableData = res.results;
      });
    },
    // 查询组件添加条件
    appendtj() {
      this.searcharr.push({ key: "", value: "contain", type: "" });
    },
    // 查询组件减少条件
    cxoff(i) {
      this.searcharr.splice(i, 1);
    },
    // 触发清空
    cleark() {
      this.searcharr = [];
    },
    // 分页条数
    handleSizeChange(e) {
      this.page.limit = e;
      this.getgovernancehosts();
    },
    // 分页页数
    handleCurrentChange(e) {
      this.page.offset = e;
      this.getgovernancehosts();
    },
    // 打开编辑
    editor(e) {
      this.bjid = e.id;
      this.ruleForm = {
        name: e.name,
        os: e.os,
        value: e.value,
        intranet: e.intranet,
        location: e.location,
      };
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs["ruleForm"].resetFields();
      });
    },
    // 编辑提交
    submit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          governance_meta(this.ruleForm, this.bjid).then((res) => {
            this.getgovernancehosts(); //更新数据
            this.dialogVisible = false; //关闭弹窗
          });
        } else {
          return false;
        }
      });
    },
    // ---------------------------跳转详情
    gotu(e) {
      this.$router.push({
        path: "/figure/hostmachinedetails",
        query: { id: e.id },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.tandialog {
  /deep/.el-dialog {
    background: none !important;
  }
  /deep/.el-dialog__header {
    // padding: 0;
    display: none;
  }
  /deep/.el-dialog__body {
    // background: #676767;
    background: rgba(103, 103, 103, 0.2);
    backdrop-filter: blur(13rem);
    // background: #676767;
    border-radius: 5rem;
    border: 1rem solid;
    border-image: linear-gradient(270deg, #fb8619 0%, #fcba48 100%) 1;
  }
  // -------------------------------------------------------
}
// .treekub {
//   > div {
//     text-align: center;
//     cursor: pointer;
//     color: #fff;
//   }
//   > div:hover {
//     color: #fa9600;
//   }
//   .hovys {
//     color: #fa9600;
//   }
//   // background: red;
// }
.hostmachine {
  .container {
    height: 809rem;
    display: flex;
    justify-content: space-between;
    .left {
      width: 298rem;
      .toptetol {
        display: flex;
        align-items: center;
        line-height: 18rem;
        padding-bottom: 16rem;
        padding-top: 20rem;
        padding-left: 30rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);

        .guns {
          height: 18rem;
          width: 4rem;
          background: #fa9600;
          margin-right: 8rem;
        }

        .wenz {
          font-size: 18rem;
          font-weight: 500;
        }
      }
      .treestyle {
        padding-top: 17rem;
        height: 740rem;
        overflow: auto;
      }
    }
    .right {
      width: 1510rem;
      .toptetol {
        display: flex;
        align-items: center;
        line-height: 18rem;
        padding-bottom: 16rem;
        padding-top: 20rem;
        padding-left: 30rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);

        .guns {
          height: 18rem;
          width: 4rem;
          background: #fa9600;
          margin-right: 8rem;
        }

        .wenz {
          font-size: 18rem;
          font-weight: 500;
        }
      }
      .biaotab {
        .fxianz {
          display: flex;
          justify-content: center;
          align-items: center;
          > div {
            display: flex;
            justify-content: center;
            align-content: center;
            width: 22rem;
            height: 22rem;
            border: 1rem solid;
          }
          .g {
            border-color: #e53a40;
            color: #e53a40;
          }
          .z {
            border-color: #fa9600;
            color: #fa9600;
          }
          .d {
            border-color: #f6d535;
            color: #f6d535;
          }
        }
        .ch {
          color: #29ca9b;
        }
        .bch {
          color: #e53a40;
        }
        .rqfangy {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          > div {
            // margin-bottom: 2rem;
            border: 1px solid;
            padding: 0 9rem;
            line-height: 22rem;
            border-radius: 3rem;
            margin: 1rem 2rem;
            white-space: nowrap;
          }
          .lan {
            border-color: #0085ff;
            color: #0085ff;
          }
          .lv {
            border-color: #29ca9b;
            color: #29ca9b;
          }
        }
      }
    }
  }
}
</style>