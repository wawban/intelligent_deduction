<template>
  <div class="login">
    <div class="top">
      <img src="./img/logo.png" alt="" />
      <div>CybSeer智能推演平台</div>
    </div>
    <div class="logininpu">
      <div>
        <div class="title">
          <div class="name">用户登录</div>
          <div class="border"></div>
        </div>
        <div class="form">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item label="" prop="username">
              <el-input
                placeholder="请输入账号"
                v-model="ruleForm.username"
                maxlength="20"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                placeholder="请输入密码"
                type="password"
                v-model="ruleForm.password"
              ></el-input>
              <!-- <el-input
                type="password"
                v-model="ruleForm.mm"
                @keyup.enter.native="submit"
              ></el-input> -->
            </el-form-item>
          </el-form>
        </div>
        <div class="wj" @click="wjmm">忘记密码？</div>
        <div class="funcdl" @click="sbmin">登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
      </div>
    </div>
  </div>
</template>
<script>
import { auth_login } from "@/api";
export default {
  data() {
    // 用户验证
    var funcname = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        const regex = /^[a-zA-Z_\u4e00-\u9fa5]+$/;
        if (regex.test(value)) {
          if (this.ruleForm.username !== "") {
            this.$refs.ruleForm.validateField("username");
          }
          callback();
        } else {
          callback(new Error("仅支持中文、英文、下划线"));
        }
      }
    };
    // 密码验证
    var funcpassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.mm !== "") {
          this.$refs.ruleForm.validateField("password");
        }
        callback();
      }
    };
    return {
      // 登录表单
      ruleForm: {
        username: "",
        password: "",
      },
      // 表单验证
      rules: {
        username: [{ validator: funcname, trigger: "blur" }],
        password: [{ validator: funcpassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 点击登录
    sbmin() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          //     auth_login().then((res) => {
          //       console.log(res);
          //     });
        } else {
          return false;
        }
      });
      // this.$router.push("/home");
    },
    // 忘记密码提示
    wjmm() {
      this.$alert("请联系管理员", "提示", {
        confirmButtonText: "确定",
        // callback: action => {
        //   this.$message({
        //     type: 'info',
        //     message: `action: ${ action }`
        //   });
        // }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  background: url("./img/bg.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: relative;
  .top {
    padding: 38px 0 0 46px;
    display: flex;
    align-items: center;
    > img {
      height: 40px;
      margin-right: 15px;
    }
    > div {
      font-size: 26px;
      font-weight: bold;
      color: #fff;
    }
  }
  .logininpu {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    > div {
      width: 362px;
      background: rgba(255, 255, 255, 0.12);
      border-radius: 10px;
      margin-right: 224px;
      padding: 55px 43px 74px;
      .title {
        display: inline-block;
        .name {
          font-size: 26px;
          font-weight: bold;
          color: #fff;
        }
        .border {
          height: 4px;
          background: #fa9600;
          margin-top: 2px;
          border-radius: 1px;
        }
      }
      .form {
        padding-top: 55px;
      }
      .wj {
        color: #aaa;
        font-size: 12px;
        font-weight: 350;
        text-align: right;
        cursor: pointer;
      }
      .funcdl {
        line-height: 40px;
        background: #fb8619;
        text-align: center;
        cursor: pointer;
        border-radius: 4px;
        font-size: 18px;
        font-weight: normal;
        margin-top: 23px;
        color: #000;
      }
    }
  }
}
</style>
