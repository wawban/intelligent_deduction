<!-- 主机资产 -->
<template>
  <div class="departmentmanagement">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">系统设置/</div>
      <div class="yys">部门管理</div>
    </div>
    <!--  -->
    <div class="container">
      <div class="left wbb">
        <div class="toptetol">
          <div class="guns"></div>
          <div class="wenz">资产组架构</div>
        </div>
        <div class="treestyle gdstyle">
          <!-- 树形 -->
          <Trees
            :datatree="zczdata"
            :treekry="modedata.id"
            @onuptada="onuptada"
          />
        </div>
      </div>
      <div class="right wbb">
        <div class="toptetol">
          <div class="zbbt">
            <div class="guns"></div>
            <div class="wenz">部门信息</div>
          </div>
          <div class="youb" v-if="flag" @click="dkbj">
            <img src="../img/bj.png" alt="" />
            编辑
          </div>
        </div>
        <div v-if="flag" class="xqinq">
          <div>
            <div class="qtext">部门名称:</div>
            <div>{{ modedata.name }}</div>
          </div>
          <div>
            <div class="qtext">部门负责人:</div>
            <div>{{ modedata.manager }}</div>
          </div>
          <div>
            <div class="qtext">部门地址:</div>
            <div>{{ modedata.location }}</div>
          </div>
          <div>
            <div class="qtext">资产IP范围:</div>
            <div>
              <span v-for="(e, i) in modedata.cidrs" :key="i">{{ e }}</span>
            </div>
          </div>
        </div>
        <!-- 表单 -->
        <div v-else style="padding-top: 60rem">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="110rem"
            class="demo-ruleForm"
          >
            <el-form-item label="部门名称：" prop="bmmc">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.bmmc"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="部门负责人：">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.fzr"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="张三" value="1"> </el-option>
                <el-option label="李四" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="部门地址：">
              <el-input
                placeholder="例XX省XX市XX街道XX号"
                class="inpustyle"
                v-model="ruleForm.bmmc"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <!-- ------------------------------------------------------------------------------------------------- -->
            <el-form-item
              :label="i == 0 ? '资产IP范围：' : ''"
              v-for="(item, i) in ruleForm.iparr"
              :key="i"
              :prop="'iparr.' + i + '.ip'"
              :rules="[
                { required: true, message: '请输入xxx', trigger: 'blur' },
                {
                  pattern:
                    /^(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([1-9]|[1-2]\d|3[0-2])$|^(0\.0\.0\.0\/0)$/,
                  message: '请输入正确ip段',
                  trigger: 'blur',
                },
              ]"
            >
              <div style="display: flex">
                <el-input
                  placeholder="请输入网段，如：192.168.0.1/24"
                  class="inpustyle"
                  v-model="item.ip"
                  size="mini"
                  style="width: 340rem"
                ></el-input>
                <span style="display: flex">
                  <div style="padding: 5rem 4rem 0 4rem">
                    <i
                      @click="adddltip"
                      class="el-icon-circle-plus-outline"
                      style="
                        font-size: 22rem;
                        cursor: pointer;
                        padding-top: 6rem;
                      "
                    ></i>
                  </div>
                  <div
                    style="padding-top: 5rem"
                    v-if="ruleForm.iparr.length !== 1"
                  >
                    <i
                      @click="delrte(i)"
                      class="el-icon-remove-outline"
                      style="font-size: 22rem; cursor: pointer"
                    ></i>
                  </div>
                </span>
              </div>
            </el-form-item>
            <!-- <el-form-item label="资产IP范围：" prop="iparr">
              <div
                style="display: flex"
                v-for="(e, i) in ruleForm.iparr"
                :key="i"
              >
                <el-input
                  placeholder="请输入网段，如：192.168.0.1/24"
                  class="inpustyle"
                  v-model="ruleForm.iparr[i]"
                  size="mini"
                  style="width: 340rem"
                ></el-input>

              </div>
            </el-form-item> -->
          </el-form>
          <div style="padding-left: 110rem">
            <el-button
              class="buttonsy"
              @click="sbmin"
              size="mini"
              style="margin-right: 30rem"
              >确认</el-button
            >
            <el-button
              class="buttonsy"
              size="mini"
              style="margin-left: 30rem"
              @click="flag = true"
              >取消</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <!-- --------------------------------------------------------------------- -->
    <!-- 编辑 -->
    <!-- <div class="tandialog">
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
          编辑
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100rem"
            class="demo-ruleForm"
          >
            <el-form-item label="资产名称：" prop="zcmc">
              <el-input
                class="inpustyle"
                v-model="ruleForm.zcmc"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="内外网：" prop="nww">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.nww"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="内网" value="1"> </el-option>
                <el-option label="外网" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产值价值：" prop="czjz">
              <el-input
                class="inpustyle"
                v-model="ruleForm.czjz"
                size="mini"
                style="width: 340rem"
                placeholder="请输入1-5，分值越高，产值越重要"
              ></el-input>
            </el-form-item>
            <el-form-item label="操作系统：" prop="czxt">
              <el-input
                class="inpustyle"
                v-model="ruleForm.czxt"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="等级保护：" prop="djbh">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.djbh"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="一级" value="1"> </el-option>
                <el-option label="二级" value="2"> </el-option>
                <el-option label="三级" value="3"> </el-option>
              </el-select>
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
            @click="dialogVisible = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div> -->
    <!-- --------------------------------------------------------------------- -->
  </div>
