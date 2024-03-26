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
        <div class="treestyle">
          <el-tree
            :data="data"
            :expand-on-click-node="false"
            :current-node-key="treekry"
            node-key="label"
            default-expand-all
          >
            <span
              style="
                padding-right: 12px;
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
              "
              slot-scope="{ node, data }"
            >
              <span style="font-size: 16px; display: flex; align-items: center"
                >{{ node.label }}
              </span>
              <div>
                <el-popover placement="right" trigger="hover">
                  <div class="treekub">
                    <div @click="qiehuan(data)">
                      {{ data.type ? "只看本级" : "查看本级和下级" }}
                    </div>
                  </div>
                  <div slot="reference">
                    <img style="height: 14px" src="../img/sd.png" alt="" />
                  </div>
                </el-popover>
              </div>
            </span>
          </el-tree>
        </div>
      </div>
      <div class="right wbb">
        <div class="toptetol">
          <div class="zbbt">
            <div class="guns"></div>
            <div class="wenz">部门信息</div>
          </div>
          <div class="youb" v-if="flag" @click="flag = false">
            <img src="../img/bj.png" alt="" />
            编辑
          </div>
        </div>
        <div v-if="flag" class="xqinq">
          <div>
            <div class="qtext">部门名称:</div>
            <div>后勤保障部</div>
          </div>
          <div>
            <div class="qtext">部门负责人:</div>
            <div>张有志</div>
          </div>
          <div>
            <div class="qtext">部门地址:</div>
            <div>湖南省宝现市莲池区华理技术园6楼201</div>
          </div>
          <div>
            <div class="qtext">资产IP范围:</div>
            <div>192.168.0.121/24; 192.168.0.159/24</div>
          </div>
        </div>
        <!-- 表单 -->
        <div v-else style="padding-top: 60px">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="110px"
            class="demo-ruleForm"
          >
            <el-form-item label="部门名称：" prop="bmmc">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.bmmc"
                size="mini"
                style="width: 340px"
              ></el-input>
            </el-form-item>
            <el-form-item label="部门负责人：">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.fzr"
                placeholder="请选择"
                style="width: 340px"
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
                style="width: 340px"
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
                  style="width: 340px"
                ></el-input>
                <span style="display: flex">
                  <div style="padding: 5px 4px 0 4px">
                    <i
                      @click="adddltip"
                      class="el-icon-circle-plus-outline"
                      style="font-size: 22px; cursor: pointer; padding-top: 6px"
                    ></i>
                  </div>
                  <div
                    style="padding-top: 5px"
                    v-if="ruleForm.iparr.length !== 1"
                  >
                    <i
                      @click="delrte(i)"
                      class="el-icon-pxove-outline"
                      style="font-size: 22px; cursor: pointer"
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
                  style="width: 340px"
                ></el-input>

              </div>
            </el-form-item> -->
          </el-form>
          <div style="padding-left: 110px">
            <el-button
              class="buttonsy"
              @click="sbmin"
              size="mini"
              style="margin-right: 30px"
              >确认</el-button
            >
            <el-button
              class="buttonsy"
              size="mini"
              style="margin-left: 30px"
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
          编辑
        </div>
        <div class="formstyle" style="padding-top: 20px">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="资产名称：" prop="zcmc">
              <el-input
                class="inpustyle"
                v-model="ruleForm.zcmc"
                size="mini"
                style="width: 340px"
              ></el-input>
            </el-form-item>
            <el-form-item label="内外网：" prop="nww">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.nww"
                placeholder="请选择"
                style="width: 340px"
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
                style="width: 340px"
                placeholder="请输入1-5，分值越高，产值越重要"
              ></el-input>
            </el-form-item>
            <el-form-item label="操作系统：" prop="czxt">
              <el-input
                class="inpustyle"
                v-model="ruleForm.czxt"
                size="mini"
                style="width: 340px"
              ></el-input>
            </el-form-item>
            <el-form-item label="等级保护：" prop="djbh">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.djbh"
                placeholder="请选择"
                style="width: 340px"
              >
                <el-option label="一级" value="1"> </el-option>
                <el-option label="二级" value="2"> </el-option>
                <el-option label="三级" value="3"> </el-option>
              </el-select>
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
    </div> -->
    <!-- --------------------------------------------------------------------- -->
  </div>
</template>
  <script>
export default {
  data() {
    return {
      flag: false, //详情与表单切换
      // ------------------------------
      // 表单数据
      ruleForm: {
        iparr: [{ ip: "" }],
      },
      // 表单验证
      rules: {
        bmmc: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
        iparr: [{ required: true, message: "请输入ip", trigger: "blur" }],
        // { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        // password: [{ validator: funcpassword, trigger: "blur" }],
      },
      //   dialogVisible: false, // 编辑弹窗
      // --------------------------------------------------------------------------------------
      // 默认选中值
      treekry: "地区3",
      // 树形数据
      data: [
        {
          label: "A地区",
          type: true,
          children: [
            {
              label: "地区1",
              type: true,
            },
            {
              label: "地区2",
              type: true,
            },
            {
              label: "地区3",
              type: true,
              children: [
                {
                  label: "地区11",
                  type: true,
                },
                {
                  label: "地区22",
                  type: true,
                },
                {
                  label: "地区33",
                  type: true,
                },
              ],
            },
          ],
        },
        {
          label: "服务器组",
          type: true,
          children: [
            {
              label: "服务器组1",
              type: true,
            },
            {
              label: "服务器组2",
              type: true,
            },
            {
              label: "服务器组3",
              type: true,
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
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
    // -----------------------------------------------------------------------------------------------
    // 切换本级与下级
    qiehuan(e) {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].label == e.label) {
          this.data[i].type = !this.data[i].type;
          // console.log(this.data[i].label);
          this.treekry = this.data[i].label;
          return;
        }
        if (this.data[i].children && this.data[i].children.length !== 0) {
          this.dg(this.data[i].children, e.label);
        }
      }
    },
    // 递归树
    dg(arr, e) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].label == e) {
          arr[i].type = !arr[i].type;
          this.treekry = arr[i].label;
          return;
        }
        if (arr[i].children && arr[i].children.length !== 0) {
          this.dg(arr[i].children, e);
        }
      }
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
    backdrop-filter: blur(13px);
    // background: #676767;
    border-radius: 5px;
    border: 1px solid;
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
    height: 809px;
    display: flex;
    justify-content: space-between;
    .left {
      width: 298px;
      .toptetol {
        display: flex;
        align-items: center;
        line-height: 18px;
        padding-bottom: 16px;
        padding-top: 20px;
        padding-left: 30px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);

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
      .treestyle {
        padding-top: 17px;
      }
    }
    .right {
      width: 1510px;
      padding: 0 30px;
      .toptetol {
        padding-bottom: 16px;
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        .zbbt {
          display: flex;
          align-items: center;
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
        .youb {
          display: flex;
          align-items: center;
          cursor: pointer;
          > img {
            height: 22px;
            margin-right: 10px;
          }
          font-size: 14px;
          color: #aaa;
        }
      }
      .xqinq {
        padding-top: 10px;
        > div {
          padding-top: 30px;
          display: flex;
          > div {
            font-size: 14px;
          }
          .qtext {
            color: #aaaaaa;
            padding-right: 20px;
          }
        }
      }
    }
  }
}
</style>