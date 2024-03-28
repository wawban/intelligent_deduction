<template>
  <div class="websitedetails">
    <!-- 面包屑 -->
    <div class="crumbssfh">
      <div class="dq">
        <div class="img">
          <img src="../img/sh.png" alt="" />
        </div>
        <div class="wys">数字空间治理/网站资产/</div>
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
              <Gauge num="76.8" text="中" />

              <div class="dwc">
                <div class="younum">0</div>
                <div class="zuonum">100</div>
                <div class="zjiannum">76.8</div>
              </div>
            </div>
          </div>
          <div class="niuronh">
            <div class="jiassjian">
              <div class="zsbtboxdq">
                <div class="guns"></div>
                <div class="wenz">http://192.168.0.121:8081</div>
              </div>
              <div class="sjianimg">
                <img src="../img/nz.png" alt="" />
                <span>更新时间：2024.1.28 20:55:55</span>
              </div>
            </div>
            <div class="bqianf">
              <div
                v-for="(e, i) in 4"
                :key="i"
                :class="
                  e == 1 ? 'ys1' : e == 2 ? 'ys2' : e == 3 ? 'ys3' : 'ys4'
                "
              >
                核心节点{{ e }}
              </div>
            </div>
            <div class="lidlbi">
              <div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">资产名称:</div>
                  <div>大数据分析平台</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">网站IP:</div>
                  <div>10.10.33.202</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">端口:</div>
                  <div>8080</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">资产状态:</div>
                  <div>存活</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">内外网:</div>
                  <div>内网</div>
                </div>
              </div>
              <div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">操作系统:</div>
                  <div>Liunx</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">资产价值:</div>
                  <div>4</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">
                    所属资产组:
                  </div>
                  <div>财务部</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">数据来源:</div>
                  <div>数据推送</div>
                </div>
              </div>
              <div>
                <div style="width: 100%">
                  <div style="color: #aaa; padding-right: 10rem">位置信息:</div>
                  <div>湖南省宝现市莲池区华理技术园6楼201</div>
                </div>
              </div>
            </div>
            <div class="daizw">
              <div class="teszw">
                <img src="../img/cx.png" alt="" />
                指纹信息
              </div>
              <div>
                <div style="color: #aaa; padding-right: 10rem">应用:</div>
                <div>Jetty 9.2.11.v20150529</div>
              </div>
              <div>
                <div style="color: #aaa; padding-right: 10rem">开发语言:</div>
                <div>Java</div>
              </div>
              <div>
                <div style="color: #aaa; padding-right: 10rem">开发框架:</div>
                <div>Struts2</div>
              </div>
              <div>
                <div style="color: #aaa; padding-right: 10rem">
                  WAF/CND类型:
                </div>
                <div>-</div>
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
              <div class="zsyuanq">33</div>
            </div>
            <div>
              <div
                :class="typenum == '2' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '2'"
              >
                URL信息
              </div>
              <div class="zxxian"></div>
              <div class="zsyuanq">33</div>
            </div>
            <div>
              <div
                :class="typenum == '3' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '3'"
              >
                资产图谱
              </div>
              <div class="zxxian"></div>
              <div class="zsyuanq">33</div>
            </div>
            <div>
              <div
                :class="typenum == '4' ? 'wztext dqxianz' : 'wztext'"
                @click="typenum = '4'"
              >
                关联资产
              </div>
              <div style="width: 40rem"></div>
              <div class="zsyuanq" style="background: #aaaaaa">0</div>
            </div>
          </div>
          <div>
            <!-- 漏洞信息 -->
            <Zcloophole v-if="typenum == '1'" />
            <!-- URL信息 -->
            <Url v-if="typenum == '2'" />
            <!-- 资产图谱 -->
            <div
              v-if="typenum == '3'"
              style="height: 460rem; padding-top: 20rem"
            >
              <Graph />
            </div>
            <!-- 关联资产 -->
            <Relevance v-if="typenum == '4'" />
          </div>
        </div>
      </div>
      <div class="right wbb">
        <div class="zsbtboxdq">
          <div class="guns"></div>
          <div class="wenz">资产生命周期</div>
        </div>
        <div class="xdelis">
          <div v-for="(e, i) in 6" :key="i">
            <div class="yuanq"></div>
            <div class="biaot">2023.12.13 13:55:23</div>
            <div class="textr">系统将风险评分更新为</div>
            <div class="textr">中，76.8</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    // Gauge: () => import("./components/gauge.vue"),
    Zcloophole: () => import("./components/zcloophole.vue"),
    Url: () => import("./components/url.vue"),
    Graph: () => import("./components/graph.vue"),
    Relevance: () => import("./components/relevance.vue"),
  },
  data() {
    return {
      typenum: "1",
    };
  },
  methods: {
    goto() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
@import "./websitedetails.less";
</style>