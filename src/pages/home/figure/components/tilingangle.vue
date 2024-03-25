<template>
  <div class="tilingangle">
    <!-- 查询组件 -->
    <div class="zheestoub">
      <div>
        <el-button
          class="buttonsy"
          size="mini"
          icon="el-icon-plus"
          @click="dialogVisible = true"
          >批量创建工单</el-button
        >
      </div>
      <!-- ----------------------------------------------------------------------------------------------------- -->
      <div class="zheipr">
        <div class="marginr">
          <el-popover placement="bottom" trigger="hover">
            <div class="ckqbtopqian">
              <el-button class="buttonsy" size="mini">查看全部</el-button>
            </div>
            <div slot="reference" class="boxjc">
              <img src="../../img/qb.png" alt="" />
              查看全部
            </div>
          </el-popover>
        </div>
        <div class="marginr">
          <el-popover placement="bottom" width="530" trigger="click">
            <div slot="reference" class="boxjc">
              <img src="../../img/tj.png" alt="" />
              条件筛选
            </div>
            <div class="tjiansxian">
              <div class="top">
                <div>筛选</div>
                <div @click="cleark">清空</div>
              </div>
              <div style="padding: 12rem 0; display: flex; align-items: center">
                符合以下&nbsp;&nbsp;
                <el-select
                  class="zhessless"
                  size="mini"
                  style="width: 74rem"
                  v-model="rysy"
                  placeholder="请选择"
                >
                  <el-option label="任一" value="1"></el-option>
                  <el-option label="所有" value="2"></el-option>
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
                      <el-option label="包含" value="1"></el-option>
                      <el-option label="不包含" value="2"></el-option>
                      <el-option label="为空" value="3"></el-option>
                      <el-option label="不为空" value="4"></el-option>
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
                      src="../../img/yk.png"
                      alt=""
                    />
                    <img
                      @click="fields('2', i)"
                      v-else
                      src="../../img/yg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div slot="reference" class="boxjc">
              <img src="../../img/zd.png" alt="" />
              字段配置
            </div>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="tbbg">
      <!-- 表格 -->
      <el-table
        class="tablebottom"
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{
          backgroundColor: '#292929',
          color: '#fff',
          borderColor: '#292929',
          fontSize: '14rem',
          padding: '15rem 0',
        }"
        :cell-style="{
          borderColor: 'rgba(255, 255, 255, 0.3)',
          backgroundColor: '#161616',
          color: '#fff',
          fontSize: '14rem',
          padding: '15rem 0',
        }"
      >
        <el-table-column
          align="center"
          show-overflow-tooltip
          v-for="(item, index) in vararr"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template slot-scope="scope">
            <!-- 漏洞等级 -->
            <div v-if="item.label == '漏洞等级'">
              <div :class="scope.row.c == '1' ? 'gh' : 'zh'">
                {{ scope.row.c == "1" ? "高危" : "中危" }}
              </div>
            </div>
            <!-- 漏洞状态 -->
            <div v-else-if="item.label == '漏洞状态'">
              <div :class="scope.row.d == '1' ? 'gh' : 'zh'">
                {{ scope.row.d == "1" ? "待验证" : "待修复" }}
              </div>
            </div>
            <!-- 工单状态 -->
            <div v-else-if="item.label == '工单状态'">
              <div :class="scope.row.e == '1' ? 'gh' : 'zh'">
                {{ scope.row.e == "1" ? "待下发" : "待处理" }}
              </div>
            </div>
            <!-- 操作 -->
            <div v-else-if="item.label == '操作'">
              <img
                @click="gotu(scope.row)"
                style="height: 22rem; cursor: pointer"
                src="../../img/cx.png"
                alt=""
              />
              <img
                @click="flagbj = true"
                style="height: 22rem; cursor: pointer"
                src="../../img/bjj.png"
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
          :current-page="page.current"
          :page-sizes="[10, 20]"
          :page-size="page.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="page.total"
        >
        </el-pagination>
      </div>
    </div>
    <!-- +++++++++++++++++++++++++++++++++++++++++++++ -->
    <!-- 创建工单 -->
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
          创建工单
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="110rem"
            class="demo-ruleForm"
          >
            <el-form-item label="漏洞负责人：" prop="ld">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.ld"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="分配对象：" prop="fp">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.fp"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="截止时间：" prop="jz">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.jz"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="工单备注：" prop="gd">
              <el-input
                type="textarea"
                placeholder="请输入"
                class="inputtextarea"
                v-model="ruleForm.gd"
                size="mini"
                style="width: 340rem"
              ></el-input>
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
            @click="dialogVisible = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
