<!-- 技战术知识库 -->
<template>
  <div class="techniqueandtactics">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">知识库/</div>
      <div class="yys">技战术知识库</div>
    </div>
    <div class="tbox wbb">
      <div class="ttop">
        <div class="tabla">
          <div
            :class="type == '1' ? 'dian styxian' : 'dian'"
            @click="qihuan('1')"
          >
            攻击技术
          </div>
          <div class="xian"></div>
          <div
            :class="type == '2' ? 'dian styxian' : 'dian'"
            @click="qihuan('2')"
          >
            防御技术
          </div>
        </div>
        <div class="yousyib">
          <el-switch
            class="huandk"
            v-model="flag"
            active-color="#fa960069"
            inactive-color="transparent"
          >
          </el-switch>
          <div class="sttetx">列表视图</div>
        </div>
      </div>
      <div class="ctainer">
        <!-- 攻击技术-列表 -->
        <Attack v-if="type == '1' && !flag" />
        <!-- 攻击技术-表格 -->
        <Attackform v-if="type == '1' && flag" />
        <!-- 防御技术-列表 -->
        <Def v-if="type == '2' && !flag" />
        <!-- 防御技术-表格 -->
        <Defform v-if="type == '2' && flag" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Attack: () => import("./cpmponents/attack.vue"),
    Attackform: () => import("./cpmponents/attackform.vue"),
    Def: () => import("./cpmponents/def.vue"),
    Defform: () => import("./cpmponents/defform.vue"),
  },
  data() {
    return {
      type: "1",
      flag: false,
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
.techniqueandtactics {
  .tbox {
    width: 1824px;
    height: 809px;
    padding: 20px 30px;
  }
  .ttop {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    .tabla {
      display: flex;
      align-items: center;
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
    .yousyib {
      display: flex;
      align-items: center;
      .sttetx {
        font-size: 16px;
        font-weight: normal;
        padding-right: 33px;
        padding-left: 8px;
      }
      .huandk {
        /deep/.el-switch__core {
          border: 1px solid #aaaaaa !important;
        }
      }
    }
  }
  // .ctainer{
  //   padding-top: ;
  //   background: red;
  // }
}
</style>