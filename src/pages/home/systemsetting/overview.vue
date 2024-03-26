<template>
  <div class="overview">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">系统设置/</div>
      <div class="yys">系统概况</div>
    </div>
    <div class="box wbb">
      <div class="dqbiaot">
        <div class="guns"></div>
        <div class="wenz">系统概况</div>
      </div>
      <div class="maxgk wbb">
        <div>
          <div class="text">集群内存比例</div>
          <div class="huanxjdu">
            <el-progress
              class="huanxyet"
              :stroke-width="wwind == 1920 ? 16 : 16 / 1.33333333333"
              type="circle"
              :percentage="30"
              color="#C6502D"
            ></el-progress>
            <div class="dayuan">
              <div>
                <div class="fangx"></div>
                <div>总数</div>
              </div>
              <div>
                <div class="fangxw"></div>
                <div>使用量</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="text">集群CPU比例</div>
          <div class="huanxjdu">
            <el-progress
              class="huanxyet"
              :stroke-width="wwind == 1920 ? 16 : 16 / 1.33333333333"
              type="circle"
              :percentage="30"
              color="#C6502D"
            ></el-progress>
            <div class="dayuan">
              <div>
                <div class="fangx"></div>
                <div>总数</div>
              </div>
              <div>
                <div class="fangxw"></div>
                <div>使用量</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="text">集群硬盘比例</div>
          <div class="huanxjdu">
            <el-progress
              class="huanxyet"
              :stroke-width="wwind == 1920 ? 16 : 16 / 1.33333333333"
              type="circle"
              :percentage="30"
              color="#C6502D"
            ></el-progress>
            <div class="dayuan">
              <div>
                <div class="fangx"></div>
                <div>总数</div>
              </div>
              <div>
                <div class="fangxw"></div>
                <div>使用量</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="text">集群CPU核数比例</div>
          <div class="huanxjdu tshuanxjdu">
            <el-progress
              class="huanxyet"
              :stroke-width="wwind == 1920 ? 16 : 16 / 1.33333333333"
              type="circle"
              :percentage="30"
              color="#C6502D"
            ></el-progress>
            <div class="dayuan">
              <div>
                <div class="fangx"></div>
                <div>总数</div>
              </div>
              <div>
                <div class="fangxw"></div>
                <div>使用量</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="maxtj wbb">
        <div class="topbt">网络流量概览</div>
        <div class="zxiant">
          <Lines />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Lines: () => import("./components/lines"),
  },
  data() {
    return {
      wwind: 0,
    };
  },
  created() {
    this.wwind = document.documentElement.clientWidth;
  },
};
</script>
<style lang="less" scoped>
.overview {
  .box {
    height: 809px;
    padding: 20px 30px;

    .dqbiaot {
      display: flex;
      line-height: 18px;
      padding-bottom: 18px;

      .guns {
        height: 18px;
        width: 4px;
        background: #fa9600;
        margin-right: 8px;
      }

      .wenz {
        font-size: 18px;
        font-weight: 500;
      }
    }
    .maxgk {
      height: 256px;
      display: flex;
      > div {
        width: 25%;
        .text {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          padding: 30px 0 32px 0;
        }
        .huanxjdu {
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid rgba(255, 255, 255, 0.3);
          .huanxyet {
            width: 125px;
            /deep/ .el-progress-circle {
              width: 100% !important;
              height: 100% !important;

              svg > path:nth-child(1) {
                stroke: #ff9a3e !important;
              }
            }
            /deep/ .el-progress__text {
              color: #fff !important;
            }
          }
          .dayuan {
            padding-left: 20px;
            > div {
              padding: 6px 0;
              display: flex;
              align-items: center;
              .fangx {
                width: 12px;
                height: 12px;
                border-radius: 2px;
                background: #ff9a3e;
                margin-right: 10px;
              }
              .fangxw {
                width: 12px;
                height: 12px;
                border-radius: 2px;
                background: #c6502d;
                margin-right: 10px;
              }
            }
          }
        }
        .tshuanxjdu {
          border: none;
        }
      }
    }
    .maxtj {
      height: 455px;
      margin-top: 16px;
      padding: 30px;
      .topbt {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
      }
      .zxiant {
        height: 390px;
        // background: red;
      }
    }
  }
}
</style>