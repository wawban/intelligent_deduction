<!-- 漏洞知识库 -->
<template>
  <div class="personnelmanagement">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">系统设置/</div>
      <div class="yys">人员管理</div>
    </div>
    <div class="lbox wbb">
      <div class="zsbtbox">
        <div class="guns"></div>
        <div class="wenz">人员管理</div>
      </div>
      <!-- 查询组件 -->
      <div class="zheestoub">
        <div>
          <el-button
            class="buttonsy"
            size="mini"
            icon="el-icon-plus"
            @click="addre"
            >添加</el-button
          >
        </div>
        <!-- ----------------------------------------------------------------------------------------------------- -->
        <div class="zheipr">
          <div class="marginr">
            <el-popover placement="bottom" trigger="hover">
              <div class="ckqbtopqian">
                <el-button
                  class="buttonsy"
                  size="mini"
                  @click="getgovernancehosts('clear')"
                  >查看全部</el-button
                >
              </div>
              <div slot="reference" class="boxjc">
                <img src="../img/qb.png" alt="" />
                查看全部
              </div>
            </el-popover>
          </div>
          <!-- 复合查询 -->
          <div class="marginr">
            <el-popover placement="bottom" width="530" trigger="click">
              <div slot="reference" class="boxjc">
                <img src="../img/tj.png" alt="" />
                条件筛选
              </div>
              <div class="tjiansxian">
                <div class="top">
                  <div @click="getgovernancehosts">筛选</div>
                  <div @click="getgovernancehosts('clear')">清空</div>
                </div>
                <div
                  style="padding: 12rem 0; display: flex; align-items: center"
                >
                  符合以下&nbsp;&nbsp;
                  <el-select
                    class="zhessless"
                    size="mini"
                    style="width: 74rem"
                    v-model="rysy"
                    placeholder="请选择"
                  >
                    <el-option label="任一" value="or"></el-option>
                    <el-option label="所有" value="and"></el-option>
                  </el-select>
                  &nbsp;&nbsp;条件
                </div>
                <div class="tjiansearch">
                  <div v-for="(e, i) in searcharr" :key="i">
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        v-model="e.key"
                        filterable
                        style="width: 180rem"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in 4"
                          :key="item"
                          :label="'条件' + item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </div>
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        style="width: 88rem"
                        v-model="e.value"
                        placeholder="请选择"
                      >
                        <el-option label="包含" value="contain"></el-option>
                        <el-option
                          label="不包含"
                          value="notcontain"
                        ></el-option>
                        <el-option label="等于" value="eq"></el-option>
                        <el-option label="不等于" value="ne"></el-option>
                        <!-- <el-option label="为空" value="3"></el-option>
                        <el-option label="不为空" value="4"></el-option> -->
                      </el-select>
                    </div>
                    <div>
                      <el-input
                        placeholder="请输入"
                        class="inpustyle"
                        v-model="e.type"
                        size="mini"
                        style="width: 180rem"
                      ></el-input>
                    </div>
                    <div style="width: 20rem">
                      <i
                        @click="cxoff(i)"
                        class="el-icon-close"
                        style="cursor: pointer"
                      ></i>
                    </div>
                  </div>
                  <div style="padding-top: 20rem">
                    <el-button class="buttonsy" @click="appendtj" size="mini"
                      >添加条件</el-button
                    >
                  </div>
                </div>
              </div>
            </el-popover>
          </div>
          <div class="marginr">
            <el-popover placement="bottom" width="220" trigger="hover">
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
      </div>

      <!-- 列表 -->
      <!-- <div class="biaotab"> -->
      <div>
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
              <!-- 操作 -->
              <div v-if="item.label == '操作'">
                <img
                  @click="dkcz(scope.row)"
                  style="height: 22rem; cursor: pointer"
                  src="../img/js.png"
                  alt=""
                />
                <img
                  @click="bjdk(scope.row)"
                  style="height: 22rem; cursor: pointer; margin: 0 26rem"
                  src="../img/bj.png"
                  alt=""
                />
                <img
                  @click="dkaisc(scope.row)"
                  style="height: 22rem; cursor: pointer"
                  src="../img/sc.png"
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
    <!-- 添加 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="dialogVisible"
        width="520rem"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div
          style="
            color: #fff;
            text-align: center;
            font-size: 18rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 16rem;
          "
        >
          添加
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="addruleForm"
            label-width="100rem"
            class="demo-ruleForm"
          >
            <el-form-item label="角色：" prop="js">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.js"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户名：" prop="yhm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.yhm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="账号：" prop="zh">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.zh"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="mm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.mm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="qrmm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.qrmm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="部门：" prop="bm">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.bm"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开启/禁用：">
              <el-switch
                class="huandk"
                v-model="ruleForm.kqjy"
                active-color="#fa960069"
                inactive-color="transparent"
              >
              </el-switch>
            </el-form-item>
            <el-form-item label="手机号：" prop="sjh">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.sjh"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="yx">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.yx"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div style="text-align: center">
          <el-button
            class="buttonsy"
            @click="addsbmin"
            size="mini"
            style="margin-right: 30rem"
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30rem"
            @click="dialogVisible = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 编辑 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="flagbj"
        width="520rem"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div
          style="
            color: #fff;
            text-align: center;
            font-size: 18rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 16rem;
          "
        >
          编辑
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="bjiform"
            :rules="rules"
            ref="bjruleForm"
            label-width="100rem"
            class="demo-ruleForm"
          >
            <el-form-item label="角色：" prop="js">
              <el-select
                class="zhessless"
                size="mini"
                v-model="bjiform.js"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户名：" prop="yhm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="bjiform.yhm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="账号：" prop="zh">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="bjiform.zh"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="部门：" prop="bm">
              <el-select
                class="zhessless"
                size="mini"
                v-model="bjiform.bm"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开启/禁用：">
              <el-switch
                class="huandk"
                v-model="bjiform.kqjy"
                active-color="#fa960069"
                inactive-color="transparent"
              >
              </el-switch>
            </el-form-item>
            <el-form-item label="手机号：" prop="sjh">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="bjiform.sjh"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="yx">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="bjiform.yx"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div style="text-align: center">
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-right: 30rem"
            @click="bjsbmin"
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30rem"
            @click="flagbj = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 重置密码 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="flagcz"
        width="520rem"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div
          style="
            color: #fff;
            text-align: center;
            font-size: 18rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 16rem;
          "
        >
          重置密码
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="czruleForm"
            :rules="rules"
            ref="czruleForm"
            label-width="100rem"
            class="demo-ruleForm"
          >
            <el-form-item label="密码：" prop="mm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="czruleForm.mm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="qrmm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="czruleForm.qrmm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div style="text-align: center">
          <el-button class="buttonsy" size="mini" style="margin-right: 30rem"
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30rem"
            @click="flagcz = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 删除框 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="scflag"
        width="520rem"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div
          style="
            color: #fa9600;
            font-size: 18rem;
            font-weight: 500;
            padding-bottom: 16rem;
            display: flex;
            align-items: center;
          "
        >
          <i
            class="el-icon-warning-outline"
            style="font-size: 24rem; color: #fa9600; margin-right: 10rem"
          ></i>
          提示
        </div>
        <div style="font-size: 16rem; padding: 20rem 0; color: #fff">
          确定删除所选人员吗？
        </div>
        <div style="text-align: right">
          <el-button
            size="mini"
            style="
              margin-right: 30rem;
              background: #fa9600 !important;
              color: #fff !important;
              border-color: #fa9600;
            "
            @click="sbmsc"
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30rem"
            @click="scflag = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>
  <script>
