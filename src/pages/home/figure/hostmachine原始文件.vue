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
    <!--  -->
    <div class="container">
      <div class="left wbb">
        <div class="toptetol">
          <div class="guns"></div>
          <div class="wenz">资产组架构</div>
        </div>
        <div class="treestyle">
          <!-- <el-tree :data="data" :expand-on-click-node="false" :current-node-key="treekry" node-key="id" :props="defaultProps"> -->
          <el-tree
            :data="data"
            :expand-on-click-node="false"
            :current-node-key="treekry"
            node-key="label"
            default-expand-all
          >
            <span
              style="
                padding-right: 12rem;
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
              "
              slot-scope="{ node, data }"
            >
              <span style="font-size: 16rem; display: flex; align-items: center"
                >{{ node.label }}
              </span>
              <div>
                <el-popover placement="right" trigger="hover">
                  <div class="treekub">
                    <div @click="qiehuan(data)">
                      {{ data.type ? "只看本级" : "查看本级和下级" }}
                    </div>
                  </div>
                  <div slot="reference">
                    <img style="height: 14rem" src="../img/sd.png" alt="" />
                  </div>
                </el-popover>
              </div>
            </span>
          </el-tree>
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
                <el-button class="buttonsy" size="mini">查看全部</el-button>
              </div>
              <div slot="reference" class="boxjc">
                <img src="../img/qb.png" alt="" />
                查看全部
              </div>
            </el-popover>
          </div>
          <div class="marginr">
            <el-popover placement="bottom" width="530" trigger="click">
              <div slot="reference" class="boxjc">
                <img src="../img/tj.png" alt="" />
                条件筛选
              </div>
              <div class="tjiansxian">
                <div class="top">
                  <div>筛选</div>
                  <div @click="cleark">清空</div>
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
                      scope.row.a == 1
                        ? 'g'
                        : scope.row.a == 2
                        ? 'z'
                        : scope.row.a == 3
                        ? 'd'
                        : '--'
                    "
                  >
                    {{
                      scope.row.a == 1
                        ? "高"
                        : scope.row.a == 2
                        ? "中"
                        : scope.row.a == 3
                        ? "低"
                        : "--"
                    }}
                  </div>
                </div>
                <!-- 状态 -->
                <div v-else-if="item.label == '状态'">
                  <div
                    :class="
                      scope.row.a == 1 ? 'ch' : scope.row.a == 2 ? 'bch' : '--'
                    "
                  >
                    {{
                      scope.row.a == 1
                        ? "存活"
                        : scope.row.a == 2 || scope.row.a == 3
                        ? "不存活"
                        : "--"
                    }}
                  </div>
                </div>
                <!-- 资产标签 -->
                <div v-else-if="item.label == '资产标签'">
                  <div class="rqfangy">
                    <div class="lan">防御</div>
                    <!-- <div class="lan">入侵防御</div> -->
                    <div class="lv">自定义标签</div>
                  </div>
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
                    @click="dialogVisible = true"
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
              :current-page="page.current"
              :page-sizes="[10, 20]"
              :page-size="page.size"
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
            <el-form-item label="资产名称：" prop="zcmc">
              <el-input
                class="inpustyle"
                v-model="ruleForm.zcmc"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="内外网：" prop="nww">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.nww"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="内网" value="1"> </el-option>
                <el-option label="外网" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="资产价值：" prop="czjz">
              <el-input
                class="inpustyle"
                v-model="ruleForm.czjz"
                size="mini"
                style="width: 340rem"
                placeholder="请输入1-5，分值越高，资产越重要"
              ></el-input>
            </el-form-item>
            <el-form-item label="操作系统：" prop="czxt">
              <el-input
                class="inpustyle"
                v-model="ruleForm.czxt"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="等级保护：" prop="djbh">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.djbh"
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
            <el-form-item label="资产名称：" prop="radio">
              <el-radio-group v-model="bqform.radio" class="dxradio">
                <el-radio :label="3">备选项</el-radio>
                <el-radio :label="6">备选项</el-radio>
                <el-radio :label="9">备选项</el-radio>
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
export default {
  data() {
    return {
      // 标签表单
      bqform: {
        radio: 3,
        bqmc: [],
      },
      bqflag: false, // 标签表单弹窗
      // ------------------------------
      // 表单数据
      ruleForm: {},
      // 表单验证
      rules: {
        // name: [{ validator: funcname, trigger: "blur" }],
        // password: [{ validator: funcpassword, trigger: "blur" }],
      },
      dialogVisible: false, // 编辑弹窗
      // -----------------------------------------------------------------关联查询组件下
      // 表格数据
      tableData: [
        { a: "1", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "2", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "2", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "3", b: "2", c: "3" },
        { a: "3", b: "2", c: "3" },
        { a: "3", b: "2", c: "3" },
      ],
      // 表头数据
      btarr: [],
      // 表头改变数据
      vararr: [],
      // 表头原始数据
      tablearr: [
        {
          prop: "a",
          label: "风险值",
          type: true,
        },
        {
          prop: "b",
          label: "资产名称",
          type: true,
        },
        {
          prop: "c",
          label: "IP地址",
          type: true,
        },
        {
          prop: "a",
          label: "状态",
          type: true,
        },
        {
          prop: "e",
          label: "资产类型",
          type: true,
        },
        {
          prop: "a",
          label: "资产标签",
          type: true,
        },
        {
          prop: "g",
          label: "漏洞数",
          type: true,
        },
        {
          prop: "h",
          label: "端口数",
          type: true,
        },
        {
          prop: "h",
          label: "所属资产组 ",
          type: true,
        },
        {
          prop: "h",
          label: "操作",
          type: true,
        },
      ],
      //   xxxxxxxxxxxxxxxxxxxxxxxxxxx
      rysy: "2", //符合条件，任一或所有
      //   查询数据
      searcharr: [{ key: "", value: "", type: "" }],
      //   xxxxxxxxxxxxxxxxxxxxxxxxxxx
      // -----------------------------------------------------------------关联查询组件上
      // 分页
      page: {
        current: 1,
        size: 10,
        total: 44,
      },
      // --------------------------------------------------------------------------------------
      // 默认选中值
      treekry: "地区3",
      // 树形数据
      data: [
        {
          label: "A地区",
          type: true,
          children: [
            {
              label: "地区1",
              type: true,
            },
            {
              label: "地区2",
              type: true,
            },
            {
              label: "地区3",
              type: true,
              children: [
                {
                  label: "地区11",
                  type: true,
                },
                {
                  label: "地区22",
                  type: true,
                },
                {
                  label: "地区33",
                  type: true,
                },
              ],
            },
          ],
        },
        {
          label: "服务器组",
          type: true,
          children: [
            {
              label: "服务器组1",
              type: true,
            },
            {
              label: "服务器组2",
              type: true,
            },
            {
              label: "服务器组3",
              type: true,
            },
          ],
        },
        // {
        //   label: "一级 2",
        //   type: true,
        //   children: [
        //     {
        //       label: "二级 2-1",
        //       type: true,
        //       children: [
        //         {
        //           label: "三级 2-1-1",
        //           type: true,
        //         },
        //       ],
        //     },
        //     {
        //       label: "二级 2-2",
        //       type: true,
        //       children: [
        //         {
        //           label: "三级 2-2-1",
        //           type: true,
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   label: "一级 3",
        //   type: true,
        //   children: [
        //     {
        //       label: "二级 3-1",
        //       type: true,
        //       children: [
        //         {
        //           label: "三级 3-1-1",
        //           type: true,
        //         },
        //       ],
        //     },
        //     {
        //       label: "二级 3-2",
        //       type: true,
        //       children: [
        //         {
        //           label: "三级 3-2-1",
        //           type: true,
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
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
        // this.tableData = JSON.parse(JSON.stringify(this.tableData))
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    // ----------------------------关联查询组件下  lochostassets
    // 表格头
    this.btarr = localStorage.getItem("lochostassets")
      ? JSON.parse(localStorage.getItem("lochostassets"))
      : this.tablearr;
    this.$dragging.$on("dragged", (e) => {
      this.btarr = e.value.list;
      localStorage.setItem("lochostassets", JSON.stringify(this.btarr));
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
      localStorage.setItem("lochostassets", JSON.stringify(this.btarr));
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
    // -----------------------------------------------------------------------------------------------
    // 切换本级与下级
    qiehuan(e) {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].label == e.label) {
          this.data[i].type = !this.data[i].type;
          // console.log(this.data[i].label);
          this.treekry = this.data[i].label;
          return;
        }
        if (this.data[i].children && this.data[i].children.length !== 0) {
          this.dg(this.data[i].children, e.label);
        }

        // console.log(this.data[i].label);
      }
    },
    // 递归树
    dg(arr, e) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].label == e) {
          arr[i].type = !arr[i].type;
          this.treekry = arr[i].label;
          return;
        }
        if (arr[i].children && arr[i].children.length !== 0) {
          this.dg(arr[i].children, e);
        }
        // console.log(arr[i].label);
      }
    },
    // ---------------------------跳转详情
    gotu(e) {
      // console.log(e)
      this.$router.push("/figure/hostmachinedetails");
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
.treekub {
  > div {
    text-align: center;
    cursor: pointer;
    color: #fff;
  }
  > div:hover {
    color: #fa9600;
  }
  .hovys {
    color: #fa9600;
  }
  // background: red;
}
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
          > div {
            border: 1px solid;
            padding: 0 9rem;
            line-height: 22rem;
            border-radius: 3rem;
            margin: 0 2rem;
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