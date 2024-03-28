<template>
  <div class="governancedetails">
    <!-- 面包屑 -->
    <div class="crumbssfh">
      <div class="dq">
        <div class="img">
          <img src="../../img/sh.png" alt="" />
        </div>
        <div class="wys">数字空间治理/漏洞治理/</div>
        <div class="yys">主机漏洞治理详情</div>
      </div>
      <div class="fanh" @click="goto">
        <img src="../../img/fh.png" alt="" />返回
      </div>
    </div>
    <div class="box">
      <div class="left">
        <div class="l_top wbb">
          <!-- 漏洞等级 -->
          <div class="yuanqiu">
            <div class="textwz">漏洞等级</div>
            <span class="radius">
              <div>
                <div>
                  <!-- <div>中危</div> -->
                  <div>
                    {{
                      meta.severity == "low"
                        ? "低危"
                        : meta.severity == "medium"
                        ? "中危"
                        : meta.severity == "high"
                        ? "高危"
                        : meta.severity == "critical"
                        ? "超危"
                        : ""
                    }}
                  </div>
                </div>
              </div>
            </span>
          </div>
          <!-- 关键风险资产 -->
          <div class="xqdata">
            <div class="btbox_bji">
              <div class="teshude">
                <div class="guns"></div>
                <div class="wenz">关键风险资产</div>
                <div class="biqoq">主机漏洞</div>
              </div>
              <div class="rightsian">
                <img src="../../img/nz.png" alt="" />
                更新时间：{{ meta.time_discovered }}
              </div>
            </div>
            <div class="lidlbi">
              <div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">漏洞分类:</div>
                  <div>{{ meta.severity }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">CVSS评分:</div>
                  <div>{{ meta.cvss }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">影响系统:</div>
                  <div>{{ meta.platforms }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">影响产品:</div>
                  <div>{{ meta.products }}</div>
                </div>
              </div>
              <div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">
                    是否可利用:
                  </div>
                  <div>{{ meta.proof_method ? "是" : "否" }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">CVE编号:</div>
                  <div>{{ meta.cve_id }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">CNVD编号:</div>
                  <div>{{ meta.cnvd_id }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">
                    CNNVD编号:
                  </div>
                  <div>{{ meta.cnnvd_id }}</div>
                </div>
              </div>
              <div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">处置结果:</div>
                  <div class="bianshe">{{ meta.treatment_result }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">
                    所在资产IP:
                  </div>
                  <div>{{ meta.asset.ip }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">端口:</div>
                  <div>{{ meta.asset.port }}</div>
                </div>
              </div>
              <div>
                <div style="width: 100%">
                  <div style="color: #aaa; padding-right: 10rem; width: 82rem">
                    漏洞描述:
                  </div>
                  <div>{{ meta.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="l_bottom wbb">
          <div class="toubudiv">
            <div>
              <div
                :class="typenum == '1' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '1'"
              >
                修复建议
              </div>
              <div class="zxxian"></div>
              <!-- <div class="zsyuanq">33</div> -->
            </div>
            <div>
              <div
                :class="typenum == '2' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '2'"
              >
                攻击快照
              </div>
              <div class="zxxian"></div>
              <!-- <div class="zsyuanq">33</div> -->
            </div>
            <div>
              <div
                :class="typenum == '3' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '3'"
              >
                利用信息
              </div>
              <div class="zxxian"></div>
              <!-- <div class="zsyuanq">33</div> -->
            </div>
            <div>
              <div
                :class="typenum == '4' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '4'"
              >
                漏洞图谱
              </div>
              <div class="zxxian"></div>
              <!-- <div class="zsyuanq">33</div> -->
            </div>
            <div>
              <div
                :class="typenum == '5' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '5'"
              >
                处置信息
              </div>
              <div style="width: 40rem"></div>
              <!-- <div class="zsyuanq" style="background: #aaaaaa">0</div> -->
            </div>
          </div>
          <div>
            <!-- 修复建议 -->
            <Repair v-if="typenum == '1'" />
            <!-- 攻击快照 -->
            <Attack v-if="typenum == '2'" :snapshot="snapshot" />
            <!-- 利用信息 -->
            <Uset v-if="typenum == '3'" :exploit="exploit" />
            <!-- 漏洞图谱 -->
            <div
              v-if="typenum == '4'"
              style="height: 460rem; padding-top: 20rem"
            >
              <Graph :datasj="graph" />
            </div>
            <!-- 处置信息 -->
            <Disposal v-if="typenum == '5'" :ticket="ticket" />
          </div>
        </div>
      </div>
      <!-- 漏洞生命周期 -->
      <div class="right wbb">
        <div class="zsbtboxdq">
          <div class="guns"></div>
          <div class="wenz">资产生命周期</div>
        </div>
        <div class="xdelis">
          <div
            v-for="(e, i) in lifecycle"
            :key="i"
            :class="lifecycle.length != i + 1 ? 'disple_none' : ''"
          >
            <div class="yuanq"></div>
            <div class="biaot">
              {{ $moment(e.timestamp).format("YYYY-MM-DD HH:mm:ss") }}
            </div>
            <div class="textr">
              {{ e.user + " " + e.action }}
            </div>
            <div class="textr">{{ e.message }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { governance_vulnsxq } from "@/api";
export default {
  components: {
    Repair: () => import("./tedsdepair.vue"),
    Attack: () => import("./attack.vue"),
    Uset: () => import("./use.vue"),
    Graph: () => import("./graph.vue"),
    Disposal: () => import("./disposal.vue"),
  },
  data() {
    return {
      typenum: "1",
      meta: { asset: {} },
      snapshot: {},
      exploit: {},
      graph: {}, //资产图谱
      lifecycle: "", //资产生命周期
      ticket: {},
    };
  },
  mounted() {
    this.getgovernancehostsid(); //获取详情
  },
  methods: {
    // 获取详情
    getgovernancehostsid() {
      governance_vulnsxq(this.$route.query.id).then((res) => {
        // console.log(res);
        this.meta = res.meta; //漏洞等级
        // this.snapshot = res.snapshot;
        this.snapshot = res.snapshot;
        this.snapshot.response = this.snapshot.response.split("\n");
        this.snapshot.request = this.snapshot.request.split("\n");
        // alert(this.snapshot.request);
        this.exploit = res.exploit;
        this.graph = res.graph; //资产图谱
        this.ticket = res.ticket; //资产图谱
        this.ticket.procedure = this.ticket.procedure.split("\n"); //资产图谱

        // this.vulns = res.vulns; //漏洞信息
        // this.ports = res.ports; //端口信息
        // this.graph = res.graph; //资产图谱
        // this.related_assets = res.related_assets; //关联资产
        this.lifecycle = res.lifecycle; //资产生命周期
        // this.lifecycle = [
        //   {
        //     timestamp: "2024-03-13T13:16:33.713Z",
        //     user: "admin",
        //     action: "创建XX1",
        //     message: "发现XX",
        //   },
        //   {
        //     timestamp: "2024-02-13T13:16:33.713Z",
        //     user: "admin",
        //     action: "创建XX2",
        //     message: "发现XX",
        //   },
        //   {
        //     timestamp: "2024-03-13T13:16:33.713Z",
        //     user: "admin",
        //     action: "创建XX3",
        //     message: "发现XX",
        //   },
        // ];
      });
    },
    goto() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.governancedetails {
  .box {
    display: flex;
    justify-content: space-between;
    .left {
      width: 1468rem;
      .l_top {
        height: 256rem;
        padding: 30rem;
        display: flex;
        .yuanqiu {
          width: 300rem;
          .textwz {
            font-size: 18rem;
            font-weight: bold;
            text-align: center;
          }
          .radius {
            display: flex;
            justify-content: center;

            margin-top: 20rem;
            > div {
              width: 160rem;
              height: 160rem;
              border-radius: 50%;
              border: 16rem solid #fa9600;
              display: flex;
              align-items: center;
              justify-content: center;
              > div {
                width: 98rem;
                height: 98rem;
                border-radius: 50%;
                background: #fa9600;
                display: flex;
                align-items: center;
                justify-content: center;
                > div {
                  font-size: 24rem;
                }
              }
            }
          }
        }
        .xqdata {
          width: 1094rem;
          .btbox_bji {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1rem solid rgba(255, 255, 255, 0.3);
            padding-bottom: 18rem;
            .teshude {
              display: flex;
              align-items: center;
              line-height: 24rem;

              .guns {
                height: 20rem;
                width: 4rem;
                background: #fa9600;
                margin-right: 8rem;
              }

              .wenz {
                font-size: 24rem;
                font-weight: 500;
              }
              .biqoq {
                line-height: 22rem;
                text-align: center;
                border: 1rem solid #fa9600;
                border-radius: 4rem;
                padding: 0 9rem;
                font-size: 12rem;
                font-weight: 500;
                margin-left: 10rem;
              }
            }
            .rightsian {
              display: flex;
              align-items: center;
              > img {
                width: 24rem;
                margin-right: 5rem;
              }
            }
          }

          .lidlbi {
            padding-top: 10rem;

            > div {
              display: flex;
              padding: 10rem 0;

              > div {
                display: flex;
                width: 275rem;
                font-size: 12rem;
                .bianshe {
                  color: #29ca9b;
                }
              }
            }
          }
        }
      }
      .l_bottom {
        margin-top: 16rem;
        height: 537rem;
        .toubudiv {
          padding-top: 19rem;
          padding-bottom: 15rem;
          border-bottom: 1rem solid rgba(255, 255, 255, 0.3);
          padding-left: 40rem;
          display: flex;

          > div {
            padding-left: 24rem;
            padding-right: 40rem;
            display: flex;
            align-items: center;
            position: relative;

            .wztext {
              font-size: 16rem;
              font-weight: 500;
              position: relative;
              cursor: pointer;
              border-bottom: 3rem solid #161616;
              padding-bottom: 4rem;
            }

            .wztext:hover {
              color: #fa9600;
              border-color: #fa9600;
            }

            .dqxianz {
              color: #fa9600;
              border-color: #fa9600;
            }

            .zxxian {
              height: 14rem;
              width: 1rem;
              background: #d8d8d8;
              margin-left: 40rem;
              margin-bottom: 6rem;
            }

            .zsyuanq {
              width: 20rem;
              height: 20rem;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              background: #fa9600;
              font-size: 12rem;
              top: -10rem;
              right: 58rem;
              color: #fff;
            }
          }
        }
      }
    }
    .right {
      width: 340rem;

      .zsbtboxdq {
        padding: 20rem 0 16rem 30rem;
        display: flex;
        align-items: center;
        border-bottom: 1rem solid rgba(255, 255, 255, 0.3);

        .guns {
          height: 18rem;
          width: 3rem;
          background: #fa9600;
          margin-right: 8rem;
        }

        .wenz {
          font-size: 18rem;
          font-weight: bold;
        }
      }

      .xdelis {
        padding: 16rem 0 0 30rem;

        > div {
          padding-left: 13rem;
          padding-bottom: 40rem;
          position: relative;
          border-left: 2rem solid #797979;

          .textr {
            line-height: 20rem;
          }

          .yuanq {
            width: 9rem;
            height: 9rem;
            border-radius: 50%;
            background: #fa9600;
            position: absolute;
            left: -5rem;
            top: 0;
          }

          .biaot {
            color: #fa9600;
          }
        }
      }
    }
  }
}
</style>./tedsdepair.vue./tedsdepair.vue