import {
  system_users,
  system_userspost,
  system_userssc,
  system_usersbj,
} from "@/api";
export default {
  data() {
    return {
      czid: "", //重置id
      czruleForm: {}, //重置表单
      bjiform: {}, //编辑表单
      scid: "", //删除id
      scflag: false, //删除判断
      rysy: "and", //符合条件，任一或所有
      //   查询数据
      searcharr: [],
      // 分页
      page: {
        offset: 1,
        limit: 10,
        total: 0,
      },
      // 添加表单数据
      ruleForm: {
        js: "",
        yhm: "",
        mm: "",
        qrmm: "",
        zh: "",
        bm: "",
        kqjy: false,
        xxx: "",
      },
      // 添加表单验证
      rules: {
        js: [{ required: true, message: "请选择角色 ", trigger: "change" }],
        yhm: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        zh: [{ required: true, message: "请输入账号", trigger: "blur" }],
        mm: [{ required: true, message: "请输入密码", trigger: "blur" }],
        qrmm: [{ required: true, message: "请输入确认密码", trigger: "blur" }],
        bm: [{ required: true, message: "请输入部门", trigger: "change" }],
        // { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        // password: [{ validator: funcpassword, trigger: "blur" }],
      },
      dialogVisible: false, //添加弹窗
      // --------------------------------------
      flagcz: false, //重置密码
      flagbj: false, //编辑弹窗
      // -----------------------------------------------------------------关联查询组件下
      // 表格数据
      tableData: [{}],
      // 表头数据
      btarr: [],
      // 表头改变数据
      vararr: [],
      // 表头原始数据
      tablearr: [
        {
          prop: "username",
          label: "用户名",
          type: true,
        },
        {
          prop: "b",
          label: "账号",
          type: true,
        },
        {
          prop: "c",
          label: "手机号",
          type: true,
        },
        {
          prop: "d",
          label: "邮箱",
          type: true,
        },
        {
          prop: "e",
          label: "角色",
          type: true,
        },
        {
          prop: "f",
          label: "开启/禁用",
          type: true,
        },
        {
          prop: "g",
          label: "部门",
          type: true,
        },
        {
          prop: "h",
          label: "操作",
          type: true,
        },
      ],
    };
  },
  watch: {
    // --------------------表格头
    btarr: {
      handler: function (val, oldVal) {
        this.vararr = this.btarr.filter((e) => {
          return e.type;
        });
        this.$nextTick(() => {
          this.tableData = JSON.parse(JSON.stringify(this.tableData));
        });
        // this.tableData = JSON.parse(JSON.stringify(this.tableData))
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    // 表格头
    this.btarr = localStorage.getItem("localpersonnelmanagement")
      ? JSON.parse(localStorage.getItem("localpersonnelmanagement"))
      : this.tablearr;
    this.$dragging.$on("dragged", (e) => {
      this.btarr = e.value.list;
      localStorage.setItem(
        "localpersonnelmanagement",
        JSON.stringify(this.btarr)
      );
    });
    this.getgovernancehosts(); // 列表
  },
  methods: {
    // 打开重置
    dkcz(e) {
      this.czid = e.id;
      this.flagcz = true;
      this.$nextTick(() => {
        this.$refs["czruleForm"].resetFields();
      });
    },
    // 编辑提交
    bjsbmin() {
      this.$refs["bjruleForm"].validate((valid) => {
        if (valid) {
          system_usersbj(this.bjiform).then((res) => {
            this.getgovernancehosts(); //更新数据
            this.flagbj = false; //关闭弹窗
          });
        } else {
          return false;
        }
      });
    },
    // 编辑打开
    bjdk(e) {
      this.flagbj = true;
      this.$nextTick(() => {
        this.$refs["bjruleForm"].resetFields();
        this.bjiform = e;
      });
    },
    // 删除打开
    dkaisc(e) {
      this.scid = e.id;
      this.scflag = true;
    },
    // 删除提交
    sbmsc() {
      system_userssc(this.scid).then(() => {
        this.scflag = false;
        this.getgovernancehosts();
      });
    },
    // 提交添加
    addsbmin() {
      this.$refs["addruleForm"].validate((valid) => {
        if (valid) {
          system_userspost(this.ruleForm).then((res) => {
            this.getgovernancehosts(); //更新数据
            this.dialogVisible = false; //关闭弹窗
          });
        } else {
          return false;
        }
      });
    },
    // 打开添加
    addre() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs["addruleForm"].resetFields();
      });
    },
    // 列表
    getgovernancehosts(e) {
      // 清空条件+查询所有
      if (e == "clear") {
        this.searcharr = [];
        this.page.offset = 1;
      }
      var obj = {
        offset: this.page.offset,
        limit: this.page.limit,
      };
      if (this.searcharr.length != 0) {
        var arr = this.searcharr.filter((item) => {
          return item.key.length != 0 && item.type.length != 0;
        });
        if (arr.length != 0) {
          var tj = arr.map((req) => {
            var jihe = req.key + " " + req.value + " " + (req.type || "");
            return jihe;
          });
          obj.filter = tj.join(" " + this.rysy + " ");
        }
      }
      system_users(obj).then((res) => {
        this.page = res.pagination;
        this.tableData = res.results;
        // this.tableData = [{ c: "ww" }];
        // this.tableData = res.results.map((item) => {
        //   return item.meta;
        // });
      });
    },
    // 表格头
    fields(e, i) {
      if (e == "1") {
        this.btarr[i].type = false;
      } else {
        this.btarr[i].type = true;
      }
      localStorage.setItem(
        "localpersonnelmanagement",
        JSON.stringify(this.btarr)
      );
    },
    // 查询组件添加条件
    appendtj() {
      this.searcharr.push({ key: "", value: "contain", type: "" });
    },
    // 查询组件减少条件
    cxoff(i) {
      this.searcharr.splice(i, 1);
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
.personnelmanagement {
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
      backdrop-filter: blur(13rem);
      // background: #676767;
      border-radius: 5rem;
      border: 1rem solid;
      border-image: linear-gradient(270deg, #fb8619 0%, #fcba48 100%) 1;
    }
    // -------------------------------------------------------
    .huandk {
      /deep/.el-switch__core {
        border: 1rem solid #aaaaaa !important;
      }
    }
  }
  .lbox {
    height: 809rem;
    padding: 20rem 30rem;
    // .biaotab {
    //   .styg {
    //     color: #e53a40;
    //   }
    //   .styz {
    //     color: #fa9600;
    //   }
    //   .styd {
    //     color: #e53a40;
    //   }
    // }
  }
  .zheestoub {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>