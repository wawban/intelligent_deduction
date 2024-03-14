<!-- 漏洞知识详情 -->
<template>
  <div class="knowledgedetails">
    <!-- 面包屑 -->
    <div class="crumbssfh">
      <div class="dq">
        <div class="img">
          <img src="../img/sh.png" alt="" />
        </div>
        <div class="wys">知识库/漏洞知识库/</div>
        <div class="yys">漏洞知识详情</div>
      </div>
      <div class="fanh" @click="goto">
        <img src="../img/fh.png" alt="">返回
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
                    <div>CVE-2023-48049</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      CNNVD编号:
                    </div>
                    <div>CNNVD-202312-1496</div>
                  </div>
                </div>
                <div style="padding-top: 14rem">
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      漏洞类型:
                    </div>
                    <div>关键资源的不正确权限授予</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      发布日期:
                    </div>
                    <div>2023-12-15</div>
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
                    <div>xxx</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">厂商:</div>
                    <div>xxx</div>
                  </div>
                </div>
                <div style="padding-top: 14rem">
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">产品:</div>
                    <div>xxx</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">应用:</div>
                    <div>xxx</div>
                  </div>
                </div>
                <div style="padding-top: 14rem">
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">版本:</div>
                    <div>xxx</div>
                  </div>
                </div>
                <div class="xiantiao">
                  <i class="el-icon-caret-right"></i>漏洞简介
                  <div class="xiant yaokuanx"></div>
                </div>
              </div>
              <!--  -->
              <div class="jianjier">
                <p>
                  Cybrosys Techno Solutions Website Blog
                  Search是博客中提供了搜索选项。
                </p>
                <p>
                  Cybrosys Techno Solutions Website Blog Search
                  13.0版本至13.0.1.0.1版本存在安全漏洞，该漏洞源于存在SOL注入漏洞。
                </p>
              </div>
              <!-- 修复建议 -->
              <div class="ckaowz">
                <i class="el-icon-caret-right"></i>修复建议
                <div></div>
              </div>
              <div class="jianyibox">
                <p>
                  Cybrosys Techno Solutions Website Blog
                  Search是博客中提供了搜索选项。
                </p>
                <p>
                  Cybrosys Techno Solutions Website Blg Search
                  13.0版本至13.0.1.0.1版本存在安全漏洞，该漏洞源于存在SOL注入漏洞，允许远程攻击者执行任意
                </p>
                <p>代码并获取权限。</p>
              </div>
              <!-- 参考网址 -->
              <div class="ckaowz">
                <i class="el-icon-caret-right"></i>参考网址
                <div></div>
              </div>
              <div class="laiyaunxd">
                <div>
                  <div style="color: #aaa; padding-right: 10rem">来源:</div>
                  <div>nvd.nist.gov</div>
                </div>
                <div>
                  <div style="color: #aaa; padding-right: 10rem">链接:</div>
                  <a href="">https://nvd.nist.gov/vuln/detail/CVE-2023-48049</a>
                  <!-- <div>CVE-2023-48049</div> -->
                </div>
              </div>
              <!-- 官方补丁 -->
              <div class="ckaowz">
                <i class="el-icon-caret-right"></i>官方补丁
                <div></div>
              </div>
              <div style="padding: 20rem 0">
                <a href="" style="color: #02a7f0"
                  >https://nvd.nist.gov/vuln/detail/CVE-2023-48049</a
                >
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
          <div class="tuput"><Graph /></div>
        </div>
      </div>
      <!-- ---------------- -->
      <div class="rigth">
        <!-- 超危 -->
        <div class="cweixian wbb">
          <div class="paiyi">
            <div class="numtext">9.1</div>
            <div class="strtext">超危</div>
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
          <div class="listarr" v-for="(e, i) in 5" :key="i">
            <div>CVE-2017-11889</div>
            <div>libaom 中的堆缓冲...</div>
            <div class="cweis">超危</div>
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
          <div class="listarr" v-for="(e, i) in 5" :key="i">
            <div>T1190</div>
            <div>利用面向公众的应用程序</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Graph: () => import("@/components/graph"),
  },
  methods:{
    goto(){
        this.$router.go(-1)
    },
    // tz(){
    //   this.$router.push("/defensivetechniquesandtactics");
    // }
  }
};
</script>
<style lang="less" scoped>
@import "./less/knowledgedetails.less";
</style>