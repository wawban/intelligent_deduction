<!-- 防御技战术详情 -->
<template>
  <div class="defensivetechniquesandtactics">
    <!-- 面包屑 -->
    <div class="crumbssfh">
      <div class="dq">
        <div class="img">
          <img src="../img/sh.png" alt="" />
        </div>
        <div class="wys">知识库/技战术知识库/</div>
        <div class="yys">防御技战术详情</div>
      </div>
      <div class="fanh" @click="goto">
        <img src="../img/fh.png" alt="" />返回
      </div>
    </div>
    <div class="container">
      <div class="left">
        <!-- 证书分析 -->
        <div class="anquanld wbb">
          <div class="anqtop">
            <div class="anquanleft">
              <div class="bordersj">
                <div class="guns"></div>
                <div class="wenz">证书分析</div>
              </div>
              <!-- xxxxx -->
              <div class="textwenz">
                <div>
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      技战术编号:
                    </div>
                    <div>D3-CA</div>
                  </div>
                  <div>
                    <div style="color: #aaa; padding-right: 10rem">
                      父/子技术:
                    </div>
                    <div>D3-ACA</div>
                  </div>
                </div>
                <div style="padding-top: 14rem">
                  <div class="quankuan">
                    <div style="color: #aaa; padding-right: 10rem">
                      技战术定义:
                    </div>
                    <div>
                      分析字节序列并确定它们是否可能表示恶意 shellcode。
                    </div>
                  </div>
                </div>
                <div class="xiantiao">
                  <i class="el-icon-caret-right"></i>
                  <div class="xiant"></div>
                  运作方式
                </div>
              </div>
            </div>
            <div class="anqunrigth">
              <img src="../img/fy.png" alt="" />
            </div>
          </div>
          <!-- 技战术简介 -->
          <div class="jianjie">
            <p>
              对字节进行分析，就好像它们是机代码指今一样，并记果作为知 shelkcode
              的见组件的此类指令，例知准接透机、从内存地表读取以及对禁用保护或执行代码的函数的系统调用。例知，X86
              指令 b0b: 0051,%ax无需对%ax寄存器进行进-步更改，然后在 d
              80:syscalLinux 内校中行系统调用，该调用 exeve
              将当前进程替换为另-个指定的进程-这是 shelcode
              中的常见操作，因此此序列将被标记。
            </p>
            <p>
              此技术检测
              shellcode，无论它是否会导致目标二进制文件中的缓冲区溢出。
            </p>
            <p>
              如果字节序列包含与恶意 shellcode
              中使用的序列类似的序列，则会标记整个字节序列，并可能调用后续技术。
            </p>
          </div>
        </div>
        <!-- 防御措施 -->
        <div class="zjishu wbb">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">子技术</div>
          </div>
          <div class="toubukai">
            <div>ID</div>
            <div>技战术名称</div>
            <div>定义</div>
          </div>
          <div class="listarr" v-for="(e, i) in 2" :key="i">
            <div>D3-DNRA</div>
            <div>域名信誉分析</div>
            <div>分析域名的声誉</div>
          </div>
        </div>
        <!-- 技战术知识图谱 -->
        <div class="jzdzstp wbb">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">技战术知识图谱</div>
          </div>
          <div class="tuput"><Graph /></div>
        </div>
      </div>
      <!-- ----------------------------------- -->
      <div class="right">
        <!-- 相关的ATT&CK技术 -->
        <div class="xsloud wbb">
          <div class="bordersj">
            <div class="guns"></div>
            <div class="wenz">相关的ATT&CK技术</div>
          </div>
          <div class="toubukai">
            <div>编号</div>
            <div>技战术</div>
            <div>阶段</div>
          </div>
          <div class="listarr" v-for="(e, i) in 5" :key="i">
            <div>T1189</div>
            <div>路过式妥协</div>
            <div>初始访问</div>
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
@import "./less/defensivetechniquesandtactics.less";
</style>