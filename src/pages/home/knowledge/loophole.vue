<!-- 漏洞知识库 -->
<template>
  <div class="loophole">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">知识库/</div>
      <div class="yys">漏洞知识库</div>
    </div>
    <div class="lbox wbb">
      <div class="zsbtbox">
        <div class="guns"></div>
        <div class="wenz">漏洞知识库</div>
      </div>
      <!-- 查询组件 -->
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
            borderColor: '#292929',
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
              <div v-if="item.label == '危害等级'">
                <!-- <div
                  :class="
                    scope.row.a == 1
                      ? 'styg'
                      : scope.row.a == 2
                      ? 'styz'
                      : scope.row.a == 3
                      ? 'styd'
                      : '--'
                  "
                >
                  {{
                    scope.row.a == 1
                      ? "高危"
                      : scope.row.a == 2
                      ? "中危"
                      : scope.row.a == 3
                      ? "低危"
                      : "--"
                  }}
                </div> -->
                <div
                  :class="
                    scope.row.severity == 'low'
                      ? 'low'
                      : scope.row.severity == 'medium'
                      ? 'medium'
                      : scope.row.severity == 'high'
                      ? 'high'
                      : scope.row.severity == 'critical'
                      ? 'critical'
                      : ''
                  "
                >
                  {{
                    scope.row.severity == "low"
                      ? "低危"
                      : scope.row.severity == "medium"
                      ? "中危"
                      : scope.row.severity == "high"
                      ? "高危"
                      : scope.row.severity == "critical"
                      ? "超危"
                      : ""
                  }}
                </div>
              </div>
              <div v-else-if="item.label == '操作'">
                <img
                  @click="gotu(scope.row)"
                  style="height: 16rem; cursor: pointer"
                  src="../img/cx.png"
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
</template>
<script>
import { kb_vulns } from "@/api";
export default {
  data() {
    return {
      // -----------------------------------------------------------------关联查询组件下
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
          label: "漏洞名称",
          type: true,
        },
        {
          prop: "type",
          label: "漏洞类型",
          type: true,
        },
        {
          prop: "cve_id",
          label: "CVE编号",
          type: true,
        },
        {
          prop: "cnvd_id",
          label: "CNNVD编号",
          type: true,
        },
        {
          prop: "cvss",
          label: "评分",
          type: true,
        },
        {
          label: "危害等级",
          type: true,
        },
        {
          prop: "time_discovered",
          label: "发布日期",
          type: true,
        },
        {
          label: "操作",
          type: true,
        },
      ],
      rysy: "and", //符合条件，任一或所有
      //   查询数据
      searcharr: [],
      // 分页
      page: {
        offset: 1,
        limit: 10,
        total: 0,
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
        // this.tableData = JSON.parse(JSON.stringify(this.tableData))
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.btarr = localStorage.getItem("vulnerabilityknowledgebasesw")
      ? JSON.parse(localStorage.getItem("vulnerabilityknowledgebasesw"))
      : this.tablearr;
    this.$dragging.$on("dragged", (e) => {
      this.btarr = e.value.list;
      localStorage.setItem(
        "vulnerabilityknowledgebasesw",
        JSON.stringify(this.btarr)
      );
    });
    this.getgovernancehosts(); // 列表
  },
  methods: {
    // 列表
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
      kb_vulns(obj).then((res) => {
        this.page = res.pagination;
        this.page.offset += 1;
        this.tableData = res.results.meta;
        // this.tableData = [{ c: "ww" }];
        // this.tableData = res.results.map((item) => {
        //   return item.meta;
        // });
      });
    },
    // 表格头
    fields(e, i) {
      if (e == "1") {
        this.btarr[i].type = false;
      } else {
        this.btarr[i].type = true;
      }
      localStorage.setItem(
        "vulnerabilityknowledgebasesw",
        JSON.stringify(this.btarr)
      );
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
    // ---------------------------跳转详情
    // gotu(e) {
    //   // console.log(e)
    //   this.$router.push("/knowledgedetails");
    // },
    gotu(e) {
      this.$router.push({
        path: "/knowledgedetails",
        query: { id: e.id },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.loophole {
  .lbox {
    height: 809rem;
    padding: 20rem 30rem;
    .biaotab {
      .low {
        color: #f6d535;
      }
      .medium {
        color: #fa9600;
      }
      .high {
        color: #e53a40;
      }
      .critical {
        color: #8b0000;
      }
      // .styg {
      //   color: #e53a40;
      // }
      // .styz {
      //   color: #fa9600;
      // }
      // .styd {
      //   color: #e53a40;
      // }
    }
  }
}
</style>