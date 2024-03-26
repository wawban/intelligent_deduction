<template>
  <div class="deduction">
    <!-- 查询组件 -->
    <div class="zheestoub">
      <div>
        <el-button
          class="buttonsy"
          size="mini"
          icon="el-icon-plus"
          @click="gotu"
          >添加</el-button
        >
        <el-button
          class="buttonsy"
          size="mini"
          icon="el-icon-delete"
          @click="dialogVisible = true"
          >删除</el-button
        >
      </div>
      <div class="zheipr">
        <div class="marginr">
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
              <div style="padding: 12px 0; display: flex; align-items: center">
                符合以下&nbsp;&nbsp;
                <el-select
                  class="zhessless"
                  size="mini"
                  style="width: 74px"
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
                      style="width: 180px"
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
                      style="width: 88px"
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
                      style="width: 180px"
                    ></el-input>
                  </div>
                  <div style="width: 20px">
                    <i
                      @click="cxoff(i)"
                      class="el-icon-close"
                      style="cursor: pointer"
                    ></i>
                  </div>
                </div>
                <div style="padding-top: 20px">
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
          fontSize: '14px',
          padding: '14px 0',
        }"
        :cell-style="{
          borderColor: 'rgba(255, 255, 255, 0.3)',
          backgroundColor: '#161616',
          color: '#fff',
          fontSize: '14px',
          padding: '14px 0',
        }"
        @selection-change="handleSelectionChange"
      >
        <!-- // vvs  多选2 handleSelectionChange -->
        <!-- // vvs  多选3 -->
        <el-table-column type="selection" width="55"></el-table-column>
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
                style="height: 22px; cursor: pointer"
                src="../img/zz.png"
                alt=""
              />
              <img
                style="height: 22px; cursor: pointer; margin: 0 26px"
                src="../img/jx.png"
                alt=""
              />
              <img
                style="height: 22px; cursor: pointer"
                src="../img/sc.png"
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
    <!-- 删除框 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="dialogVisible"
        width="520px"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div
          style="
            color: #fa9600;
            font-size: 18px;
            font-weight: 500;
            padding-bottom: 16px;
            display: flex;
            align-items: center;
          "
        >
          <i
            class="el-icon-warning-outline"
            style="font-size: 24px; color: #fa9600; margin-right: 10px"
          ></i>
          提示
        </div>
        <div style="font-size: 16px; padding: 20px 0; color: #fff">
          确定终止\删除风险推演任务一吗？
        </div>
        <div style="text-align: right">
          <el-button
            size="mini"
            style="
              margin-right: 30px;
              background: #fa9600 !important;
              color: #fff !important;
              border-color: #fa9600;
            "
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30px"
            @click="dialogVisible = false"
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
      dialogVisible: false, //添加弹窗
      // 表格数据
      tableData: [
        {
          a: "风险资产1",
          b: "12",
          c: "2023.10.23 02:12:15",
          d: "admin",
        },
        {
          a: "风险资产2",
          b: "12",
          c: "2023.10.23 02:12:15",
          d: "admin",
        },
        {
          a: "风险资产3",
          b: "12",
          c: "2023.10.23 02:12:15",
          d: "admin",
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
          label: "任务名称",
          type: true,
        },
        {
          prop: "b",
          label: "任务类型",
          type: true,
        },
        {
          prop: "c",
          label: "推演起点",
          type: true,
        },
        {
          prop: "d",
          label: "推演终点",
          type: true,
        },
        {
          prop: "e",
          label: "运行模式",
          type: true,
        },
        {
          prop: "f",
          label: "任务状态",
          type: true,
        },
        {
          prop: "g",
          label: "创建人",
          type: true,
        },
        {
          prop: "h",
          label: "创建时间",
          type: true,
        },
        {
          prop: "h",
          label: "操作",
          type: true,
        },
      ],
      rysy: "2", //符合条件，任一或所有
      //   查询数据
      searcharr: [{ key: "", value: "", type: "" }],
      // 分页
      page: {
        current: 1,
        size: 10,
        total: 44,
      },
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
    // 表格头
    // this.btarr = localStorage.setItem("localdeduction",'')
    this.btarr = localStorage.getItem("localdeduction")
      ? JSON.parse(localStorage.getItem("localdeduction"))
      : this.tablearr;
    this.$dragging.$on("dragged", (e) => {
      this.btarr = e.value.list;
      localStorage.setItem("localdeduction", JSON.stringify(this.btarr));
    });
  },
  methods: {
    // vvs  多选1
    handleSelectionChange(e) {
      console.log(e);
    },
    // 表格头
    fields(e, i) {
      if (e == "1") {
        this.btarr[i].type = false;
      } else {
        this.btarr[i].type = true;
      }
      localStorage.setItem("localdeduction", JSON.stringify(this.btarr));
    },
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
    // ---------------------------跳转创建
    gotu(e) {
      // console.log(e)
      this.$router.push("/taskmanagement/addquest");
    },
  },
};
</script>
<style lang="less" scoped>
.deduction {
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
      // background: rgba(103, 103, 103, 0.2);
      background: #676767;
      border-radius: 5px;
      border: 1px solid;
      border-image: linear-gradient(270deg, #fb8619 0%, #fcba48 100%) 1;
    }
    // -------------------------------------------------------
  }
  .zheestoub {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>