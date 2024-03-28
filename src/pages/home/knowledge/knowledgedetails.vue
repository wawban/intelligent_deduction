<!-- 漏洞知识详情 -->
<template>
  <div class="knowledgedetails">
    <!-- 面包屑 -->
    <div class="crumbssfh">
      <div class="dq">
        <div class="img">
          <img src="../img/sh.png" alt="" />
        </div>
        <div class="wys" style="cursor: pointer" @click="goto">
          知识库/漏洞知识库/
        </div>
        <div class="yys">漏洞知识详情</div>
      </div>
      <div class="fanh" @click="goto">
        <img src="../img/fh.png" alt="" />返回
      </div>
    </div>
    <!-- 主体 -->
    <div class="container">
      <div class="left">
        <!-- 安全漏洞 -->
        <div class="anquanld wbb">
          <div class="anqtop">
            <div class="anquanleft">
              <div class="bordersj">
                <div class="guns"></div>
                <div class="wenz">NETSCOUT nGeniusPULSE 安全漏洞</div>
              </div>
              <!-- 漏洞影响 -->
              <div class="textwenz">
                <div>
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      CVE编号:
                    </div>
                    <div>{{ quanbu.cve }}</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      CNNVD编号:
                    </div>
                    <div>{{ quanbu.cnnvd }}</div>
                  </div>
                </div>
                <div style="padding-top: 14rem">
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      漏洞类型:
                    </div>
                    <div>{{ quanbu.type }}</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      发布日期:
                    </div>
                    <!-- <div>{{ quanbu.publish_date }}</div> -->
                    <div>
                      {{
                        $moment(quanbu.publish_date).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )
                      }}
                    </div>
                  </div>
                </div>
                <div class="xiantiao">
                  <i class="el-icon-caret-right"></i>
                  <div class="xiant"></div>
                  漏洞影响
                </div>
              </div>
              <!-- 漏洞简介 -->
              <div class="textwenz">
                <div>
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      操作系统:
                    </div>
                    <div>{{ quanbu.os }}</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">厂商:</div>
                    <div>{{ quanbu.vendor }}</div>
                  </div>
                </div>
                <div style="padding-top: 14rem">
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">产品:</div>
                    <div>{{ quanbu.product }}</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">应用:</div>
                    <div>{{ quanbu.application }}</div>
                  </div>
                </div>
                <div style="padding-top: 14rem">
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">版本:</div>
                    <div>{{ quanbu.version }}</div>
                  </div>
                </div>
                <div class="xiantiao">
                  <i class="el-icon-caret-right"></i>漏洞简介
                  <div class="xiant yaokuanx"></div>
                </div>
              </div>
              <!--  -->
              <div class="jianjier">
                <p v-for="(e, i) in quanbu.description" :key="i">
                  {{ e }}
                </p>
                <!-- <p>
                  Cybrosys Techno Solutions Website Blog Search
                  13.0版本至13.0.1.0.1版本存在安全漏洞，该漏洞源于存在SOL注入漏洞。
                </p> -->
              </div>
              <!-- 修复建议 -->
              <div class="ckaowz">
                <i class="el-icon-caret-right"></i>修复建议
                <div></div>
              </div>
              <div class="jianyibox">
                <p v-for="(e, i) in quanbu.advice" :key="i">
                  {{ e }}
                </p>
                <!-- <p>advice   description
                  Cybrosys Techno Solutions Website Blog
                  Search是博客中提供了搜索选项。
                </p> -->
                <!-- <p>
                  Cybrosys Techno Solutions Website Blg Search
                  13.0版本至13.0.1.0.1版本存在安全漏洞，该漏洞源于存在SOL注入漏洞，允许远程攻击者执行任意
                </p> -->
                <p>代码并获取权限。</p>
              </div>
              <!-- 参考网址 -->
              <div class="ckaowz">
                <i class="el-icon-caret-right"></i>参考网址
                <div></div>
              </div>
              <div
                v-for="(item, index) in quanbu.reference"
                :key="index"
                :class="index == 0 ? 'laiyaunxd' : 'laiyaunxd paddingt'"
              >
                <div>
                  <div style="color: #aaa; padding-right: 10rem">来源:</div>
                  <div>{{ item.source }}</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">链接:</div>
                  <a href="">{{ item.link }}</a>
                  <!-- <div>CVE-2023-48049</div> -->
                </div>
              </div>
              <!-- 官方补丁 -->
              <div class="ckaowz">
                <i class="el-icon-caret-right"></i>官方补丁
                <div></div>
              </div>

              <div
                v-for="(item, index) in quanbu.patch"
                :key="index"
                :class="index == 0 ? 'stybd' : 'stybd stybdpadd'"
              >
                <a href="" style="color: #02a7f0">{{ item }}</a>
              </div>
            </div>
            <div class="anqunrigth">
              <img src="../img/lxq.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 漏洞知识图谱 -->
        <div class="loudzstp wbb">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">漏洞知识图谱</div>
          </div>
          <div class="tuput">
            <Graph :datasj="graph" />
          </div>
        </div>
      </div>
      <!-- ---------------- -->
      <div class="rigth">
        <!-- 超危 -->
        <!-- cvss -->
        <div class="cweixian wbb">
          <div class="paiyi">
            <div class="numtext">{{ quanbu.cvss_score }}</div>
            <div
              :class="
                quanbu.severity == 'low'
                  ? 'low strtext'
                  : quanbu.severity == 'medium'
                  ? 'medium strtext'
                  : quanbu.severity == 'high'
                  ? 'high strtext'
                  : quanbu.severity == 'critical'
                  ? 'critical strtext'
                  : 'strtext'
              "
            >
              {{
                quanbu.severity == "low"
                  ? "低危"
                  : quanbu.severity == "medium"
                  ? "中危"
                  : quanbu.severity == "high"
                  ? "高危"
                  : quanbu.severity == "critical"
                  ? "超危"
                  : ""
              }}
            </div>
          </div>
          <div class="pailist">
            <div>
              <div class="totol">攻击向量</div>
              <div class="borderh">
                <div class="hongs">网络</div>
              </div>
            </div>
            <div>
              <div class="totol">攻击复杂度</div>
              <div class="borderh">
                <div class="fens">低</div>
              </div>
            </div>
            <div>
              <div class="totol">所需权限</div>
              <div class="borderh">
                <div class="cens">低权限</div>
              </div>
            </div>
            <div>
              <div class="totol">用户交互</div>
              <div class="borderh">
                <div class="fens">无交互</div>
              </div>
            </div>
            <div>
              <div class="totol">影响范围</div>
              <div class="borderh">
                <div class="huangs">未改变</div>
              </div>
            </div>
            <div>
              <div class="totol">机密性</div>
              <!-- <div class="totol">机密性影响</div> -->
              <div class="borderh">
                <div class="huangs">低</div>
              </div>
            </div>
            <div>
              <div class="totol">完整性</div>
              <!-- <div class="totol">完整性影响</div> -->
              <div class="borderh">
                <div class="fens">高</div>
              </div>
            </div>
            <div>
              <div class="totol">可用性</div>
              <!-- <div class="totol">可用性影响</div> -->
              <div class="borderh">
                <div class="huangs">低</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 其他相似漏洞 -->
        <div class="xsloud wbb">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">其他相似漏洞</div>
          </div>
          <div class="toubukai">
            <div>漏洞编号</div>
            <div>漏洞名称</div>
            <div>漏洞等级</div>
          </div>
          <div class="listarr" v-for="(e, i) in related_vulns" :key="i">
            <div>{{ e.id }}</div>
            <div>{{ e.name }}</div>
            <div
              :class="
                e.severity == 'low'
                  ? 'low'
                  : e.severity == 'medium'
                  ? 'medium'
                  : e.severity == 'high'
                  ? 'high'
                  : e.severity == 'critical'
                  ? 'critical'
                  : ''
              "
            >
              {{
                e.severity == "low"
                  ? "低危"
                  : e.severity == "medium"
                  ? "中危"
                  : e.severity == "high"
                  ? "高危"
                  : e.severity == "critical"
                  ? "超危"
                  : ""
              }}
            </div>
          </div>
        </div>
        <!-- 可能使用的战术 -->
        <div class="knzhans wbb">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">可能使用的战术</div>
          </div>
          <div class="toubukai">
            <div>技战术编号</div>
            <div>技战术名称</div>
          </div>
          <div class="listarr" v-for="(e, i) in related_techs" :key="i">
            <div>{{ e.id }}</div>
            <div>{{ e.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { kb_vulnsid } from "@/api";
export default {
  components: {
    Graph: () => import("./cpmponents/graph.vue"),
  },
  data() {
    return {
      related_vulns: [],
      related_techs: [],
      quanbu: {},
      // typenum: "1", //标签页判断
      // meta: { asset_group: {} }, //风险评估
      // vulns: [], //漏洞信息
      // ports: [], //端口信息
      datasj: {}, //资产图谱
      // related_assets: [], //关联资产
      // lifecycle: "", //资产生命周期
    };
  },
  mounted() {
    this.getgovernancehostsid(); //获取详情
  },
  methods: {
    // 获取详情
    getgovernancehostsid() {
      kb_vulnsid(this.$route.query.id).then((res) => {
        // this.quanbu = res;
        this.quanbu = res.meta;
        // this.quanbu.map((item) => {
        this.quanbu.advice = this.quanbu.advice.split("\n");
        this.quanbu.description = this.quanbu.description.split("\n");
        // });

        this.datasj = res.graph; //资产图谱
        this.related_vulns = res.related_vulns;
        this.related_techs = res.related_techs;
        // this.meta = res.meta; //风险评估
        // this.vulns = res.vulns; //漏洞信息
        // this.ports = res.ports; //端口信息
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
    // tz(){
    //   this.$router.push("/defensivetechniquesandtactics");
    // }
  },
};
</script>
<style lang="less" scoped>
@import "./less/knowledgedetails.less";
</style>