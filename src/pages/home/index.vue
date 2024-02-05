<!-- 菜单 -->
<template>
  <div class="home">
    <el-container style="min-height: 100%">
      <el-aside style="width: 60rem; background: #242322; min-height: 100%">
        <div class="asideleft">
          <div class="toplog">
            <img src="../img/logo.png" alt="" />
          </div>

          <div>
            <!-- 仪表盘 -->
            <div
              @click="gotu('/instrumentpanel')"
              :class="type == 1 ? 'current cdlis' : 'cdlis'"
            >
              <img v-if="type == 1" src="./img/yo.png" alt="" />
              <img v-else src="./img/yf.png" alt="" />
            </div>
            <!-- 数字空间治理 -->
            <div class="duixuanxji">
              <el-popover placement="right" trigger="hover">
                <div class="fuxuansju">
                  <div
                    :class="name == '主机资产' ? 'hovys' : ''"
                    @click="gotu('/figure/hostmachine')"
                  >
                    主机资产
                  </div>
                  <div
                    :class="name == '网站资产' ? 'hovys' : ''"
                    @click="gotu('/figure/website')"
                  >
                    网站资产
                  </div>
                  <div>漏洞治理</div>
                  <div>处置工单</div>
                  <div>标签管理</div>
                </div>
                <div
                  slot="reference"
                  :class="type == 2 ? 'current cdlis' : 'cdlis'"
                >
                  <img v-if="type == 2" src="./img/sg.png" alt="" />
                  <img v-else src="./img/sg.png" alt="" />
                </div>
              </el-popover>
            </div>
            <!-- 知识库-------------------------------------------- -->
            <div class="duixuanxji">
              <el-popover placement="right" trigger="hover">
                <div class="fuxuansju">
                  <div
                    :class="name == '漏洞知识库' ? 'hovys' : ''"
                    @click="gotu('/knowledge/loophole')"
                  >
                    漏洞知识库
                  </div>
                  <div
                    :class="name == '技战术知识库' ? 'hovys' : ''"
                    @click="gotu('/knowledge/techniqueandtactics')"
                  >
                    技战术知识库
                  </div>
                </div>
                <div
                  slot="reference"
                  :class="type == 5 ? 'current cdlis' : 'cdlis'"
                >
                  <img v-if="type == 5" src="./img/lk.png" alt="" />
                  <img v-else src="./img/lg.png" alt="" />
                </div>
              </el-popover>
            </div>
            <!-- 系统设置-------------------------------------------- -->
            <div class="duixuanxji">
              <el-popover placement="right" trigger="hover">
                <div class="fuxuansju">
                  <div
                    :class="name == '系统概况' ? 'hovys' : ''"
                    @click="gotu('/systemsetting/overview')"
                  >
                    系统概况
                  </div>
                  <div
                    :class="name == '部门管理' ? 'hovys' : ''"
                    @click="gotu('/systemsetting/departmentmanagement')"
                  >
                    部门管理
                  </div>
                  <div
                    :class="name == '人员管理' ? 'hovys' : ''"
                    @click="gotu('/systemsetting/personnelmanagement')"
                  >
                    人员管理
                  </div>
                  <div
                    :class="name == '日志管理' ? 'hovys' : ''"
                    @click="gotu('/systemsetting/logmanagement')"
                  >
                    日志管理
                  </div>
                  <div
                    :class="name == '工具管理' ? 'hovys' : ''"
                    @click="gotu('/systemsetting/toolmanagement')"
                  >
                    工具管理
                  </div>
                  <div
                    :class="name == '安全性控制' ? 'hovys' : ''"
                    @click="gotu('/systemsetting/safetycontrol')"
                  >
                    安全性控制
                  </div>
                  <div
                    :class="name == '资产区域管理' ? 'hovys' : ''"
                    @click="gotu('/systemsetting/assetarea')"
                  >
                    资产区域管理
                  </div>
                </div>
                <div
                  slot="reference"
                  :class="type == 7 ? 'current cdlis' : 'cdlis'"
                >
                  <img v-if="type == 7" src="./img/szk.png" alt="" />
                  <img v-else src="./img/szg.png" alt="" />
                </div>
              </el-popover>
            </div>
            <!-- --------------------------------------------------------------------- -->
            <div
              @click="gotu('/drivingdepot')"
              :class="type == 9 ? 'current cdlis' : 'cdlis'"
            >
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
              <img src="./img/user.png" alt="" />
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
      type: "",
      name: "",
    };
  },
  watch: {
    $route: {
      handler(to, form) {
        this.type = this.$route.meta.type || "";
        this.name = this.$route.meta.nemr || "";
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    gotu(e) {
      this.$router.push(e);
    },
  },
};
</script>
<style lang="less" scoped>
.fuxuansju {
  > div {
    text-align: center;
    cursor: pointer;
    color: #fff;
  }
  > div:hover {
    color: #fa9600;
  }
  .hovys {
    color: #fa9600;
  }
  // background: red;
}
.home {
  height: 100%;
  background: #000;
  .headertop {
    display: flex;
    justify-content: space-between;
    > div {
      line-height: 60rem;
      color: #fff;
      font-size: 24rem;
      font-weight: bold;
      > img {
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
    .cdlis {
      height: 74rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      > img {
        width: 40rem;
        height: 40rem;
      }
    }
    .cdlis:hover {
      background: #292219;
      box-shadow: inset 0rem 0rem 5rem 0rem #3c3c3c;
      border-radius: 3rem;
    }
    .current {
      background: #292219;
      box-shadow: inset 0rem 0rem 5rem 0rem #3c3c3c;
      border-radius: 3rem;
    }
    // }
  }
}
.el-main {
  padding: 18rem;
  background: #000;
}
</style>