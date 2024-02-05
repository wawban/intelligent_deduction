<template>
  <div class="account">
    <div>
      <div class="text">锁定次数:</div>
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
          style="width: 166rem"
        ></el-input>
        <span style="padding-left: 10rem">次(5~20)</span>
      </div>
    </div>
    <div>
      <div class="text">锁定时间:</div>
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
          style="width: 166rem"
        ></el-input>
        <span style="padding-left: 10rem">分钟(1~120)</span>
      </div>
    </div>
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
.account {
  padding: 60rem;
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 30rem;
    .text {
      width: 84rem;
      text-align: right;
      font-size: 14px;
      font-weight: 500;
    }
    .xianz {
      padding: 0 54rem 0 24rem;
    }
    .huandk {
      /deep/.el-switch__core {
        border: 1rem solid #aaaaaa !important;
      }
    }
  }
}
</style>