<template>
  <div class="loophole">
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
        <template slot-scope="scope">
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
          a: "Google Chrome Blob处理越界远程代码执行漏洞",
          b: "远程代码执行漏洞",
          c: "1",
          d: "已验证",
          e: "1",
          f: "2023.10.23 02:12:15",
        },
        {
          a: "Google Chrome Blob处理越界远程代码执行漏洞",
          b: "远程代码执行漏洞",
          c: "1",
          d: "已验证",
          e: "1",
          f: "2023.10.23 02:12:15",
        },
        {
          a: "Google Chrome Blob处理越界远程代码执行漏洞",
          b: "远程代码执行漏洞",
          c: "2",
          d: "已验证",
          e: "1",
          f: "2023.10.23 02:12:15",
        },
        {
          a: "Google Chrome Blob处理越界远程代码执行漏洞",
          b: "远程代码执行漏洞",
          c: "2",
          d: "已验证",
          e: "1",
          f: "2023.10.23 02:12:15",
        },
        {
          a: "Google Chrome Blob处理越界远程代码执行漏洞",
          b: "远程代码执行漏洞",
          c: "1",
          d: "已验证",
          e: "1",
          f: "2023.10.23 02:12:15",
        },
        {
          a: "Google Chrome Blob处理越界远程代码执行漏洞",
          b: "远程代码执行漏洞",
          c: "1",
          d: "已验证",
          e: "1",
          f: "2023.10.23 02:12:15",
        },
      ],
      // 表头改变数据
      vararr: [
        {
          prop: "a",
          label: "漏洞名称",
        },
        {
          prop: "b",
          label: "漏洞类型",
        },
        {
          prop: "c",
          label: "漏洞等级",
          width: "100",
        },
        {
          prop: "d",
          label: "验证状态",
          width: "100",
        },
        {
          prop: "e",
          label: "处理状态",
          width: "100",
        },
        {
          prop: "f",
          label: "发现时间",
        },
        {
          prop: "a",
          label: "操作",
          width: "100",
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
.loophole {
  padding: 20rem 30rem;
  .tablebottom {
    .gw {
      color: #e53a40;
    }
    .dw {
      color: #fa9600;
    }
    .clizt {
      color: #29ca9b;
    }
  }
}
</style>