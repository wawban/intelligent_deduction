<template>
  <div :ref="refName" class="graph_charts"></div>
</template>
<script>
export default {
  props: {
    refName: {
      type: String,
      default: String(Math.floor(Math.random() * 100)) + "lineadd",
    },
  },
  data() {
    return {
      //   显示球数据
      //   category // 判断球颜色
      nodes: [
        {
          name: "1",
          category: 1, // 主球
          ssxs: "",
        },
        {
          name: "2",
          category: 0,
          ssxs: "dwdd3",
        },
        {
          name: "3",
          category: 0,
          ssxs: "dwdd2",
        },
        {
          name: "4",
          category: 0,
          ssxs: "dwdd1",
        },
      ],
      //   连接线数据
      //   name  连接线文字
      links: [
        {
          source: "2",
          target: "1",
          name: "浏-操",
        },
        {
          source: "2",
          target: "3",
          name: "浏-J",
        },
        {
          source: "2",
          target: "4",
          name: "",
        },
        {
          source: "1",
          target: "3",
          name: "C-J",
        },
      ],
    };
  },
  mounted() {
    this.createCharts();
  },
  methods: {
    createCharts() {
      this.myChart = this.$echarts.init(this.$refs[this.refName]);
      // ----------------------------------------------------------------
      //   圆心样式
      this.nodes.map((e) => {
        if (e.category == 1) {
          e.itemStyle = {
            color: "#71A5FF", //圆球颜色
            borderColor: "#fff", //加边框
            borderWidth: 2, //边框宽度
          };
        }
      });
      // ----------------------------------------------------------------
      // 连接线样式
      this.links.map((e) => {
        e.lineStyle = {
          color: "#fff",
        };
        // }
      });
      // ----------------------------------------------------------------
      var option = {
        series: [
          {
            roam: true,
            type: "graph",
            layout: "force", // //'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置.'circular' 采用环形布局，'force' 采用力引导布局。
            symbolSize: 28, // /标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
            draggable: true, //节点是否可拖拽，只在使用力引导布局的时候有用。
            edgeSymbol: ["", "arrow"], // 箭头
            edgeSymbolSize: ["", 5], //边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
            edgeLabel: {
              normal: {
                show: true,
                // 连接文字样式
                textStyle: {
                  //   fontSize: 4, //连接文字大小
                  fontSize: 4, //连接文字大小
                  color: "#fff",
                },
                formatter(x) {
                  return x.data.name; // 连接线显示内容
                },
              },
            },

            label: {
              show: true, //图形上(圆外文字)的文本标签 是否显示标签。
              textStyle: {
                color: "#fff",
                fontSize: 4,
              },
              align: "center",
              formatter: (params) => {
                return `\n{a|${params.data.name}}\n${params.data.ssxs}`;
              },
              rich: {
                a: {
                  color: "#fff",
                  padding: [30, 0],
                  fontSize: 4,
                },
              },
            },
            force: {
              repulsion: 100, // 连接线长短
              edgeLength: 65, // 球间距
            },
            data: this.nodes,
            links: this.links,
          },
        ],
      };
      // ----------------------------------------------------------------
      this.myChart.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
.graph_charts {
  height: 100%;
}
</style>