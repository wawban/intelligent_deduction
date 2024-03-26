<template>
  <div class="attack">
    <div>
      <div class="top">请求数据</div>
      <div class="list">
        <div class="numl"></div>
        <div class="nrongt">
          <div v-for="(e, i) in 8" :key="i">
            <div>{{ i }}</div>
            GET /jbossmq-httpil/HTTPServerILServlet
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 20px">
      <div class="top">响应数据</div>
      <div class="list" style="height: 167px">
        <div class="numl"></div>
        <div class="nrongt">
          <div v-for="(e, i) in 8" :key="i">
            <div>{{ i }}</div>
            GET /jbossmq-httpil/HTTPServerILServlet
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.attack {
  padding: 39px 40px 0;
  > div {
    border: 1px solid rgba(255, 255, 255, 0.3);
    .top {
      background: #333;
      padding-left: 21px;
      line-height: 23px;
    }
    .list {
      display: flex;
      height: 177px;
      > div {
        height: 100%;
      }
      .numl {
        width: 21px;
        background: #333;
      }
      .nrongt {
        width: 100%;
        background: #000;
        > div {
          position: relative;
          color: #aaa;
          font-size: 10px;
          line-height: 16px;
          padding-left: 10px;
          > div {
            position: absolute;
            width: 21px;
            text-align: center;
            left: -21px;
            line-height: 16px;
          }
        }
      }
    }
  }
}
</style>