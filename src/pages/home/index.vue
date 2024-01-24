<!-- 菜单 -->
<template>
  <div class="home">
    <el-container style="min-height: 100%">
      <el-aside style="width: 60rem; background: #242322; min-height: 100%">
        <div class="asideleft">
          <div class="toplog">
            <img src="../img/logo.png" alt="" />
          </div>

          <div class="menubox">
            <div @click="gotu('/instrumentpanel')" :class="type == 1 ? 'current' : ''">
              <img v-if="type == 1" src="./img/yo.png" alt="" />
              <img v-else src="./img/yf.png" alt="" />
            </div>
            <div @click="gotu('/figure')" :class="type == 2 ? 'current' : ''">
              <img v-if="type == 2" src="./img/sk.png" alt="" />
              <img v-else src="./img/sg.png" alt="" />
            </div>
            <div @click="gotu('/drivingdepot')" :class="type == 9 ? 'current' : ''">
              <img v-if="type == 9" src="./img/yo.png" alt="" />
              <img v-else src="./img/yf.png" alt="" />
            </div>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header style="height: 60rem; background: #242322">
          <div class="headertop">
            <div>CybSeer智能推演平台</div>
            <div>
              <img src="./img/user.png" alt="">
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: 1,
      type:''
    };
  },
  watch:{
    $route:{
      handler(to,form){
        this.type = this.$route.meta.type || ''
      },
      deep:true,
      immediate:true
    }
  },
  methods:{
    gotu(e){
      this.$router.push(e);
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  background: #000;
  .headertop {
    display: flex;
    justify-content: space-between;
    // padding: 0 12rem;
    // padding-left: 14rem;
    > div {
      line-height: 60rem;
      color: #fff;
      font-size: 24rem;
      font-weight: bold;
      >img{
        cursor: pointer;
        height: 32rem;
      }
    }
  }
  .asideleft {
    .toplog {
      height: 60rem;
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        height: 38rem;
      }
    }
    .menubox {
      > div {
        height: 74rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        > img {
          height: 30rem;
        }
      }
      >div:hover{
        background: #292219;
        box-shadow: inset 0rem 0rem 5rem 0rem #3C3C3C;
        border-radius: 3rem;
      }
      .current{
        background: #292219;
        box-shadow: inset 0rem 0rem 5rem 0rem #3C3C3C;
        border-radius: 3rem;
      }
    }
  }
}
.el-main {
  padding: 18rem;
  background: #000;
}
</style>