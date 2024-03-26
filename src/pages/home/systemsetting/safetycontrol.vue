<template>
  <div class="safetycontrol">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">系统设置/</div>
      <div class="yys">安全性控制</div>
    </div>
    <div class="box">
      <div class="left wbb">
        <div class="zsbtbox" style="padding-left: 30px">
          <div class="guns"></div>
          <div class="wenz">安全性控制</div>
        </div>
        <div class="daohang">
          <div :class="type == 1 ? 'ys' : ''" @click="ontype(1)">密码安全</div>
          <div :class="type == 2 ? 'ys' : ''" @click="ontype(2)">账户安全</div>
          <div :class="type == 3 ? 'ys' : ''" @click="ontype(3)">
            访问IP限制
          </div>
        </div>
      </div>
      <div class="right wbb">
        <!-- 密码安全 -->
        <Cipher v-if="type == 1" />
        <!-- 账户安全 -->
        <Account v-if="type == 2" />
        <!-- 访问IP限制 -->
        <Interview v-if="type == 3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Cipher: () => import("./components/cipher.vue"),
    Account: () => import("./components/account.vue"),
    Interview: () => import("./components/interview.vue"),
  },
  data() {
    return {
      type: 1,
    };
  },
  methods: {
    ontype(e) {
      this.type = e;
    },
  },
};
</script>
<style lang="less" scoped>
.safetycontrol {
  .box {
    display: flex;
    justify-content: space-between;
    > div {
      height: 809px;
    }
    .left {
      width: 298px;
      padding-top: 20px;
      .daohang {
        padding-top: 18px;
        > div {
          text-align: center;
          line-height: 40px;
          font-size: 16px;
          font-weight: 500;
          border-bottom: 1px solid #292929;
          cursor: pointer;
        }
        .ys {
          background: #292929;
          color: #fa9600;
        }
      }
    }
    .right {
      width: 1510px;
    }
  }
}
</style>