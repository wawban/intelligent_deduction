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
            <el-form-item label="" prop="name">
              <el-input
                placeholder="请输入账号"
                v-model="ruleForm.name"
                maxlength="20"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="mm">
              <el-input
                placeholder="请输入密码"
                type="password"
                v-model="ruleForm.mm"
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
export default {
  data() {
    // 用户验证
    var funcname = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        const regex = /^[a-zA-Z_\u4e00-\u9fa5]+$/;
        if (regex.test(value)) {
          if (this.ruleForm.name !== "") {
            this.$refs.ruleForm.validateField("name");
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
          this.$refs.ruleForm.validateField("mm");
        }
        callback();
      }
    };
    return {
      // 登录表单
      ruleForm: {
        name: "",
        mm: "",
      },
      // 表单验证
      rules: {
        name: [{ validator: funcname, trigger: "blur" }],
        password: [{ validator: funcpassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 点击登录
    sbmin() {
      this.$router.push("/home");
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
    padding: 38rem 0 0 46rem;
    display: flex;
    align-items: center;
    > img {
      height: 40rem;
      margin-right: 15rem;
    }
    > div {
      font-size: 26rem;
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
      width: 362rem;
      background: rgba(255, 255, 255, 0.12);
      border-radius: 10rem;
      margin-right: 224rem;
      padding: 55rem 43rem 74rem;
      .title {
        display: inline-block;
        .name {
          font-size: 26rem;
          font-weight: bold;
          color: #fff;
        }
        .border {
          height: 4rem;
          background: #fa9600;
          margin-top: 2rem;
          border-radius: 1rem;
        }
      }
      .form {
        padding-top: 55rem;
      }
      .wj {
        color: #aaa;
        font-size: 12rem;
        font-weight: 350;
        text-align: right;
        cursor: pointer;
      }
      .funcdl {
        line-height: 40rem;
        background: #fb8619;
        text-align: center;
        cursor: pointer;
        border-radius: 4rem;
        font-size: 18rem;
        font-weight: normal;
        margin-top: 23rem;
        color: #000;
      }
    }
  }
}
</style>
