<!-- 攻击技战术详情 -->
<template>
  <div class="attacktechniqueandtactics">
    <!-- 面包屑 -->
    <div class="crumbssfh">
      <div class="dq">
        <div class="img">
          <img src="../img/sh.png" alt="" />
        </div>
        <div class="wys">知识库/技战术知识库/</div>
        <div class="yys">攻击技战术详情</div>
      </div>
      <div class="fanh" @click="goto">
        <img src="../img/fh.png" alt="" />返回
      </div>
    </div>
    <div class="container">
      <div class="left">
        <!-- 命令和脚本解释器 -->
        <div class="anquanld wbb">
          <div class="anqtop">
            <div class="anquanleft">
              <div class="bordersj">
                <div class="guns"></div>
                <div class="wenz">命令和脚本解释器</div>
              </div>
              <!-- xxxxx -->
              <div class="textwenz">
                <div>
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      技战术编号:
                    </div>
                    <div>CT1059.004</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      父/子技术:
                    </div>
                    <div>T1059</div>
                  </div>
                </div>
                <div style="padding-top: 14rem">
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">战术:</div>
                    <div>执行</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">平台:</div>
                    <div>Linux，macoS</div>
                  </div>
                </div>
                <div style="padding-top: 14rem">
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      所需权限:
                    </div>
                    <div>User,root</div>
                  </div>

                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      是否支持远程:
                    </div>
                    <div>是</div>
                  </div>
                </div>
                <div class="xiantiao">
                  <i class="el-icon-caret-right"></i>
                  <div class="xiant"></div>
                  技战术简介
                </div>
              </div>
            </div>
            <div class="anqunrigth">
              <img src="../img/ml.png" alt="" />
            </div>
          </div>
          <!-- 技战术简介 -->
          <div class="jianjie">
            <p>
              攻击者可能会滥用Unxshel命今和湖本来执行。Unx shel是Linux和 mas
              系统上的主要命今提示，尽存在许多Unixsthel变体(加,.sh、
              bashh等)，具体取决于特定的作系统或发行版。Ushell
              可以控制系统的各个方面，某些命令需要提升的权限。
            </p>
            <p>
              Unix shel
              还支持支持顺序执行命令以及其他典型编程操作(如条件和循环)的脚本。shel
              脚本的常见用途包括长时间或重复性任务，或者需要在多个系统上运行同一组命今。
            </p>
            <p>
              攻击者可能会滥用 unix shel 来执行种命今或有效负。交式 hel
              可以通过命今和控制通道访间，也可以在横向移动期间访间，例如使用SSH。攻击者还可以利用shel
              湖本向受害者传递和执行多命令，或作为用于持久性的有效负载的一部分。
            </p>
          </div>
        </div>
        <!-- 子技术 -->
        <div class="zjishu wbb">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">子技术</div>
          </div>
          <div class="toubukai">
            <div>ID</div>
            <div>技战术名称</div>
            <div>描述</div>
          </div>
          <div class="listarr" v-for="(e, i) in 2" :key="i">
            <div>T1059.001</div>
            <div>PowerShell命令和脚本解释器</div>
            <div>
              攻击者可能会滥用 AppleScript 来执行。AppleScript 是一种 macos
              脚本语言，旨在通过称为 AppleEvents
              的应用程序间消息来控制应用程序和操作系统的各个部分。这些
              AppleEvent
              消息可以独立发送，也可以使用AppleScript轻松编写脚本。这些事件可以定位打开的窗口、发送击键，并在本地或远程与几乎任何打开的应用程序进行交互
            </div>
          </div>
        </div>
        <!-- 技战术知识图谱 -->
        <div class="jzdzstp wbb">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">漏洞知识图谱</div>
          </div>
          <div class="tuput"><Graph /></div>
        </div>
        <!-- 防御措施 -->
        <div class="zjishu wbb fyucs">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">防御措施</div>
          </div>
          <div class="toubukai">
            <div>ID</div>
            <div>防御措施</div>
            <div>描述</div>
          </div>
          <div class="listarr" v-for="(e, i) in 2" :key="i">
            <div>M1038</div>
            <div>执行预防</div>
            <div>在适当的情况下使用应用程序控制</div>
          </div>
        </div>
        <!-- 数据源 -->
        <div class="zjishu wbb sjuyaun">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">数据源</div>
          </div>
          <div class="toubukai">
            <div>ID</div>
            <div>数据源</div>
            <div>数据组件</div>
            <div>检测方式</div>
          </div>
          <div class="listarr">
            <div>DS0017</div>
            <div>命令</div>
            <div>命令执行</div>
            <div>
              监视意外和异常的文件创建，这些文件创建可能指示通过联机网络通信注入的恶意内容
            </div>
          </div>
          <div class="listarr">
            <div>DS0017</div>
            <div>命令</div>
            <div>命令执行</div>
            <div>
              监视其他异常网络流量，这些流量可能表明传输到系统的其他恶意内容。使用网络入侵检测系统
              (有时使用 SSL/TLS 检查) 来找已知的恶意载、内容混淆和漏洞利用代码
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <!-- 可能会使用的武器 -->
        <div class="xsloud wbb">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">可能会使用的武器</div>
          </div>
          <div class="toubukai">
            <div>编号</div>
            <div>武器名称</div>
            <div>产生效果</div>
          </div>
          <div class="listarr" v-for="(e, i) in 5" :key="i">
            <div>S0584</div>
            <div>苹果Jeus</div>
            <div></div>
          </div>
        </div>
        <!-- 可硷能会利用的漏洞 -->
        <div class="xsloud wbb" style="margin-top: 16rem;">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">可硷能会利用的漏洞</div>
          </div>
          <div class="toubukai">
            <div>编号</div>
            <div>漏洞名称</div>
            <div>漏洞等级</div>
          </div>
          <div class="listarr" v-for="(e, i) in 5" :key="i">
            <div>CVE-2023-51443</div>
            <div>FreeSWITCH 安全漏...</div>
            <div :class="i==0?'c':i==1?'g':i==2?'z':'d'">{{i==0?'超危':i==1?'高危':i==2?'中危':'低危'}}</div>
          </div>
        </div>
        <!-- 可能会影响的应用 -->
        <div class="xsloud wbb" style="margin-top: 16rem;">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">可能会影响的应用</div>
          </div>
          <div class="toubukai">
            <div>厂商</div>
            <div>应用</div>
            <div>版本</div>
          </div>
          <div class="listarr" v-for="(e, i) in 5" :key="i">
            <div>easy bet</div>
            <div>foxskav</div>
            <div>1.0.2</div>
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
  methods: {
    goto() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
@import "./less/attacktechniqueandtactics.less";
</style>