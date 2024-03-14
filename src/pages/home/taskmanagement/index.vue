<template>
  <div class="taskmanagement">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">任务管理/</div>
      <div class="yys">推演任务</div>
    </div>
    <div class="tbox wbb">
      <div class="tabla">
        <div
          :class="type == '1' ? 'dian styxian' : 'dian'"
          @click="qihuan('1')"
        >
        推演任务
        </div>
        <div class="xian"></div>
        <div
          :class="type == '2' ? 'dian styxian' : 'dian'"
          @click="qihuan('2')"
        >
        采集任务
        </div>
      </div>
      <div>
        <!-- 推演任务 -->
        <Deduction v-if="type == '1'" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Deduction: () => import("./deduction.vue"),
  },
  data() {
    return {
      type: "1",
    };
  },
  methods: {
    qihuan(e) {
      this.type = e;
    },
  },
};
</script>
<style lang="less" scoped>
.taskmanagement {
  .tbox {
    width: 1824rem;
    height: 809rem;
    padding: 20rem 30rem;
    .tabla {
      display: flex;
      align-items: center;
      padding-bottom: 20rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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