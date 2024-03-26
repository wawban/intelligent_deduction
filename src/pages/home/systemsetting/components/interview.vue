<template>
  <div class="interview">
    <div>
      <el-button
        class="buttonsy"
        size="mini"
        icon="el-icon-plus"
        @click="dialogVisible = true"
        >添加</el-button
      >
    </div>
    <div style="padding-top: 20px">
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
                @click="dialogVisible = true"
                style="height: 22px; cursor: pointer"
                src="../../img/cx.png"
                alt=""
              />
              <img
                @click="dialogVisible = true"
                style="height: 22px; cursor: pointer"
                src="../../img/bj.png"
                alt=""
              />
            </div>
            <span v-else>{{ scope.row[scope.column.property] }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 添加 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="dialogVisible"
        width="520px"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div
          style="
            color: #fff;
            text-align: center;
            font-size: 18px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 16px;
          "
        >
          添加
        </div>
        <div class="formstyle" style="padding-top: 20px">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="添加IP：" prop="ip">
              <el-input
                :autosize="{ minRows: 5 }"
                type="textarea"
                :placeholder="'请输入IP地址，多个IP地址以换行分割\n10.10.10.72\n10.10.10.75'"
                class="inputtextarea"
                v-model="ruleForm.ip"
                size="mini"
                style="width: 340px"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div style="text-align: center">
          <el-button class="buttonsy" size="mini" style="margin-right: 30px"
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30px"
            @click="dialogVisible = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        ip: "",
      },
      // 添加表单验证
      rules: {
        ip: [{ required: true, message: "请输入IP", trigger: "blur" }],
      },
      dialogVisible: false, //添加弹框
      tableData: [
        {
          a: "192.168.0.121",
          b: "2024.10.23 01:10:15",
        },
        {
          a: "192.168.0.121",
          b: "2024.10.23 01:10:15",
        },
        {
          a: "192.168.0.121",
          b: "2024.10.23 01:10:15",
        },
        {
          a: "192.168.0.121",
          b: "2024.10.23 01:10:15",
        },
        {
          a: "192.168.0.121",
          b: "2024.10.23 01:10:15",
        },
      ],
      // 表头改变数据
      vararr: [
        {
          prop: "a",
          label: "不允许访问IP",
          type: true,
        },
        {
          prop: "b",
          label: "创建时间",
          type: true,
        },
        {
          prop: "h",
          label: "操作",
          type: true,
          width: "160px",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.interview {
  padding: 40px 50px;
  .tandialog {
    /deep/.el-dialog {
      background: none !important;
    }
    /deep/.el-dialog__header {
      // padding: 0;
      display: none;
    }
    /deep/.el-dialog__body {
      // background: #676767;
      background: rgba(103, 103, 103, 0.2);
      backdrop-filter: blur(13px);
      // background: #676767;
      border-radius: 5px;
      border: 1px solid;
      border-image: linear-gradient(270deg, #fb8619 0%, #fcba48 100%) 1;
    }
    // -------------------------------------------------------
  }
}
</style>