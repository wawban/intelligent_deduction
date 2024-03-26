<template>
  <div class="assetregiondetails">
    <!-- 面包屑 -->
    <!-- <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">系统设置/资产区域管理/</div>
      <div class="yys">资产区域详情</div>
    </div> -->
    <div class="crumbssfh">
      <div class="dq">
        <div class="img">
          <img src="../img/sh.png" alt="" />
        </div>
        <div class="wys">系统设置/资产区域管理/</div>
        <div class="yys">资产区域详情</div>
      </div>
      <div class="fanh" @click="goto">
        <img src="../img/fh.png" alt="" />返回
      </div>
    </div>
    <!-- 核心区 -->
    <div class="hexqu wbb">
      <div class="zsbtbox">
        <div class="guns"></div>
        <div class="wenz">核心区</div>
      </div>
      <div class="textwenz">
        <div>
          <div>
            <div style="color: #aaa; padding-right: 10px">安全重要性:</div>
            <div>10</div>
          </div>

          <div>
            <div style="color: #aaa; padding-right: 10px">互联网连通性:</div>
            <div>是(主动)</div>
          </div>
        </div>
        <div>
          <div>
            <div style="color: #aaa; padding-right: 10px">区域资产组:</div>
            <div>利和服务集团</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 区域联通策略 -->
    <div class="ltcel wbb">
      <div class="toupai">
        <div class="tesbt">
          <div class="guns"></div>
          <div class="wenz">区域联通策略</div>
        </div>

        <el-button
          class="buttonsy"
          size="mini"
          icon="el-icon-plus"
          @click="dialogVisible = true"
          >创建策略</el-button
        >
      </div>
      <!-- 列表 -->
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
            padding: '18px 0',
          }"
          :cell-style="{
            borderColor: 'rgba(255, 255, 255, 0.3)',
            backgroundColor: '#161616',
            color: '#fff',
            fontSize: '14px',
            padding: '18px 0',
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
            label-width="124px"
            class="demo-ruleForm"
          >
            <el-form-item label="连通类型：" prop="ltlx">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.ltlx"
                placeholder="请选择"
                style="width: 340px"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="资产组：" prop="zcz">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.zcz"
                placeholder="请选择"
                style="width: 340px"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="连通对象：" prop="ltdx">
              <el-input
                type="textarea"
                placeholder="请输入"
                class="inputtextarea"
                v-model="ruleForm.ltdx"
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
      // 添加表单数据
      ruleForm: {},
      // 添加表单验证
      rules: {
        ltlx: [
          { required: true, message: "请选择互联网联通性", trigger: "change" },
        ],
        zcz: [
          { required: true, message: "请选择互联网联通性", trigger: "change" },
        ],
        ltdx: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      dialogVisible: false, //添加弹窗
      //列表数据
      tableData: [
        {
          a: "人力资源部",
          b: "组间互通",
          c: "人力资源部",
        },
        {
          a: "人力资源部",
          b: "组间互通",
          c: "人力资源部",
        },
        {
          a: "人力资源部",
          b: "组间互通",
          c: "人力资源部",
        },
        {
          a: "人力资源部",
          b: "组间互通",
          c: "人力资源部",
        },
        {
          a: "人力资源部",
          b: "组间互通",
          c: "人力资源部",
        },
      ],
      // 表头改变数据
      vararr: [
        {
          prop: "a",
          label: "资产组",
          type: true,
        },
        {
          prop: "b",
          label: "连通类型",
          type: true,
        },
        {
          prop: "c",
          label: "连通对象",
          type: true,
        },
        {
          prop: "h",
          label: "操作",
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
  methods: {
    goto() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.assetregiondetails {
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
  .hexqu {
    height: 246px;
    padding: 20px 30px;
    .textwenz {
      padding-top: 20px;
      > div {
        display: flex;

        > div {
          display: flex;
          width: 314px;
          font-size: 14px;
          > div {
            line-height: 40px;
          }
        }
      }
    }
  }
  .ltcel {
    height: 547px;
    padding: 20px 30px;
    margin-top: 16px;
    .toupai {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      .tesbt {
        display: flex;
        line-height: 18px;

        .guns {
          height: 18px;
          width: 4px;
          background: #fa9600;
          margin-right: 8px;
        }

        .wenz {
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>