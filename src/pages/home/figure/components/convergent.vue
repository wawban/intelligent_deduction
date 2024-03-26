<template>
  <div class="convergent">
    <!-- 查询组件 -->
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
          fontSize: '14px',
          padding: '15px 0',
        }"
        :cell-style="{
          borderColor: 'rgba(255, 255, 255, 0.3)',
          backgroundColor: '#161616',
          color: '#fff',
          fontSize: '14px',
          padding: '15px 0',
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
            <!-- 操作 -->
            <div v-else-if="item.label == '操作'">
              <img
                @click="gotu(scope.row)"
                style="height: 22px; cursor: pointer"
                src="../../img/cx.png"
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
</template>
<script>
export default {
  data() {
    return {
      // -----------------------------------------------------------------关联查询组件下
      // 表格数据
      tableData: [
        {
          a: "Kashipara Job Portal SQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: 4,
        },
        {
          a: "Kashipara Job Portal SQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: 4,
        },
        {
          a: "Kashipara Job Portal SQL注入漏洞",
          b: "认证机制不恰当",
          c: "2",
          d: 4,
        },
        {
          a: "Kashipara Job Portal SQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: 4,
        },
        {
          a: "Kashipara Job Portal SQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: 4,
        },
        {
          a: "Kashipara Job Portal SQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: 4,
        },
        {
          a: "Kashipara Job Portal SQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: 4,
        },
        {
          a: "Kashipara Job Portal SQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: 4,
        },
        {
          a: "Kashipara Job Portal SQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: 4,
        },
        {
          a: "Kashipara Job Portal SQL注入漏洞",
          b: "认证机制不恰当",
          c: "1",
          d: 4,
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
          label: "影响资产数",
          type: true,
        },
        {
          prop: "h",
          label: "操作",
          type: true,
          width: 200,
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
    // ----------------------------关联查询组件下
    // 表格头
    this.btarr = localStorage.getItem("localconvergent")
      ? JSON.parse(localStorage.getItem("localconvergent"))
      : this.tablearr;
    this.$dragging.$on("dragged", (e) => {
      this.btarr = e.value.list;
      localStorage.setItem("localconvergent", JSON.stringify(this.btarr));
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
      localStorage.setItem("localconvergent", JSON.stringify(this.btarr));
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
      this.$router.push("/figure/vulnevrabilitymanagement/aggregateview");
    },
  },
};
</script>
<style lang="less" scoped>
.convergent {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 16px;
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