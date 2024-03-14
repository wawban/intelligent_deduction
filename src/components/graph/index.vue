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
    datasj: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      // 点
      nodes: [],
      //   连接线数据
      links: [],
    };
  },
  watch: {
    datasj: {
      handler(to, form) {
        this.links = this.datasj.edges;
        this.nodes = this.datasj.nodes;
        this.createCharts();
      },
      // deep: true,
      // immediate: true,
    },
  },
  methods: {
    createCharts() {
      this.myChart = this.$echarts.init(this.$refs[this.refName]);
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
      // 连接线样式
      this.links.map((e) => {
        e.lineStyle = {
          color: "#fff",
        };
      });
      var option = {
        series: [
          {
            zoom: 3,
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
                  fontSize: 4 * 3, //连接文字大小
                  color: "#fff",
                },
                formatter(x) {
                  return x.data.label; // 连接线显示内容
                },
              },
            },
            label: {
              show: true, //图形上(圆外文字)的文本标签 是否显示标签。
              textStyle: {
                color: "#fff",
                fontSize: 4 * 3,
              },
              align: "center",
              formatter: (params) => {
                return `\n{a|${params.data.label}}\n${params.data.name}`;
              },
              // 圆内文字
              rich: {
                a: {
                  color: "#fff",
                  padding: [9 * 3, 0],
                  fontSize: 4 * 3,
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
      this.myChart.resize();
      option && this.myChart.setOption(option, true);
      this.myChart.getZr().off("mousewheel");
      this.myChart.getZr().on("mousewheel", (param) => {
        let currentOption = this.myChart.getOption();
        if (currentOption.series[0]) {
          let zoom = currentOption.series[0].zoom;
          // 点外文字
          currentOption.series[0].label.textStyle.fontSize = 4 * zoom;
          // 点内文字
          currentOption.series[0].label.rich.a.fontSize = 4 * zoom;
          currentOption.series[0].label.rich.a.padding[0] = 9 * zoom;
          // 边上文字
          currentOption.series[0].edgeLabel.textStyle.fontSize = 4 * zoom;
          option && this.myChart.setOption(currentOption);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.graph_charts {
  height: 100%;
}
</style>