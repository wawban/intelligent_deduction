<template>
  <div class="port">
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
        padding: '10rem 0',
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
        <!-- <template slot-scope="scope">
          <div v-if="item.label == '漏洞等级'">
            <div :class="scope.row.c == '1' ? 'gw' : 'dw'">
              {{ scope.row.c == "1" ? "高危" : "低危" }}
            </div>
          </div>
          <div v-else-if="item.label == '处理状态'">
            <div class="clizt">已处理</div>
          </div>
          <div v-else-if="item.label == '操作'">
            <img
              @click="gotu(scope.row)"
              style="height: 16rem; cursor: pointer"
              src="../../img/cx.png"
              alt=""
            />
          </div>
          <span v-else>{{ scope.row[scope.column.property] }}</span>
        </template> -->
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
</template>
<script>
export default {
  data() {
    return {
      // 分页
      page: {
        current: 1,
        size: 10,
        total: 44,
      },
      // 表格数据
      tableData: [
        {
          a: "80",
          b: "SecureSite-12345",
          c: "Web望帮镑ppwar-2024.01.06-prod",
        },
        {
          a: "80",
          b: "SecureSite-12345",
          c: "Web望帮镑ppwar-2024.01.06-prod",
        },
        {
          a: "80",
          b: "SecureSite-12345",
          c: "Web望帮镑ppwar-2024.01.06-prod",
        },
        {
          a: "80",
          b: "SecureSite-12345",
          c: "Web望帮镑ppwar-2024.01.06-prod",
        },
        {
          a: "80",
          b: "SecureSite-12345",
          c: "Web望帮镑ppwar-2024.01.06-prod",
        },
        {
          a: "80",
          b: "SecureSite-12345",
          c: "Web望帮镑ppwar-2024.01.06-prod",
        },
      ],
      // 表头改变数据
      vararr: [
        {
          prop: "a",
          label: "端口号",
        },
        {
          prop: "b",
          label: "服务名",
        },
        {
          prop: "c",
          label: "应用版本",
        },
      ],
    };
  },
  methods: {
    // ---------------------------分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      alert(val);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      alert(val);
    },
  },
};
</script>
<style lang="less" scoped>
.port {
  padding: 20rem 30rem;
}
</style>