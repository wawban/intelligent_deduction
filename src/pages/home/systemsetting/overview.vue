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
          <Lines :liste="[]" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { system_status } from "@/api";
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
  mounted() {
    this.getgovernancehosts(); // 数据
  },
  methods: {
    // 列表
    getgovernancehosts(e) {
      system_status().then((res) => {
        // this.zdata = res.pagination;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.overview {
  .box {
    height: 809rem;
    padding: 20rem 30rem;

    .dqbiaot {
      display: flex;
      line-height: 18rem;
      padding-bottom: 18rem;

      .guns {
        height: 18rem;
        width: 4rem;
        background: #fa9600;
        margin-right: 8rem;
      }

      .wenz {
        font-size: 18rem;
        font-weight: 500;
      }
    }
    .maxgk {
      height: 256rem;
      display: flex;
      > div {
        width: 25%;
        .text {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          padding: 30rem 0 32rem 0;
        }
        .huanxjdu {
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1rem solid rgba(255, 255, 255, 0.3);
          .huanxyet {
            width: 125rem;
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
            padding-left: 20rem;
            > div {
              padding: 6rem 0;
              display: flex;
              align-items: center;
              .fangx {
                width: 12rem;
                height: 12rem;
                border-radius: 2rem;
                background: #ff9a3e;
                margin-right: 10rem;
              }
              .fangxw {
                width: 12rem;
                height: 12rem;
                border-radius: 2rem;
                background: #c6502d;
                margin-right: 10rem;
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
      height: 455rem;
      margin-top: 16rem;
      padding: 30rem;
      .topbt {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
      }
      .zxiant {
        height: 390rem;
        // background: red;
      }
    }
  }
}
</style>