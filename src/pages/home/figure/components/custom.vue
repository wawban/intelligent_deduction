<template>
  <div class="custom">
    <!-- 查询组件 -->
    <div class="zheestoub">
      <div>
        <el-button
          class="buttonsy"
          size="mini"
          icon="el-icon-plus"
          @click="addbiaoqian"
          >添加</el-button
        >
      </div>
      <!-- ----------------------------------------------------------------------------------------------------- -->
      <div class="zheipr">
        <div class="marginr">
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
              <img src="../../img/qb.png" alt="" />
              查看全部
            </div>
          </el-popover>
        </div>
        <!-- 复合查询 -->
        <div class="marginr">
          <el-popover placement="bottom" width="530" trigger="click">
            <div slot="reference" class="boxjc">
              <img src="../../img/tj.png" alt="" />
              条件筛选
            </div>
            <div class="tjiansxian">
              <div class="top">
                <div @click="getgovernancehosts">筛选</div>
                <div @click="getgovernancehosts('clear')">清空</div>
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
                      <el-option label="不包含" value="notcontain"></el-option>
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
    <div>
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
          padding: '14rem 0',
        }"
        :cell-style="{
          borderColor: 'rgba(255, 255, 255, 0.3)',
          backgroundColor: '#161616',
          color: '#fff',
          fontSize: '14rem',
          padding: '14rem 0',
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
            <!-- 操作 -->
            <div v-if="item.label == '操作'">
              <img
                style="height: 22rem; cursor: pointer; margin-right: 13rem"
                src="../../img/bj.png"
                alt=""
                @click="addbj(scope.row)"
              />
              <img
                style="height: 22rem; cursor: pointer; margin-left: 13rem"
                src="../../img/sc.png"
                alt=""
                @click="dkaisc(scope.row)"
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
    <!-- 添加\编辑 -->
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
          {{ tkname }}
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100rem"
            class="demo-ruleForm"
          >
            <el-form-item label="标签名称：" prop="name">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.name"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div style="text-align: center">
          <el-button
            v-if="tkname == '添加'"
            class="buttonsy"
            size="mini"
            style="margin-right: 30rem"
            @click="submit"
            >确认</el-button
          >
          <el-button
            v-else
            class="buttonsy"
            size="mini"
            style="margin-right: 30rem"
            @click="submitbj"
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
    <!-- 删除框 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="scdtank"
        width="520rem"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div
          style="
            color: #fa9600;
            font-size: 18rem;
            font-weight: 500;
            padding-bottom: 16rem;
            display: flex;
            align-items: center;
          "
        >
          <i
            class="el-icon-warning-outline"
            style="font-size: 24rem; color: #fa9600; margin-right: 10rem"
          ></i>
          提示
        </div>
        <div style="font-size: 16rem; padding: 20rem 0; color: #fff">
          确定删除所选标签吗？
        </div>
        <div style="text-align: right">
          <el-button
            size="mini"
            style="
              margin-right: 30rem;
              background: #fa9600 !important;
              color: #fff !important;
              border-color: #fa9600;
            "
            @click="sbmsc"
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30rem"
            @click="scdtank = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import {
  governance_tagscustom,
  governance_tagscustomcj,
  governance_tagscustomtags,
  productInfo_remove,
} from "@/api";
export default {
  data() {
    return {
      scdtank: false,
      tkname: "",
      // 表单验证
      rules: {
        name: [{ required: true, message: "请输入标签名称", trigger: "blur" }],
      },
      // 添加表单数据
      ruleForm: {
        name: "",
      },
      dialogVisible: false, //添加弹窗
      // 表格数据
      tableData: [],
      // 表头数据
      btarr: [],
      // 表头改变数据
      vararr: [],
      // 表头原始数据
      tablearr: [
        {
          prop: "name",
          label: "标签名称",
          type: true,
        },
        {
          prop: "count_assets",
          label: "应用资产数",
          type: true,
        },
        {
          prop: "time_created",
          label: "创建时间",
          type: true,
        },
        {
          prop: "creator",
          label: "创建人",
          type: true,
        },
        {
          label: "操作",
          type: true,
        },
      ],
      // 复合查询
      rysy: "and", //符合条件，任一或所有
      //   查询数据
      searcharr: [],
      // 分页
      page: {
        offset: 1,
        limit: 10,
        total: 44,
      },
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
    this.btarr = localStorage.getItem("localcustom")
      ? JSON.parse(localStorage.getItem("localcustom"))
      : this.tablearr;
    this.$dragging.$on("dragged", (e) => {
      this.btarr = e.value.list;
      localStorage.setItem("localcustom", JSON.stringify(this.btarr));
    });

    this.getgovernancehosts(); // 自定义标签列表
  },
  methods: {
    sbmsc() {
      productInfo_remove(this.scid).then(() => {
        this.scdtank = false;
        this.getgovernancehosts();
      });
    },
    dkaisc(e) {
      this.scid = e.id;
      this.scdtank = true;
    },
    // 打开编辑
    addbj(e) {
      // alert(e.name);
      this.tkname = "编辑";
      this.bjid = e.id;
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs["ruleForm"].resetFields();
        this.ruleForm.name = e.name;
      });
    },
    // 自定义标签添加
    submit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          governance_tagscustomcj(this.ruleForm).then((res) => {
            this.getgovernancehosts("clear");
            this.dialogVisible = false;
          });
        } else {
          return false;
        }
      });
    },
    // 自定义标签编辑
    submitbj() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          governance_tagscustomtags(this.ruleForm, this.bjid).then((res) => {
            this.getgovernancehosts();
            this.dialogVisible = false;
          });
        } else {
          return false;
        }
      });
    },
    // 打开创建
    addbiaoqian() {
      this.tkname = "添加";
      this.ruleForm.name = "";
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs["ruleForm"].resetFields();
        this.ruleForm.name = "";
      });
    },
    // 自定义标签列表
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
      obj.offset = obj.offset - 1;
      governance_tagscustom(obj).then((res) => {
        this.page = res.pagination;
        this.page.offset += 1;
        this.tableData = res.results;
      });
    },
    // 表格头
    fields(e, i) {
      if (e == "1") {
        this.btarr[i].type = false;
      } else {
        this.btarr[i].type = true;
      }
      localStorage.setItem("localcustom", JSON.stringify(this.btarr));
    },
    // 查询组件添加条件
    appendtj() {
      this.searcharr.push({ key: "", value: "contain", type: "" });
    },
    // 查询组件减少条件
    cxoff(i) {
      this.searcharr.splice(i, 1);
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
  },
};
</script>
<style lang="less" scoped>
.custom {
  .tandialog {
    /deep/.el-dialog {
      background: none !important;
    }
    /deep/.el-dialog__header {
      display: none;
    }
    /deep/.el-dialog__body {
      background: rgba(103, 103, 103, 0.2);
      backdrop-filter: blur(13rem);
      border-radius: 5rem;
      border: 1rem solid;
      border-image: linear-gradient(270deg, #fb8619 0%, #fcba48 100%) 1;
    }
  }
  //   padding-top: 30rem;
  height: 720rem;
  //   overflow: auto;
  .zheestoub {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>