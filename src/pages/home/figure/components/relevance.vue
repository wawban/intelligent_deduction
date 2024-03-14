<template>
  <div class="relevance">
    <!-- 表格 -->
    <el-table
      class="tablebottom"
      :data="related_assets"
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
    related_assets: {
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
          prop: "relation",
          label: "关联关系",
        },
        {
          prop: "protocol",
          label: "协议",
        },
        {
          prop: "ip",
          label: "设备IP",
        },
        {
          prop: "category",
          label: "设备类型",
        },
        {
          prop: "name",
          label: "设备名称",
        },
      ],
    };
  },
  methods: {
    // ---------------------------分页
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
.relevance {
  padding: 20rem 30rem;
}
</style>