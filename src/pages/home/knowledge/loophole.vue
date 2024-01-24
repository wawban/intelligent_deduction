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
          <el-popover placement="bottom" width="400" trigger="click">
            <div class="tjiansxian">
              <div class="top">
                <div>筛选</div>
                <div>清空</div>
              </div>
            </div>
            <div slot="reference" class="boxjc">
              <img src="../img/tj.png" alt="" />
              条件筛选
            </div>
          </el-popover>
        </div>
        <div class="marginr">
          <el-popover placement="bottom" width="220" trigger="click">
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
            padding:'16rem 0'
          }"
          :cell-style="{
            borderColor: 'rgba(255, 255, 255, 0.3)',
            backgroundColor: '#161616',
            color: '#fff',
            fontSize: '14rem',
            padding:'16rem 0'
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
                <div
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
</template>
<script>
export default {
  data() {
    return {
      // -----------------------------------------------------------------表格
      // 表格数据
      tableData: [
        { a: "1", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "2", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" },
        { a: "1", b: "2", c: "3" }
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
          label: "CVE编号",
          type: true,
        },
        {
          prop: "d",
          label: "CNNVD编号",
          type: true,
        },
        {
          prop: "e",
          label: "评分",
          type: true,
        },
        {
          prop: "a",
          label: "危害等级",
          type: true,
        },
        {
          prop: "g",
          label: "发布日期",
          type: true,
        },
        {
          prop: "h",
          label: "操作",
          type: true,
        },
      ],
      // -----------------------------------------------------------------分页
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
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    // ----------------------------表格头
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
  },
  methods: {
    // ----------------------------表格头
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
    gotu(e){
        // console.log(e)
        this.$router.push("/knowledgedetails");
    }
  },
};
</script>
<style lang="less" scoped>
.loophole {
  .lbox {
    height: 809rem;
    padding: 20rem 30rem;
    .biaotab {
      .styg {
        color: #e53a40;
      }
      .styz {
        color: #fa9600;
      }
      .styd {
        color: #e53a40;
      }
    }
  }
}
</style>