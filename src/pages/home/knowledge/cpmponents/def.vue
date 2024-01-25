<!-- 攻击技术-列表 -->
<template>
  <div class="def">
    <!-- 查询组件 -->
    <div class="zheipr">
      <div class="marginr">
        <el-popover placement="bottom" trigger="hover">
          <div class="ckqbtopqian">
            <el-button class="buttonsy" size="mini">查看全部</el-button>
          </div>
          <div slot="reference" class="boxjc">
            <img src="../../img/qb.png" alt="" />
            查看全部
          </div>
        </el-popover>
      </div>
      <div class="marginr">
        <el-popover placement="bottom" width="400" trigger="click">
          <div class="tjiansxian">
            <div class="top">
              <div>筛选</div>
              <div>清空</div>
            </div>
          </div>
          <div slot="reference" class="boxjc">
            <img src="../../img/tj.png" alt="" />
            条件筛选
          </div>
        </el-popover>
      </div>
    </div>
    <!-- 内容 -->
    <div class="contaibox gdstyle">
      <div class="maxt">
        <div class="topzhu">
          <div>
            <div class="textr">检测</div>
            <div class="yuan">
              <div></div>
            </div>
          </div>
          <div>
            <div class="textr">隔离</div>
            <div class="yuan">
              <div></div>
            </div>
          </div>
          <div>
            <div class="textr">欺骗</div>
            <div class="yuan">
              <div></div>
            </div>
          </div>
          <div>
            <div class="textr">逐出</div>
            <div class="yuan">
              <div></div>
            </div>
          </div>
        </div>
        <div class="tblist">
          <div>
            <div v-for="(e, i) in 6" :key="i">
              <div class="paiyi">
                <div class="yuan"></div>
                <el-tooltip
                  class="tiskuang"
                  effect="dark"
                  content="属于编号：1212"
                  placement="left"
                >
                  <div class="wenz" @click="goto()">
                    网络流量分析
                  </div>
                </el-tooltip>
              </div>
              <div class="xiaolist">
                <!-- <div>通过服务的鱼叉式网络钓鱼</div>
                <div>通过服务的鱼叉式网络钓鱼</div> -->
              </div>
            </div>
          </div>
          <div>
            <div v-for="(e, i) in 6" :key="i">
              <div class="paiyi">
                <div class="yuan"></div>
                <el-tooltip
                  class="tiskuang"
                  effect="dark"
                  content="属于编号：1212"
                  placement="left"
                >
                  <div class="wenz" @click="goto()">
                    网络流量分析(2)
                  </div>
                </el-tooltip>
              </div>
              <div class="xiaolist">
                <!-- <div>通过服务的鱼叉式网络钓鱼</div>
                <div>通过服务的鱼叉式网络钓鱼</div> -->
              </div>
            </div>
          </div>
          
          <div>
            <div v-for="(e, i) in 6" :key="i">
              <div class="paiyi">
                <div class="yuan"></div>
                <el-tooltip
                  class="tiskuang"
                  effect="dark"
                  content="属于编号：1212"
                  placement="left"
                >
                  <div class="wenz" @click="goto()">
                    启动或登录初始化脚本(2)
                  </div>
                </el-tooltip>
              </div>
              <div class="xiaolist">
                <div>通过服务的鱼叉式网络钓鱼</div>
                <div>通过服务的鱼叉式网络钓鱼</div>
              </div>
            </div>
          </div>
          
          <div>
            <div v-for="(e, i) in 6" :key="i">
              <div class="paiyi">
                <div class="yuan"></div>
                <el-tooltip
                  class="tiskuang"
                  effect="dark"
                  content="属于编号：1212"
                  placement="left"
                >
                  <div class="wenz" @click="goto()">
                    启动或登录初始化脚本(2)
                  </div>
                </el-tooltip>
              </div>
              <div class="xiaolist">
                <div>通过服务的鱼叉式网络钓鱼</div>
                <div>通过服务的鱼叉式网络钓鱼</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        goto(){
          this.$router.push('/defensivetechniquesandtactics');
        }
    }
}
</script>
<style lang="less" scoped>
.def {
  .contaibox {
    padding-top: 14rem;
    height: 660rem;
    overflow: auto;
    .maxt {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      margin-top: 30rem;
      padding-left: 100rem;
      padding-right: 100rem;
      position: relative;
      .topzhu {
        position: absolute;
        top: -36rem;
        left: -94rem;
        display: flex;
        > div {
          width: 389rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          .yuan {
            width: 18rem;
            height: 18rem;
            border-radius: 50%;
            border: 1px solid #aaaaaa;
            display: flex;
            align-items: center;
            justify-content: center;
            > div {
              width: 12rem;
              height: 12rem;
              border-radius: 50%;
              background: #aaa;
            }
          }
          .textr {
            padding-bottom: 10rem;
          }
        }
      }
      .tblist {
        margin-top: 9rem;
        display: flex;
        > div {
          width: 389rem;
          min-height: 600rem;
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          // ----------------
          > div {
            padding-top: 25rem;
            position: relative;
            .paiyi {
              position: absolute;
              left: -5rem;
              display: flex;
              align-items: center;
              .yuan {
                width: 10rem;
                height: 10rem;
                background: #fff;
                border-radius: 50%;
              }
              .wenz {
                padding-left: 10rem;
                font-size: 14px;
                font-weight: normal;
                cursor: pointer;
              }
            }
            .xiaolist {
              padding-left: 28rem;
              padding-top: 26rem;
            }
          }
        }
      }
    }
  }
}
</style>