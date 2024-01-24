<template>
  <div class="instrumentpanel">
    <div class="top">
      <div class="top_left bb">
        <div class="yauntu">
          <div class="text">风险评估</div>
          <div class="echar">
            <Gauge num="76.8" text="中" />
            <div class="dw">
              <div class="younum">0</div>
              <div class="zuonum">100</div>
              <div class="zjiannum">76.8</div>
            </div>
          </div>
          <div class="bjtimg">
            <div class="numtext">8</div>
            <div class="tibiao">
              <img src="../img/lst.png" alt="" />
            </div>
          </div>
          <div class="footery">(与2023-12-25 12:00:00相比)</div>
        </div>
        <div class="sjdata">
          <div class="scgxe">
            <div class="sjiangx">
              <i class="el-icon-refresh-left"></i>
              <p>最近更新时间：2023-12-25 12:00:00</p>
            </div>
            <div class="younsles">
              <div>数据周期：</div>
              <el-select
                v-model="zq"
                class="zhessless"
                size="mini"
                style="width: 60rem"
              >
                <el-option label="月" value="1"></el-option>
                <el-option label="周" value="2"></el-option>
                <el-option label="日" value="3"></el-option>
              </el-select>
            </div>
          </div>
          <div class="boxsjudhu">
            <div class="tuiyan">
              <div class="numcs">
                <div class="numtew">120</div>
                <div class="danwer">次</div>
              </div>
              <div class="tuiyannum">推演任务数</div>
            </div>
            <div class="yb">
              <div class="numcs">
                <div class="numtew">262</div>
                <div class="danwer">个</div>
              </div>
              <div class="tuiyannum">发现隐蔽问题数</div>
            </div>
          </div>
          <div class="boxsjudhu" style="padding-top: 26rem">
            <div class="yx">
              <div class="numcs">
                <div class="numtew">80</div>
                <div class="danwer">条</div>
              </div>
              <div class="tuiyannum">有效封堵路径数</div>
            </div>
            <div class="zl">
              <div class="numcs">
                <div class="numtew">499</div>
                <div class="danwer">个</div>
              </div>
              <div class="tuiyannum">阻挡漏洞数</div>
            </div>
          </div>
        </div>
      </div>
      <div class="top_right bb">
        <div class="btbox">
          <div class="guns"></div>
          <div class="wenz">隐蔽问题趋势</div>
        </div>
        <div class="zqxuanz">
          <div>显示周期：</div>
          <el-select
            class="zhessless"
            v-model="zq"
            size="mini"
            style="width: 60rem"
          >
            <el-option label="月" value="1"></el-option>
            <el-option label="周" value="2"></el-option>
            <el-option label="日" value="3"></el-option>
          </el-select>
        </div>
        <div class="ecrlin">
          <Lines />
        </div>
      </div>
    </div>
    <div class="bottrmbu">
      <div class="zuoniamt">
        <div class="czaifx bb">
          <div class="btbox">
            <div class="guns"></div>
            <div class="wenz">潜在风险资产</div>
          </div>
          <div>
            <el-table
              class="ybjboder"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{
                backgroundColor: '#161616',
                color: '#aaa',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                fontSize: '12rem',
              }"
              :cell-style="{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                backgroundColor: '#161616',
                color: '#fff',
                fontSize: '14rem',
              }"
            >
              <!-- padding:'6rem 0' -->
              <el-table-column
                align="center"
                show-overflow-tooltip
                v-for="(item, index) in bt"
                :key="index"
                :prop="item.prop"
                :label="item.label"
                :width="item.width"
              >
                <template slot-scope="scope">
                  <div v-if="item.label == '风险值'">
                    <div
                      :class="
                        scope.row.c == 1
                          ? 'bdrd'
                          : scope.row.c == 2
                          ? 'bdrz'
                          : scope.row.c == 3
                          ? 'bdrg'
                          : '--'
                      "
                    >
                      {{
                        scope.row.c == 1
                          ? "低"
                          : scope.row.c == 2
                          ? "中"
                          : scope.row.c == 3
                          ? "高"
                          : "--"
                      }}
                    </div>
                  </div>
                  <span v-else>{{ scope.row[scope.column.property] }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="xianbian bb">
          <div class="btbox">
            <div class="guns"></div>
            <div class="wenz">潜在攻击面</div>
          </div>
          <div class="tcneiring">
            <div class="tebdsw">
              <el-table
                class="ybjboder"
                :data="gjlist"
                style="width: 100%"
                :header-cell-style="{
                  backgroundColor: '#161616',
                  color: '#aaa',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  fontSize: '12rem',
                }"
                :cell-style="{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backgroundColor: '#161616',
                  color: '#fff',
                  fontSize: '14rem',
                }"
              >
                <el-table-column
                  align="center"
                  show-overflow-tooltip
                  v-for="(item, index) in gjtb"
                  :key="index"
                  :prop="item.prop"
                  :label="item.label"
                  :width="item.width"
                >
                  <template slot-scope="scope">
                    <div v-if="item.label == '风险值占比'">
                      <el-progress
                        :class="
                          scope.row.c < 50
                            ? 'bdrd jdutiao'
                            : scope.row.c < 80 && scope.row.c >= 50
                            ? 'bdrz jdutiao'
                            : scope.row.c >= 80
                            ? 'bdrg jdutiao'
                            : '--'
                        "
                        :text-inside="true"
                        :stroke-width="16"
                        :percentage="77"
                      ></el-progress>
                    </div>
                    <span v-else>{{ scope.row[scope.column.property] }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="tiaomar">
              <div class="huanxtop">
                <div class="textrtfd">
                  <div class="gaismji">改善面积</div>
                  <div class="yuszbi">(与上周相比)</div>
                </div>
                <div class="imgyuioj">
                  <img src="../img/lst.png" alt="" />
                </div>
              </div>
              <div class="huanxjdu">
                <!-- :stroke-width="wwind == 1920 ? 16 * 1.33333333333 : 16" -->
                <!-- :stroke-width="wwind == 1920 ? 16 * 1.33333333333 : 16" -->
                <el-progress
                  class="huanxyet"
                  :stroke-width="wwind == 1920 ? 16 : 16 / 1.33333333333"
                  type="circle"
                  :percentage="30"
                  color="#C6502D"
                ></el-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="yobiant bb">
        <div class="maxbgtp">
          <div class="btbox_ammo">
            <div class="btbox">
              <div class="guns"></div>
              <div class="wenz">关键风险资产</div>
            </div>
            <div style="font-size: 12rem; font-weight: normal; cursor: pointer">
              详情 >>
            </div>
          </div>
          <div class="biaoge">
            <div class="gdstyle">
              <div v-for="(e, i) in 6" :key="i">
                <table border="1" cellspacing="0" width="100%">
                  <tr>
                    <td class="lefttr">IP</td>
                    <td class="righttr">192.168.0.121</td>
                  </tr>
                  <tr>
                    <td class="lefttr">所属资源组</td>
                    <td class="righttr">人力资源部</td>
                  </tr>
                  <tr>
                    <td class="lefttr">风险值</td>
                    <td class="righttr">高</td>
                  </tr>
                  <tr>
                    <td class="lefttr">风险画像</td>
                    <td class="righttr">
                      <div>未经授权的访问</div>
                      <div>数据库注入攻击</div>
                      <div>数据泄露或篡改</div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="btbox" style="padding: 13rem 0">
            <div class="guns"></div>
            <div class="wenz">资产图谱</div>
          </div>
          <div class="yuanqiutu">
            <Graph />
          </div>
        </div>
        <div class="fxlujig">
          <div class="btbox">
            <div class="guns"></div>
            <div class="wenz">关键风险路径</div>
          </div>
          <div class="guaninastye">
            <div class="xialxz">
              <div class="fkuai"></div>
              <el-select
                v-model="zq"
                class="xialacx zhessless"
                size="mini"
                style="width: 180rem"
              >
                <el-option label="月" value="1"></el-option>
                <el-option label="周" value="2"></el-option>
                <el-option label="日" value="3"></el-option>
              </el-select>
            </div>
            <div class="xhfor gdstyle">
              <div v-for="(e,i) in 6" :key="i">
                <div class="ytyz">
                  <div class="imgtu">
                    <img v-if="i == 0" src="../img/hip.png" alt="">
                    <img v-else src="../img/lip.png" alt="">
                  </div>
                  <div class="zswenz">
                    <div class="ipdiz">192.168.1.10（起点）</div>
                    <div class="azswenztex">资产类型：文件服务器</div>
                  </div>
                </div>
                <div class="zhesjiant">
                  <div class="tetxbox">
                    <div>注入数据等 》</div>
                    <i class="el-icon-arrow-down"></i>
                  </div>
                </div>
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
  components: {
    Gauge: () => import("@/components/gauge"),
    Lines: () => import("@/components/lines"),
    Graph: () => import("@/components/graph"),
  },
  data() {
    return {
      wwind: 0,
      zq: "3", //周期选择
      // 列表数据
      tableData: [
        {
          a: "名称",
          b: "192.168.22.88",
          c: "1",
          d: "可能存在密码泄露",
        },
        {
          a: "名称",
          b: "192.168.22.88",
          c: "2",
          d: "可能存在密码泄露",
        },
        {
          a: "名称",
          b: "192.168.22.88",
          c: "3",
          d: "可能存在密码泄露",
        },
      ],
      // 表头数据
      bt: [
        {
          prop: "a",
          label: "名称",
          // width:"90"
        },
        {
          prop: "b",
          label: "IP",
          // width:110
        },
        {
          prop: "c",
          label: "风险值",
        },
        {
          prop: "d",
          label: "影响原因",
        },
        {
          prop: "address",
          label: "操作",
        },
      ],
      // 攻击表头
      gjtb: [
        {
          prop: "a",
          label: "资产组名称",
          // width:"90"
        },
        {
          prop: "b",
          label: "暴露节点数",
          // width:110
        },
        {
          prop: "c",
          label: "风险值占比",
          width:
            document.documentElement.clientWidth == 1920
              ? 94 * 1.33333333333 + ""
              : "94",
        },
      ],
      // 攻击list
      gjlist: [
        {
          a: "人力资源部",
          b: "30",
          c: "46",
        },
        {
          a: "人力资源部",
          b: "80",
          c: "80",
        },
        {
          a: "人力资源部",
          b: "77",
          c: "77",
        },
      ],
    };
  },
  created() {
    this.wwind = document.documentElement.clientWidth;
  },
  methods: {
    xx(e) {
      console.log(e);
    },
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>