// governance_vulns
export default {
  data() {
    return {
      // 添加表单数据
      ruleForm: {
        ld: "",
        fp: "",
        jz: "",
        gd: "",
      },

      // 添加表单验证
      rules: {
        ld: [
          { required: true, message: "请选择漏洞负责人 ", trigger: "change" },
        ],
        jz: [{ required: true, message: "请选择截止时间 ", trigger: "change" }],
      },
      // 分页
      page: {
        current: 1,
        size: 10,
        total: 44,
      },
      // 表格数据
      tableData: [
        {
          a: "Kashipara Job PortalSQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: "1",
          e: "1",
          f: "2023.10.23 02:12:15",
          g: "192.168.0.120",
          h: "张有志",
          i: "张有志",
        },
        {
          a: "Kashipara Job PortalSQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: "2",
          e: "2",
          f: "2023.10.23 02:12:15",
          g: "192.168.0.120",
          h: "张有志",
          i: "张有志",
        },
        {
          a: "Kashipara Job PortalSQL注入漏洞",
          b: "认证机制不恰当",
          c: "2",
          d: "1",
          e: "1",
          f: "2023.10.23 02:12:15",
          g: "192.168.0.120",
          h: "张有志",
          i: "张有志",
        },
        {
          a: "Kashipara Job PortalSQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: "1",
          e: "1",
          f: "2023.10.23 02:12:15",
          g: "192.168.0.120",
          h: "张有志",
          i: "张有志",
        },
        {
          a: "Kashipara Job PortalSQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: "1",
          e: "1",
          f: "2023.10.23 02:12:15",
          g: "192.168.0.120",
          h: "张有志",
          i: "张有志",
        },
        {
          a: "Kashipara Job PortalSQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: "1",
          e: "1",
          f: "2023.10.23 02:12:15",
          g: "192.168.0.120",
          h: "张有志",
          i: "张有志",
        },
        {
          a: "Kashipara Job PortalSQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: "1",
          e: "1",
          f: "2023.10.23 02:12:15",
          g: "192.168.0.120",
          h: "张有志",
          i: "张有志",
        },
        {
          a: "Kashipara Job PortalSQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: "1",
          e: "1",
          f: "2023.10.23 02:12:15",
          g: "192.168.0.120",
          h: "张有志",
          i: "张有志",
        },
        {
          a: "Kashipara Job PortalSQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: "1",
          e: "1",
          f: "2023.10.23 02:12:15",
          g: "192.168.0.120",
          h: "张有志",
          i: "张有志",
        },
        {
          a: "Kashipara Job PortalSQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: "1",
          e: "1",
          f: "2023.10.23 02:12:15",
          g: "192.168.0.120",
          h: "张有志",
          i: "张有志",
        },
      ],
      // 表头数据
      btarr: [],
      // 表头改变数据
      vararr: [],
      // 表头原始数据
      tablearr: [
        {
          prop: "a",
          label: "漏洞名称",
          type: true,
        },
        {
          prop: "b",
          label: "漏洞类型",
          type: true,
        },
        {
          prop: "c",
          label: "漏洞等级",
          type: true,
        },
        {
          prop: "d",
          label: "漏洞状态",
          type: true,
        },
        {
          prop: "e",
          label: "工单状态",
          type: true,
        },
        {
          prop: "f",
          label: "发现时间",
          type: true,
        },
        {
          prop: "g",
          label: "所属资产IP",
          type: true,
        },
        {
          prop: "h",
          label: "漏洞负责人",
          type: true,
        },
        {
          prop: "i",
          label: "分配对象",
          type: true,
        },
        {
          prop: "k",
          label: "操作",
          type: true,
        },
      ],
      rysy: "2", //符合条件，任一或所有
      //   查询数据
      searcharr: [{ key: "", value: "", type: "" }],
      dialogVisible: false, //创建工单弹窗
    };
  },
  watch: {
    // --------------------表格头
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
    // localStorage.setItem("localtilingangle", "");
    // ----------------------------关联查询组件下
    // 表格头
    this.btarr = localStorage.getItem("localtilingangle")
      ? JSON.parse(localStorage.getItem("localtilingangle"))
      : this.tablearr;
    this.$dragging.$on("dragged", (e) => {
      this.btarr = e.value.list;
      localStorage.setItem("localtilingangle", JSON.stringify(this.btarr));
    });
    // ----------------------------关联查询组件上
  },
  methods: {
    // ----------------------------关联查询组件下
    // 表格头
    fields(e, i) {
      if (e == "1") {
        this.btarr[i].type = false;
      } else {
        this.btarr[i].type = true;
      }
      localStorage.setItem("localtilingangle", JSON.stringify(this.btarr));
    },
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // 查询组件添加条件
    appendtj() {
      this.searcharr.push({ key: "", value: "1", type: "" });
    },
    // 查询组件减少条件
    cxoff(i) {
      this.searcharr.splice(i, 1);
    },
    // 触发清空
    cleark() {
      this.searcharr = [{ key: "", value: "1", type: "" }];
    },
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ----------------------------关联查询组件上
    // ---------------------------分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      alert(val);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      alert(val);
    },
    // ---------------------------跳转详情
    gotu(e) {
      // console.log(e)
      this.$router.push("/figure/vulnevrabilitymanagement/governancedetails");
    },
  },
};
</script>
<style lang="less" scoped>
.tilingangle {
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
    .huandk {
      /deep/.el-switch__core {
        border: 1rem solid #aaaaaa !important;
      }
    }
  }
  // background: red;
  border-top: 1rem solid rgba(255, 255, 255, 0.3);
  margin-top: 16rem;
  .zheestoub {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tbbg {
    .gh {
      color: #e53a40;
    }
    .zh {
      color: #fa9600;
    }
  }
}
</style>