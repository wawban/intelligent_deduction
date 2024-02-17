<template>
  <div class="vulnevrabilitymanagement">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">数字空间治理/</div>
      <div class="yys">漏洞治理</div>
    </div>
    <div class="box wbb">
      <div class="tabla">
        <div
          :class="type == '1' ? 'dian styxian' : 'dian'"
          @click="qihuan('1')"
        >
          平铺视角
        </div>
        <div class="xian"></div>
        <div
          :class="type == '2' ? 'dian styxian' : 'dian'"
          @click="qihuan('2')"
        >
          聚合视角
        </div>
      </div>
      <!-- 平铺视角 -->
      <Tilingangle v-if="type == '1'" />
      <!-- 聚合视角 -->
      <Convergent v-if="type == '2'" />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Tilingangle: () => import("./components/tilingangle.vue"),
    Convergent: () => import("./components/convergent.vue"),
  },
  data() {
    return {
      type: "1",
    };
  },
  methods: {
    qihuan(e) {
      this.type = e;
      // this.flag = true;
    },
  },
};
</script>
<style lang="less" scoped>
.vulnevrabilitymanagement {
  .box {
    height: 809rem;
    padding: 20rem 30rem;
    .tabla {
      display: flex;
      align-items: center;
      .dian {
        font-size: 18rem;
        cursor: pointer;
      }
      .xian {
        height: 14rem;
        width: 1rem;
        background: #d8d8d8;
        margin: 0 28rem;
      }
      .dian:hover {
        color: #fa9600;
      }
      .styxian {
        color: #fa9600;
        border-bottom: 3rem solid #fa9600;
      }
    }
  }
}
</style>