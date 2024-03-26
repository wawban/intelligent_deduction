<template>
  <div class="toolmanagement">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">系统设置/</div>
      <div class="yys">工具管理</div>
    </div>
    <div class="rizbox wbb">
      <div class="zsbtbox">
        <div class="guns"></div>
        <div class="wenz">工具管理</div>
      </div>
      <div class="max" style="padding-top: 30px">
        <span class="btgju">Ping工具</span>
        <div>
          <div class="text">Ping工具</div>
          <el-input
            placeholder="请输入"
            class="inpustyle"
            v-model="gj"
            size="mini"
            style="width: 465px"
          ></el-input>
        </div>
        <div>
          <div class="text">测试结果:</div>
          <el-input
            type="textarea"
            class="inputtextarea"
            v-model="jg"
            size="mini"
            style="width: 465px"
          ></el-input>
        </div>
        <div>
          <div class="text"></div>
          <el-button class="buttonsy" size="mini" style="margin-right: 30px"
            >测试</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gj: "",
      jg: "",
    };
  },
};
</script>
<style lang="less" scoped>
.toolmanagement {
  .rizbox {
    height: 809px;
    padding: 20px 30px;

    .max {
      .btgju {
        font-size: 16px;
        font-weight: 500;
        color: rgba(255, 165, 20, 0.9961);
        border-bottom: 3px solid #fa9600;
        padding-bottom: 3px;
      }
      > div {
        display: flex;
        padding-top: 48px;
        .text {
          width: 90px;
          font-size: 16px;
          font-weight: 500;
          color: #aaa;
        }
      }
    }
  }
}
</style>
