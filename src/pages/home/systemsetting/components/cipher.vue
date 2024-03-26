<template>
  <div class="cipher">
    <div>
      <div class="text">复杂度设置:</div>
      <div class="xianz">
        <el-switch
          class="huandk"
          v-model="flagf"
          active-color="#fa960069"
          inactive-color="transparent"
        >
        </el-switch>
      </div>
      <div>
        <el-checkbox class="fuxuan" v-model="checked1">大写</el-checkbox>
        <el-checkbox class="fuxuan" v-model="checked2">小写</el-checkbox>
        <el-checkbox class="fuxuan" v-model="checked3">数字</el-checkbox>
        <el-checkbox class="fuxuan" v-model="checked4">特殊符号</el-checkbox>
      </div>
    </div>
    <div>
      <div class="text">最小长度:</div>
      <div class="xianz">
        <el-switch
          class="huandk"
          v-model="flagz"
          active-color="#fa960069"
          inactive-color="transparent"
        >
        </el-switch>
      </div>
      <div>
        <el-input
          placeholder="请输入"
          class="inpustyle"
          v-model="zxcd"
          size="mini"
          style="width: 166px"
        ></el-input>
        <span style="padding-left: 10px">字符(6~32)</span>
      </div>
    </div>
    <div>
      <div class="text">密码有效期:</div>
      <div class="xianz">
        <el-switch
          class="huandk"
          v-model="flagm"
          active-color="#fa960069"
          inactive-color="transparent"
        >
        </el-switch>
      </div>
      <div>
        <el-input
          placeholder="请输入"
          class="inpustyle"
          v-model="ts"
          size="mini"
          style="width: 166px"
        ></el-input>
        <span style="padding-left: 10px">天(10~1000)</span>
      </div>
    </div>

    <!-- 复杂度设置:
最小长度:
密码有效期
请输入
请输入
字符(6~32)
天(10~1000) -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      flagf: false,
      flagz: false,
      flagm: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      zxcd: "",
      ts: "",
    };
  },
};
</script>
<style lang="less" scoped>
.cipher {
  .fuxuan {
    // 复选框
    /deep/.is-checked > .el-checkbox__inner {
      background: #fb8619;
      border-color: #fa9600;
    }
  }
  padding: 60px;
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .text {
      width: 84px;
      text-align: right;
      font-size: 14px;
      font-weight: 500;
    }
    .xianz {
      padding: 0 54px 0 24px;
    }
    .huandk {
      /deep/.el-switch__core {
        border: 1px solid #aaaaaa !important;
      }
    }
  }
}
</style>