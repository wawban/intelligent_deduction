<template>
  <div class="instrumentpanel">
    <div class="top">
      <!-- 风险评估 -->
      <div class="top_left bb">
        <div class="yauntu">
          <div class="text">风险评估</div>
          <div class="echar">
            <Gauge
              :num="fxianpgutu.compared_value"
              :text="
                fxianpgutu.compared_value >= 80
                  ? '高'
                  : fxianpgutu.compared_value < 40
                  ? '低'
                  : '中'
              "
            />
            <div class="dw">
              <div class="younum">0</div>
              <div class="zuonum">100</div>
              <div
                class="zjiannum"
                :style="{
                  color:
                    fxianpgutu.compared_value >= 80
                      ? '#e53a40'
                      : fxianpgutu.compared_value < 40
                      ? '#f6d535'
                      : '#fa9600',
                }"
              >
                {{ fxianpgutu.compared_value }}
              </div>
            </div>
          </div>
          <div class="bjtimg">
            <div class="numtext">{{ fxianpgutu.compared_diff }}</div>
            <div class="tibiao">
              <img
                v-if="fxianpgutu.compare_trend == 'down'"
                src="../img/lst.png"
                alt=""
              />
              <img
                v-if="fxianpgutu.compare_trend == 'up'"
                src="../img/hst.png"
                alt=""
              />
            </div>
          </div>
          <div class="footery">(与{{ fxianpgutu.compared_to }}相比)</div>
        </div>
        <!-- 风险评估右 -->
        <div class="sjdata">
          <div class="scgxe">
            <div class="sjiangx">
              <i class="el-icon-refresh-left"></i>
              <p>最近更新时间：{{ fxpgy.time_updated }}</p>
            </div>
            <div class="younsles">
              <div>数据周期：</div>
              <el-select
                v-model="zq"
                class="zhessless"
                size="mini"
                style="width: 60rem"
                @change="sjianrq"
              >
                <el-option label="月" value="1"></el-option>
                <el-option label="周" value="2"></el-option>
                <!-- <el-option label="日" value="3"></el-option> -->
              </el-select>
            </div>
          </div>
          <div class="boxsjudhu">
            <div class="tuiyan">
              <div class="numcs">
                <div class="numtew">{{ fxpgy.total_tasks }}</div>
                <div class="danwer">次</div>
              </div>
              <div class="tuiyannum">推演任务数</div>
            </div>
            <div class="yb">
              <div class="numcs">
                <div class="numtew">{{ fxpgy.issues_discovered }}</div>
                <div class="danwer">个</div>
              </div>
              <div class="tuiyannum">发现隐蔽问题数</div>
            </div>
          </div>
          <div class="boxsjudhu" style="padding-top: 26rem">
            <div class="yx">
              <div class="numcs">
                <div class="numtew">{{ fxpgy.paths_blocked }}</div>
                <div class="danwer">条</div>
              </div>
              <div class="tuiyannum">有效封堵路径数</div>
            </div>
            <div class="zl">
              <div class="numcs">
                <div class="numtew">{{ fxpgy.vulns_remediated }}</div>
                <div class="danwer">个</div>
              </div>
              <div class="tuiyannum">阻挡漏洞数</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 隐蔽问题趋势 -->
      <div class="top_right bb">
        <div class="btbox">
          <div class="guns"></div>
          <div class="wenz">隐蔽问题趋势</div>
        </div>
        <!-- <div class="zqxuanz" v-if="ybwtqs"> -->
        <div class="zqxuanz">
          <div>显示周期：</div>
          <el-select
            class="zhessless"
            v-model="zq"
            size="mini"
            style="width: 60rem"
            @change="sjianrq"
          >
            <el-option label="月" value="1"></el-option>
            <el-option label="周" value="2"></el-option>
            <!-- <el-option label="日" value="3"></el-option> -->
          </el-select>
        </div>
        <div class="ecrlin">
          <Lines :list="ybwtqs" />
        </div>
      </div>
    </div>
    <div class="bottrmbu">
      <!-- 潜在风险资产 -->
      <div class="zuoniamt">
        <div class="czaifx bb">
          <div class="btbox">
            <div class="guns"></div>
            <div class="wenz">潜在风险资产</div>
          </div>
          <div>
            <el-table
              class="ybjboder"
              :data="dashboardpotentialdata"
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
                        scope.row.risk_score >= 80
                          ? 'bdrg'
                          : scope.row.risk_score < 40
                          ? 'bdrd'
                          : 'bdrz'
                      "
                    >
                      {{
                        scope.row.risk_score >= 80
                          ? "高"
                          : 40 > scope.row.risk_score
                          ? "低"
                          : "中"
                      }}
                    </div>
                  </div>
                  <!-- 操作 -->
                  <div v-else-if="item.label == '操作'">
                    <!-- <img
                    @click="gotu(scope.row)"
                    style="height: 22rem; cursor: pointer"
                    src="../img/cx.png"
                    alt=""
                  /> -->
                    <i
                      @click="gotu(scope.row)"
                      class="el-icon-right"
                      style="font-size: 22rem; cursor: pointer"
                    ></i>
                  </div>
                  <span v-else>{{ scope.row[scope.column.property] }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <!-- 潜在攻击面 -->
        <div class="xianbian bb">
          <div class="btbox">
            <div class="guns"></div>
            <div class="wenz">潜在攻击面</div>
          </div>
          <div class="tcneiring">
            <div class="tebdsw">
              <el-table
                class="ybjboder"
                :data="qzgjm.items"
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
                          scope.row.percentage_exposed_nodes >= 80
                            ? 'bdrg jdutiao'
                            : scope.row.percentage_exposed_nodes < 40
                            ? 'bdrd jdutiao'
                            : 'bdrz jdutiao'
                        "
                        :text-inside="true"
                        :stroke-width="16"
                        :percentage="scope.row.percentage_exposed_nodes"
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
                  <img
                    v-if="qzgjm.compare_trend == 'down'"
                    src="../img/lst.png"
                    alt=""
                  />
                  <img
                    v-if="qzgjm.compare_trend == 'up'"
                    src="../img/hst.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="huanxjdu">
                <el-progress
                  class="huanxyet"
                  :stroke-width="wwind == 1920 ? 16 : 16 / 1.33333333333"
                  type="circle"
                  :percentage="qzgjm.compared_diff"
                  color="#C6502D"
                ></el-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 关键风险资产 -->
      <div class="yobiant bb">
        <div class="maxbgtp">
          <div class="btbox_ammo">
            <div class="btbox">
              <div class="guns"></div>
              <div class="wenz">关键风险资产</div>
            </div>
            <div
              style="font-size: 12rem; font-weight: normal; cursor: pointer"
              @click="gjgt"
            >
              详情 >>
            </div>
          </div>
          <div class="biaoge">
            <div class="gdstyle">
              <!-- 关键风险资产 -->
              <div
                v-for="(e, i) in ganxjian"
                :key="i"
                :class="fxxz == i ? 'dqxz' : ''"
                @click="qhuanfx(i)"
              >
                <table border="1" cellspacing="0" width="100%">
                  <tr>
                    <td class="lefttr">IP</td>
                    <td class="righttr">{{ e.ip }}</td>
                  </tr>
                  <tr>
                    <td class="lefttr">所属资源组</td>
                    <td class="righttr">{{ e.asset_group_name }}</td>
                  </tr>
                  <tr>
                    <td class="lefttr">风险值</td>
                    <!-- <td class="righttr">高</td> -->
                    <td class="righttr">
                      {{
                        e.risk_score >= 80
                          ? "高"
                          : 40 > e.risk_score
                          ? "低"
                          : "中"
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lefttr">风险画像</td>
                    <td class="righttr">
                      <div v-for="(item, index) in e.risk_profile" :key="index">
                        {{ item }}
                      </div>
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
          <!-- 资产图谱 -->
          <div class="yuanqiutu">
            <Graph :datasj="tjity" v-if="tjity" />
          </div>
        </div>
        <div class="fxlujig">
          <div class="btbox">
            <div class="guns"></div>
            <div class="wenz">关键风险路径</div>
          </div>
          <!-- 关键风险路径 -->
          <div class="guaninastye">
            <div class="xialxz">
              <div class="fkuai"></div>
              <el-select
                v-model="gjljy"
                class="xialacx zhessless"
                size="mini"
                style="width: 180rem"
                @change="gjianurl"
              >
                <el-option label="最大收益攻击路径" value="1"></el-option>
                <el-option label="最隐蔽攻击路径" value="2"></el-option>
                <el-option label="最大概率攻击路径" value="3"></el-option>
              </el-select>
            </div>

            <!-- ganxjian -->
            <!-- 最大收益攻击路径 -->
            <!-- -------------------------------------------------------------------------------- -->
            <!-- <div class="xhfor gdstyle">
              <div v-for="(e, i) in ganxjian[fxxz].highest_value_path" :key="i">
              <div v-for="(e, i) in 6" :key="i">
                <div class="ytyz">
                  <div class="imgtu">
                    <img v-if="i == 0" src="../img/hip.png" alt="" />
                    <img v-else src="../img/lip.png" alt="" />
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
            </div> -->
            <!-- zddata: {}, //关键风险路径数据-最大收益攻击路径
      zydata: {}, //关键风险路径数据-最隐蔽攻击路径
      gldata: {}, //关键风险路径数据-最大概率攻击路径 -->
            <!-- 最大收益攻击路径 -->
            <div class="xhfor gdstyle" v-if="gjljy == '1'">
              <div v-for="(e, i) in zddata" :key="i">
                <div class="ytyz">
                  <div class="imgtu">
                    <img v-if="i == 0" src="../img/hip.png" alt="" />
                    <img v-else src="../img/lip.png" alt="" />
                  </div>
                  <div class="zswenz">
                    <div class="ipdiz">
                      {{ e.node.name }}{{ i == 0 ? "（起点）" : "（途径）" }}
                    </div>
                    <div class="azswenztex">资产类型：{{ e.node.label }}</div>
                  </div>
                </div>
                <div class="zhesjiant">
                  <div class="tetxbox">
                    <div>{{ e.edge.label }}</div>
                    <i class="el-icon-arrow-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <!-- -------------------------------------------------- -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  dashboard_evaluation,
  dashboard_summary,
  dashboard_issuestrend,
  dashboard_potential,
  dashboard_surface,
  dashboard_keysurface,
} from "@/api";
export default {
  components: {
    Gauge: () => import("@/components/gauge"),
    Lines: () => import("@/components/lines"),
    Graph: () => import("@/components/graph"),
  },
  data() {
    return {
      fxianpgutu: {}, //风险评估(图)
      fxpgy: {}, //风险评估-右
      zq: "2", //周期选择
      ybwtqs: {}, //隐蔽问题趋势
      dashboardpotentialdata: [], //潜在风险资产
      qzgjm: {}, //潜在攻击面
      ganxjian: [], //关键风险资产
      gjljy: "1", //攻击路径选择
      tjity: {}, //资产图谱
      zddata: {}, //关键风险路径数据-最大收益攻击路径
      zydata: {}, //关键风险路径数据-最隐蔽攻击路径
      gldata: {}, //关键风险路径数据-最大概率攻击路径
      // ------------------------------------------------------------
      fxxz: 0, //关键风险资产选择状态
      wwind: 0,
      // 表头数据
      bt: [
        {
          prop: "name",
          label: "名称",
          // width:"90"
        },
        {
          prop: "ip",
          label: "IP",
          // width:110
        },
        {
          prop: "risk_score",
          label: "风险值",
        },
        {
          prop: "reason",
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
          prop: "name",
          label: "资产组名称",
          // width:"90"
        },
        {
          prop: "count_exposed_nodes",
          label: "暴露节点数",
          // width:110
        },
        {
          // prop: "c",
          label: "风险值占比",
          width:
            document.documentElement.clientWidth == 1920
              ? 94 * 1.33333333333 + ""
              : "94",
        },
      ],
    };
  },
  created() {
    this.wwind = document.documentElement.clientWidth;
    this.getdata();
  },
  methods: {
    // 初始请求
    getdata() {
      this.dashboardevaluation(); // 风险评估
      this.dashboardsummary(); // 风险评估-右
      this.dashboardissuestrend(); //隐蔽问题趋势
      this.dashboardpotential(); //潜在风险资产
      this.dashboardsurface(); //潜在攻击面
      this.dashboardkeysurface(); //潜在攻击面
    },
    // 风险评估
    dashboardevaluation() {
      this.fxianpgutu.value = "";
      dashboard_evaluation({
        period: this.zq == "2" ? "weekly" : "monthly",
      }).then((res) => {
        this.fxianpgutu = res;
      });
    },
    // 风险评估-右
    dashboardsummary() {
      dashboard_summary({ period: this.zq == "2" ? "weekly" : "monthly" }).then(
        (res) => {
          this.fxpgy = res;
        }
      );
    },
    // 隐蔽问题趋势
    dashboardissuestrend() {
      dashboard_issuestrend({
        period: this.zq == "2" ? "weekly" : "monthly",
      }).then((res) => {
        this.ybwtqs = res.series;
      });
    },
    // 潜在风险资产
    dashboardpotential() {
      dashboard_potential().then((res) => {
        this.dashboardpotentialdata = res.items;
      });
    },
    // 潜在风险资产-跳转
    gotu() {
      this.$router.push("/figure/hostmachinedetails");
    },
    // 潜在攻击面
    dashboardsurface() {
      dashboard_surface({
        period: this.zq == "2" ? "weekly" : "monthly",
      }).then((res) => {
        this.qzgjm = res;
      });
    },
    // 周期选择，更新数据
    sjianrq(e) {
      this.dashboardevaluation(); // 风险评估
      this.dashboardsummary(); // 风险评估-右
      this.dashboardissuestrend(); //隐蔽问题趋势
      this.dashboardsurface(); //潜在攻击面
    },
    // 关键风险资产
    dashboardkeysurface() {
      dashboard_keysurface().then((res) => {
        // ---------------------------------------------------------------------------------------------------
        var arr = JSON.parse(JSON.stringify(res.items[0]));
        // 点数据
        arr.graph.nodes = [
          { id: "string", label: "label", name: "name", props: {} },
          { id: "string1", label: "label1", name: "name1", props: {} },
          { id: "string2", label: "label2", name: "name2", props: {} },
          { id: "string3", label: "label3", name: "name3", props: {} },
        ];
        // 线数据
        arr.graph.edges = [
          {
            id: "string",
            source: "string",
            target: "string1",
            label: "string",
            props: {},
          },
          {
            id: "string1",
            source: "string",
            target: "string2",
            label: "string1",
            props: {},
          },
          {
            id: "string2",
            source: "string3",
            target: "string2",
            label: "string2-3",
            props: {},
          },
        ];
        // --------------------------------------------------------------------------------------
        // 所有数据
        this.ganxjian = [res.items[0], arr];
        // 图谱数据
        this.tjity = this.ganxjian[0].graph;
        // 关键风险路径数据-最大收益攻击路径
        this.zddata = this.ganxjian[0].highest_value_path;
        // 关键风险路径数据-最隐蔽攻击路径
        this.zydata = this.ganxjian[0].most_stealthy_path;
        // 关键风险路径数据-最大概率攻击路径
        this.gldata = this.ganxjian[0].shortest_path;
        console.log(333333333333333);
        console.log(333333333333333);
        console.log(this.zddata);
        console.log(this.ganxjian[0].highest_value_path);
      });
    },
    // 关键风险路径切换数据
    gjianurl(e) {
      console.log(e);
    },
    // 关键风险资产-跳转
    gjgt() {
      this.$router.push("/figure/hostmachine");
    },
    // 切换风险
    qhuanfx(i) {
      this.fxxz = i;
      // 图谱数据
      this.tjity = this.ganxjian[i].graph;
    },
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>