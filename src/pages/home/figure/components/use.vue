<template>
  <div class="use">
    <div class="ckaowz">
      <i class="el-icon-caret-right"></i>利用信息
      <div></div>
    </div>
    <div style="margin-top: 15px; display: flex">
      <div style="color: #aaa; padding-right: 10px">shell类型:</div>
      <div>HostShell</div>
    </div>
    <div style="margin-top: 15px; display: flex">
      <div style="color: #aaa; padding-right: 10px">shell路径:</div>
      <div>/tmp/qziFGl4b</div>
    </div>
    <div style="margin-top: 15px; display: flex">
      <div style="color: #aaa; padding-right: 10px">当前用户:</div>
      <div>root</div>
    </div>
    <div style="margin-top: 15px; display: flex">
      <div style="color: #aaa; padding-right: 10px">操作系统类型:</div>
      <div>Linux 3.10.0-1160.el7.x86_64</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.use {
  padding: 33px 39px;
  .ckaowz {
    display: flex;
    align-items: center;
    font-size: 14px;
    position: relative;

    > div {
      position: absolute;
      height: 1px;
      background: rgba(255, 255, 255, 0.3);
      width: 1300px;
      left: 80px;
    }
  }
}
</style>