<template>
  <div class="port">
    <!-- 表格 -->
    <el-table
      class="tablebottom"
      :data="ports"
      style="width: 100%"
      :header-cell-style="{
        backgroundColor: '#292929',
        color: '#fff',
        borderColor: '#292929',
        fontSize: '14px',
        padding: '10px 0',
      }"
      :cell-style="{
        borderColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: '#161616',
        color: '#fff',
        fontSize: '14px',
        padding: '14px 0',
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
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <!-- <div class="pagefy" style="padding-top: 20px; padding-bottom: 20px">
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
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    ports: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      // 分页
      // page: {
      //   current: 1,
      //   size: 10,
      //   total: 44,
      // },
      // 表头改变数据
      vararr: [
        {
          prop: "port",
          label: "端口号",
        },
        {
          prop: "service",
          label: "服务名",
        },
        {
          prop: "version",
          label: "应用版本",
        },
      ],
    };
  },
  methods: {
    // // ---------------------------分页
    // handleSizeChange(val) {
    //   // console.log(`每页 ${val} 条`);
    //   alert(val);
    // },
    // handleCurrentChange(val) {
    //   // console.log(`当前页: ${val}`);
    //   alert(val);
    // },
  },
};
</script>
<style lang="less" scoped>
.port {
  padding: 20px 30px;
}
</style>