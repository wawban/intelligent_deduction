<template>
  <div class="labellmanagement">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">数字空间治理/</div>
      <div class="yys">标签管理</div>
    </div>
    <div class="tbox wbb">
      <div class="tabla">
        <div
          :class="type == '1' ? 'dian styxian' : 'dian'"
          @click="qihuan('1')"
        >
          主机标签
        </div>
        <div class="xian"></div>
        <div
          :class="type == '2' ? 'dian styxian' : 'dian'"
          @click="qihuan('2')"
        >
          网站标签
        </div>
        <div class="xian"></div>
        <div
          :class="type == '3' ? 'dian styxian' : 'dian'"
          @click="qihuan('3')"
        >
          自定义标签
        </div>
      </div>
      <div>
        <!-- 主机标签 -->
        <Hosttag v-if="type == '1'" />
        <!-- 网站标签 -->
        <Website v-if="type == '2'" />
        <!-- 自定义标签 -->
        <Custom v-if="type == '3'" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Hosttag: () => import("./components/hosttag.vue"),
    Website: () => import("./components/website.vue"),
    Custom: () => import("./components/custom.vue"),
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
.labellmanagement {
  .tbox {
    width: 1824px;
    height: 809px;
    padding: 20px 30px;
    .tabla {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      .dian {
        font-size: 18px;
        cursor: pointer;
      }
      .xian {
        height: 14px;
        width: 1px;
        background: #d8d8d8;
        margin: 0 28px;
      }
      .dian:hover {
        color: #fa9600;
      }
      .styxian {
        color: #fa9600;
        border-bottom: 3px solid #fa9600;
      }
    }
  }
}
</style>