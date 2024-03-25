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
                  <div>中危</div>
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
                <img src="../../img/cx.png" alt="" />
                更新时间：2023.10.23
              </div>
            </div>
            <div class="lidlbi">
              <div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">漏洞分类:</div>
                  <div>SQL注入</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">CVSS评分:</div>
                  <div>8.8</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">影响系统:</div>
                  <div>Windows</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">影响产品:</div>
                  <div>phantompdf,reader</div>
                </div>
              </div>
              <div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">
                    原理性漏洞:
                  </div>
                  <div>-</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">CVE编号:</div>
                  <div>CVE-2023-48049</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">CNVD编号:</div>
                  <div>CNVD-2018-21835</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">
                    CNNVD编号:
                  </div>
                  <div>-</div>
                </div>
              </div>
              <div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">处置结果:</div>
                  <div class="bianshe">已处理</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">
                    所在资产IP:
                  </div>
                  <div>10.0.0.252</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">端口:</div>
                  <div>8080</div>
                </div>
              </div>
              <div>
                <div style="width: 100%">
                  <div style="color: #aaa; padding-right: 10rem; width: 82rem">
                    漏洞描述:
                  </div>
                  <div>
                    基于Windws平台的Foxt Reader 9.20.9297及之前版本和FXt
                    PhantomPDF92..9297及之前版本中opePlaye法的处过程存在存用，洞源于在对对象执行作之前在
                    序未能验证该对象是否存在。远程攻击者可借助恶意的文件或页面利用该漏洞在当前进程的上下文中执行代码。
                  </div>
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
              <div class="zsyuanq">33</div>
            </div>
            <div>
              <div
                :class="typenum == '2' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '2'"
              >
                攻击快照
              </div>
              <div class="zxxian"></div>
              <div class="zsyuanq">33</div>
            </div>
            <div>
              <div
                :class="typenum == '3' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '3'"
              >
                利用信息
              </div>
              <div class="zxxian"></div>
              <div class="zsyuanq">33</div>
            </div>
            <div>
              <div
                :class="typenum == '4' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '4'"
              >
                漏洞图谱
              </div>
              <div class="zxxian"></div>
              <div class="zsyuanq">33</div>
            </div>
            <div>
              <div
                :class="typenum == '5' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '5'"
              >
                处置信息
              </div>
              <div style="width: 40rem"></div>
              <div class="zsyuanq" style="background: #aaaaaa">0</div>
            </div>
          </div>
          <div>
            <!-- 修复建议 -->
            <Repair v-if="typenum == '1'" />
            <!-- 攻击快照 -->
            <Attack v-if="typenum == '2'" />
            <!-- 利用信息 -->
            <Uset v-if="typenum == '3'" />
            <!-- 漏洞图谱 -->
            <div
              v-if="typenum == '4'"
              style="height: 460rem; padding-top: 20rem"
            >
              <Graph />
            </div>
            <!-- 处置信息 -->
            <Disposal v-if="typenum == '5'" />
          </div>
        </div>
      </div>
      <!-- 漏洞生命周期 -->
      <div class="right wbb">
        <div class="zsbtboxdq">
          <div class="guns"></div>
          <div class="wenz">漏洞生命周期</div>
        </div>
        <div class="xdelis">
          <div v-for="(e, i) in 3" :key="i">
            <div class="yuanq"></div>
            <div class="biaot">2023.12.13 13:55:23</div>
            <div class="textr">张有志提交漏洞处置</div>
            <!-- <div class="textr">中，76.8</div> -->
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
    Repair: () => import("./repair.vue"),
    Attack: () => import("./attack.vue"),
    Uset: () => import("./use.vue"),
    Graph: () => import("./graph.vue"),
    Disposal: () => import("./disposal.vue"),
  },
  data() {
    return {
      typenum: "1",
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
        // this.meta = res.meta; //风险评估
        // this.vulns = res.vulns; //漏洞信息
        // this.ports = res.ports; //端口信息
        // this.graph = res.graph; //资产图谱
        // this.related_assets = res.related_assets; //关联资产
        // this.lifecycle = res.lifecycle; //资产生命周期
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
</style>