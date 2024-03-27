<template>
  <div class="use">
    <div class="ckaowz">
      <i class="el-icon-caret-right"></i>利用信息
      <div></div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">shell类型:</div>
      <div>HostShell</div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">shell路径:</div>
      <div>/tmp/qziFGl4b</div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">当前用户:</div>
      <div>root</div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">操作系统类型:</div>
      <div>Linux 3.10.0-1160.el7.x86_64</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    exploit: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style lang="less" scoped>
.use {
  padding: 33rem 39rem;
  .ckaowz {
    display: flex;
    align-items: center;
    font-size: 14rem;
    position: relative;

    > div {
      position: absolute;
      height: 1rem;
      background: rgba(255, 255, 255, 0.3);
      width: 1300rem;
      left: 80rem;
    }
  }
}
</style>