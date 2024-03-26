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
      <div style="padding-top: 30px">
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
            padding: '16px 0',
          }"
          :cell-style="{
            borderColor: 'rgba(255, 255, 255, 0.3)',
            backgroundColor: '#161616',
            color: '#fff',
            fontSize: '14px',
            padding: '16px 0',
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
              <!-- 操作 -->
              <div v-if="item.label == '操作'">
                <img
                  @click="gotu(scope.row)"
                  style="height: 22px; cursor: pointer"
                  src="../img/cx.png"
                  alt=""
                />
                <img
                  @click="drawer = true"
                  style="height: 22px; cursor: pointer"
                  src="../img/bj.png"
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
      //列表数据
      tableData: [
        {
          a: "2023.10.23 02:12:15",
          b: "admin",
          c: "超级管理员",
          d: "人力资源部",
          e: "10.128.240.2",
          f: "安全性控制·-盲区资产扫描限制",
        },
        {
          a: "2023.10.23 02:12:15",
          b: "admin",
          c: "超级管理员",
          d: "人力资源部",
          e: "10.128.240.2",
          f: "安全性控制·-盲区资产扫描限制",
        },
        {
          a: "2023.10.23 02:12:15",
          b: "admin",
          c: "超级管理员",
          d: "人力资源部",
          e: "10.128.240.2",
          f: "安全性控制·-盲区资产扫描限制",
        },
        {
          a: "2023.10.23 02:12:15",
          b: "admin",
          c: "超级管理员",
          d: "人力资源部",
          e: "10.128.240.2",
          f: "安全性控制·-盲区资产扫描限制",
        },
        {
          a: "2023.10.23 02:12:15",
          b: "admin",
          c: "超级管理员",
          d: "人力资源部",
          e: "10.128.240.2",
          f: "安全性控制·-盲区资产扫描限制",
        },
        {
          a: "2023.10.23 02:12:15",
          b: "admin",
          c: "超级管理员",
          d: "人力资源部",
          e: "10.128.240.2",
          f: "安全性控制·-盲区资产扫描限制",
        },
        {
          a: "2023.10.23 02:12:15",
          b: "admin",
          c: "超级管理员",
          d: "人力资源部",
          e: "10.128.240.2",
          f: "安全性控制·-盲区资产扫描限制",
        },
        {
          a: "2023.10.23 02:12:15",
          b: "admin",
          c: "超级管理员",
          d: "人力资源部",
          e: "10.128.240.2",
          f: "安全性控制·-盲区资产扫描限制",
        },
        {
          a: "2023.10.23 02:12:15",
          b: "admin",
          c: "超级管理员",
          d: "人力资源部",
          e: "10.128.240.2",
          f: "安全性控制·-盲区资产扫描限制",
        },
        {
          a: "2023.10.23 02:12:15",
          b: "admin",
          c: "超级管理员",
          d: "人力资源部",
          e: "10.128.240.2",
          f: "安全性控制·-盲区资产扫描限制",
        },
      ],
      // 表头改变数据
      vararr: [
        {
          prop: "a",
          label: "日期",
          type: true,
        },
        {
          prop: "b",
          label: "用户名",
          type: true,
        },
        {
          prop: "c",
          label: "角色",
          type: true,
        },
        {
          prop: "d",
          label: "部门",
          type: true,
        },
        {
          prop: "e",
          label: "IP",
          type: true,
        },
        {
          prop: "f",
          label: "操作详情",
          type: true,
        },
      ],
      // 分页
      page: {
        current: 1,
        size: 10,
        total: 44,
      },
    };
  },
};
</script>
  <style lang="less" scoped>
.logmanagement {
  .rizbox {
    height: 809px;
    padding: 20px 30px;
  }
}
</style>
  