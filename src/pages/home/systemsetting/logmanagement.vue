<template>
  <div class="logmanagement">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">系统设置/</div>
      <div class="yys">日志管理</div>
    </div>
    <div class="rizbox wbb">
      <div class="zsbtbox">
        <div class="guns"></div>
        <div class="wenz">日志管理</div>
      </div>
      <div style="padding-top: 30rem">
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
              <!-- prop: "timestamp",
          label: "日期",
          $moment(meta.time_updated).format("YYYY-MM-DD HH:mm:ss") -->
              <!-- 操作 -->
              <div v-if="item.label == '日期'">
                {{ $moment(scope.row.timestamp).format("YYYY-MM-DD HH:mm:ss") }}
                <!-- <img
                  @click="gotu(scope.row)"
                  style="height: 22rem; cursor: pointer"
                  src="../img/cx.png"
                  alt=""
                />
                <img
                  @click="drawer = true"
                  style="height: 22rem; cursor: pointer"
                  src="../img/bj.png"
                  alt=""
                /> -->
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
import { system_logs } from "@/api";
export default {
  data() {
    return {
      //列表数据
      tableData: [],
      // 表头改变数据
      vararr: [
        {
          label: "日期",
          type: true,
        },
        {
          prop: "username",
          label: "用户名",
          type: true,
        },
        {
          prop: "user_role",
          label: "角色",
          type: true,
        },
        {
          prop: "department",
          label: "部门",
          type: true,
        },
        {
          prop: "ip",
          label: "IP",
          type: true,
        },
        {
          prop: "detail",
          label: "操作详情",
          type: true,
        },
      ],
      // 分页
      page: {
        offset: 1,
        limit: 10,
        total: 0,
      },
    };
  },
  mounted() {
    this.getgovernancehosts(); // 数据
  },
  methods: {
    getgovernancehosts(e) {
      var obj = {
        offset: this.page.offset,
        limit: this.page.limit,
      };
      obj.offset = obj.offset - 1;
      system_logs(obj).then((res) => {
        this.page = res.pagination;
        this.page.offset += 1;
        this.tableData = res.results;
      });
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
.logmanagement {
  .rizbox {
    height: 809rem;
    padding: 20rem 30rem;
  }
}
</style>
  