</template>
  <script>
import { governance_groups } from "@/api";
export default {
  data() {
    return {
      modedata: {}, //资产组架构-树形默认选中数据
      zczdata: [], // 资产组架构
      flag: true, //详情与表单切换
      // ------------------------------
      // 表单数据
      ruleForm: {},
      // 表单验证
      rules: {
        bmmc: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
        iparr: [{ required: true, message: "请输入ip", trigger: "blur" }],
        // { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        // password: [{ validator: funcpassword, trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.getgovernancegroups(); //资产组架构
  },
  methods: {
    onuptada(e) {
      this.modedata = e;
    },
    // 打开编辑
    dkbj() {
      this.flag = false;
      this.$nextTick(() => {
        this.$refs["ruleForm"].resetFields();
        this.ruleForm = JSON.parse(JSON.stringify(this.modedata));
      });
    },
    // 资产组架构
    getgovernancegroups() {
      governance_groups().then((res) => {
        this.modedata = res[0];
        this.treedata(res);
      });
    },
    // 资产组架-tree数据处理
    treedata(e) {
      for (var i = 0; i < e.length; i++) {
        this.$set(e[i], "type", true);
        if (e[i].sub_groups && e[i].sub_groups.length !== 0) {
          this.dgtree(e[i].sub_groups);
        }
      }
      this.zczdata = e;
    },
    // 资产组架-tree数据处理递归
    dgtree(arr) {
      for (var i = 0; i < arr.length; i++) {
        this.$set(arr[i], "type", true);
        if (arr[i].sub_groups && arr[i].sub_groups.length !== 0) {
          this.dgtree(arr[i].sub_groups);
        }
      }
    },
    // 表单提交
    sbmin() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          alert(1);
          // console.log('error submit!!');
          // return false;
        }
      });
    },
    // 表单重置
    // resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //   }
    // 表单添加ip
    adddltip() {
      this.ruleForm.iparr.push({ ip: "" });
    },
    // 表单删除ip
    delrte(i) {
      this.ruleForm.iparr.splice(i, 1);
    },
  },
};
</script>
  <style lang="less" scoped>
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
}
.treekub {
  > div {
    text-align: center;
    cursor: pointer;
    color: #fff;
  }
  > div:hover {
    color: #fa9600;
  }
  .hovys {
    color: #fa9600;
  }
  // background: red;
}
.departmentmanagement {
  .container {
    height: 809rem;
    display: flex;
    justify-content: space-between;
    .left {
      width: 298rem;
      .toptetol {
        display: flex;
        align-items: center;
        line-height: 18rem;
        padding-bottom: 16rem;
        padding-top: 20rem;
        padding-left: 30rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);

        .guns {
          height: 18rem;
          width: 4rem;
          background: #fa9600;
          margin-right: 8rem;
        }

        .wenz {
          font-size: 18rem;
          font-weight: 500;
        }
      }
      .treestyle {
        padding-top: 17rem;
      }
    }
    .right {
      width: 1510rem;
      padding: 0 30rem;
      .toptetol {
        padding-bottom: 16rem;
        padding-top: 20rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        .zbbt {
          display: flex;
          align-items: center;
          line-height: 18rem;
          .guns {
            height: 18rem;
            width: 4rem;
            background: #fa9600;
            margin-right: 8rem;
          }

          .wenz {
            font-size: 18rem;
            font-weight: 500;
          }
        }
        .youb {
          display: flex;
          align-items: center;
          cursor: pointer;
          > img {
            height: 22rem;
            margin-right: 10rem;
          }
          font-size: 14rem;
          color: #aaa;
        }
      }
      .xqinq {
        padding-top: 10rem;
        > div {
          padding-top: 30rem;
          display: flex;
          > div {
            font-size: 14rem;
          }
          .qtext {
            color: #aaaaaa;
            padding-right: 20rem;
          }
        }
      }
    }
  }
}
</style>