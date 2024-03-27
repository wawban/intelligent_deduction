<template>
  <div class="attack">
    <div>
      <div class="top">请求数据</div>
      <div class="list">
        <div class="numl"></div>
        <div class="nrongt">
          <!-- <div v-for="(e, i) in 8" :key="i">
            <div>{{ i }}</div>
            GET /jbossmq-httpil/HTTPServerILServlet
          </div> -->
          {{ snapshot.request }}
        </div>
      </div>
    </div>
    <div style="margin-top: 20rem">
      <div class="top">响应数据</div>
      <div class="list" style="height: 167rem">
        <div class="numl"></div>
        <div class="nrongt">
          <!-- <div v-for="(e, i) in 8" :key="i">
            <div>{{ i }}</div>
            GET /jbossmq-httpil/HTTPServerILServlet
          </div> -->
          {{ snapshot.response }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    snapshot: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style lang="less" scoped>
.attack {
  padding: 39rem 40rem 0;
  > div {
    border: 1rem solid rgba(255, 255, 255, 0.3);
    .top {
      background: #333;
      padding-left: 21rem;
      line-height: 23rem;
    }
    .list {
      display: flex;
      height: 177rem;
      > div {
        height: 100%;
      }
      .numl {
        width: 21rem;
        background: #333;
      }
      .nrongt {
        width: 100%;
        background: #000;
        > div {
          position: relative;
          color: #aaa;
          font-size: 10rem;
          line-height: 16rem;
          padding-left: 10rem;
          > div {
            position: absolute;
            width: 21rem;
            text-align: center;
            left: -21rem;
            line-height: 16rem;
          }
        }
      }
    }
  }
}
</style>