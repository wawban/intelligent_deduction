<template>
  <div class="loophole">
    <!-- 表格 -->
    <el-table
      class="tablebottom"
      :data="vulns"
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
        <template slot-scope="scope">
          <!-- 漏洞等级 -->
          <div v-if="item.label == '漏洞等级'">
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
          <div v-else-if="item.label == '处理状态'">
            <div class="clizt">已处理</div>
          </div>
          <div v-else-if="item.label == '操作'">
            <img
              style="height: 22px; cursor: pointer"
              src="../../img/bj.png"
              alt=""
            />
          </div>
          <span v-else>{{ scope.row[scope.column.property] }}</span>
        </template>
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
    vulns: {
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
      // 表头数据
      vararr: [
        {
          prop: "name",
          label: "漏洞名称",
        },
        {
          prop: "type",
          label: "漏洞类型",
        },
        {
          label: "漏洞等级",
          width: "100",
        },
        {
          prop: "treatment_result",
          label: "漏洞状态",
          width: "100",
        },
        {
          prop: "treatment_result",
          label: "工单状态",
          width: "100",
        },
        {
          prop: "time_discovered",
          label: "发现时间",
        },
        {
          label: "操作",
          width: "100",
        },
      ],
    };
  },
  mounted() {
    // console.log(11111111);
    // console.log(this.vulns);
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
.loophole {
  padding: 20px 30px;
  .tablebottom {
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
    .clizt {
      color: #29ca9b;
    }
  }
}
</style>