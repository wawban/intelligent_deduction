<template>
  <div class="websitedetails">
    <!-- 面包屑 -->
    <div class="crumbssfh">
      <div class="dq">
        <div class="img">
          <img src="../img/sh.png" alt="" />
        </div>
        <div class="wys" style="cursor: pointer" @click="goto">
          数字空间治理/网站资产/
        </div>
        <div class="yys">资产详情</div>
      </div>
      <div class="fanh" @click="goto">
        <img src="../img/fh.png" alt="" />返回
      </div>
    </div>
    <div class="contain">
      <div class="left">
        <div class="touto wbb">
          <div class="yuantu">
            <div class="text">风险评估</div>
            <div class="echar">
              <Gauge
                :num="meta.risk_score"
                :text="
                  meta.risk_level == 'high'
                    ? '高'
                    : meta.risk_level == 'low'
                    ? '低'
                    : meta.risk_level == 'medium'
                    ? '中'
                    : ''
                "
              />
              <div class="dwc">
                <div class="younum">0</div>
                <div class="zuonum">100</div>
                <div
                  class="zjiannum"
                  :style="{
                    color:
                      meta.risk_level == 'high'
                        ? '#e53a40'
                        : meta.risk_level == 'low'
                        ? '#f6d535'
                        : meta.risk_level == 'medium'
                        ? '#fa9600'
                        : '',
                  }"
                >
                  {{ meta.risk_score }}
                </div>
              </div>
            </div>
          </div>
          <div class="niuronh">
            <div class="jiassjian">
              <div class="zsbtboxdq">
                <div class="guns"></div>
                <div class="wenz">{{ meta.ip }}</div>
              </div>
              <div class="sjianimg">
                <img src="../img/cx.png" alt="" />
                <span
                  >更新时间：{{
                    $moment(meta.time_updated).format("YYYY-MM-DD HH:mm:ss")
                  }}</span
                >
              </div>
            </div>
            <div class="bqianf">
              <!-- 资产标签 -->
              <div v-for="(e, i) in meta.tags" :key="i" class="ys1">
                {{ e.name }}
              </div>
              <!-- 自定义标签 -->
              <div
                v-for="(e, i) in meta.custom_tags"
                :key="i + '0'"
                class="ys4"
              >
                {{ e.name }}
              </div>
              <!-- 推理标签 -->
              <div v-for="(e, i) in meta.infer_tags" :key="i + '1'" class="ys3">
                {{ e }}
              </div>
            </div>
            <div class="lidlbi">
              <div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">资产名称:</div>
                  <div>{{ meta.name }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">网站IP:</div>
                  <div>{{ meta.ip }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">端口:</div>
                  <div>{{ meta.port }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">资产状态:</div>
                  <div>
                    {{
                      meta.state == 0 ? "不存活" : meta.state == 1 ? "存活" : ""
                    }}
                  </div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">内外网:</div>
                  <div>
                    {{
                      meta.intranet == 0
                        ? "外网"
                        : meta.intranet == 1
                        ? "内网"
                        : meta.intranet == -1
                        ? "未知"
                        : ""
                    }}
                  </div>
                </div>
              </div>
              <div style="padding: 8rem 0">
                <div>
                  <div style="color: #aaa; padding-right: 10rem">操作系统:</div>
                  <div>{{ meta.os }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">资产价值:</div>
                  <div>{{ meta.value }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">
                    所属资产组:
                  </div>
                  <div>{{ meta.asset_group.name }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">数据来源:</div>
                  <div>{{ meta.source }}</div>
                </div>
              </div>
              <div>
                <div style="width: 100%">
                  <div style="color: #aaa; padding-right: 10rem">位置信息:</div>
                  <div>{{ meta.location }}</div>
                </div>
              </div>
            </div>
            <div class="daizw">
              <div class="teszw">
                <img src="../img/zw.png" alt="" />
                <div>{{ meta.fingerprint.description }}</div>
              </div>
              <div>
                <div style="color: #aaa; padding-right: 10rem">应用:</div>
                <div>{{ meta.fingerprint.application }}</div>
              </div>
              <div>
                <div style="color: #aaa; padding-right: 10rem">开发语言:</div>
                <div>{{ meta.fingerprint.programming_language }}</div>
              </div>
              <div>
                <div style="color: #aaa; padding-right: 10rem">开发框架:</div>
                <div>{{ meta.fingerprint.framework }}</div>
              </div>
              <div>
                <div style="color: #aaa; padding-right: 10rem">
                  WAF/CND类型:
                </div>
                <div>{{ meta.fingerprint.waf }}/{{ meta.fingerprint.cdn }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="tablebg wbb">
          <div class="toubudiv">
            <div>
              <div
                :class="typenum == '1' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '1'"
              >
                漏洞信息
              </div>
              <div class="zxxian"></div>
              <div class="zsyuanq">{{ vulns.length }}</div>
            </div>
            <div>
              <div
                :class="typenum == '2' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '2'"
              >
                URL信息
              </div>
              <div class="zxxian"></div>
              <div class="zsyuanq">{{ urls.length }}</div>
            </div>
            <div>
              <div
                :class="typenum == '3' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '3'"
              >
                资产图谱
              </div>
              <div class="zxxian"></div>
              <div class="zsyuanq">
                {{ graph.nodes ? graph.nodes.length : "" }}
              </div>
            </div>
            <div>
              <div
                :class="typenum == '4' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '4'"
              >
                关联资产
              </div>
              <div style="width: 40rem"></div>
              <!-- <div class="zsyuanq" style="background: #aaaaaa">0</div> -->
              <div class="zsyuanq">
                {{ related_assets.length }}
              </div>
            </div>
          </div>
          <div>
            <!-- 漏洞信息 -->
            <Zcloophole v-if="typenum == '1'" :vulns="vulns" />
            <!-- URL信息 -->
            <Url v-if="typenum == '2'" :urls="urls" />
            <!-- 资产图谱 -->
            <div
              v-if="typenum == '3'"
              style="height: 460rem; padding-top: 20rem"
            >
              <Graph :datasj="graph" />
            </div>
            <!-- 关联资产 -->
            <Relevance v-if="typenum == '4'" :related_assets="related_assets" />
          </div>
        </div>
      </div>
      <div class="right wbb">
        <div class="zsbtboxdq">
          <div class="guns"></div>
          <div class="wenz">资产生命周期</div>
        </div>
        <div class="xdelis">
          <!-- <div v-for="(e, i) in 6" :key="i">
            <div class="yuanq"></div>
            <div class="biaot">2023.12.13 13:55:23</div>
            <div class="textr">系统将风险评分更新为</div>
            <div class="textr">中，76.8</div>
          </div> -->
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
import { governance_sitesid } from "@/api";
export default {
  components: {
    Gauge: () => import("@/components/gauge"),
    Zcloophole: () => import("./components/zcloophole.vue"),
    Url: () => import("./components/url.vue"),
    Graph: () => import("./components/graph.vue"),
    Relevance: () => import("./components/relevance.vue"),
  },
  data() {
    return {
      typenum: "1", //标签页判断
      meta: { asset_group: {}, fingerprint: {} }, //风险评估
      vulns: [], //漏洞信息
      urls: [], //URL信息
      graph: {}, //资产图谱
      related_assets: [], //关联资产
      lifecycle: "", //资产生命周期
    };
  },
  mounted() {
    this.getgovernancehostsid(); //获取详情
  },
  methods: {
    // 获取详情
    getgovernancehostsid() {
      governance_sitesid(this.$route.query.id).then((res) => {
        // console.log(res);
        this.meta = res.meta; //风险评估
        this.vulns = res.vulns; //漏洞信息
        this.urls = res.urls; //URL信息
        this.graph = res.graph; //资产图谱
        this.related_assets = res.related_assets; //关联资产
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
@import "./websitedetails.less";
</style>