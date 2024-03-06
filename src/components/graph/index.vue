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
      //   显示球数据
      //   category // 判断球颜色
      // 点
      nodes: [
        // {
        //   //  id: "string",
        //   name: "3",
        //   props: [11111, 22222, "192.168.1.1"],
        // },
        // {
        //   // id: "22",
        //   name: "2",
        //   props: [11111, "192.168.1.1"],
        // },
        // { id: "string", name: "string", props: [11111, 22222, "192.168.1.1"] },
        // { id: "ip", name: "ip", props: [11111, "192.168.1.1"] },
        // {
        //   name: "1",
        //   category: 1, // 主球
        //   ssxs: "",
        // },
        // {
        //   name: "2",
        //   category: 0,
        //   ssxs: "dwdd3",
        // },
        // {
        //   name: "3",
        //   category: 0,
        //   ssxs: "dwdd2",
        // },
        // {
        //   name: "4",
        //   category: 0,
        //   ssxs: "dwdd1",
        // },
      ],
      //   连接线数据
      //   name  连接线文字
      links: [
        // {
        //   id: "string",
        //   source: "string",
        //   target: "ip",
        //   type: "string",
        //   props: {},
        // },
        // {
        //   source: "1",
        //   target: "2",
        //   name: "浏-操",
        // },
        // {
        //   source: "2",
        //   target: "3",
        //   name: "浏-J",
        // },
        // {
        //   source: "2",
        //   target: "4",
        //   name: "",
        // },
        // {
        //   source: "1",
        //   target: "3",
        //   name: "C-J",
        // },
      ],
    };
  },
  mounted() {
    // console.log(33333333333333);
    // console.log(33333333333333);
    // console.log(33333333333333);
    // console.log(JSON.stringify(this.datasj.nodes));
    // // alert(6);
    // console.log(JSON.stringify(this.datasj.edges));
    // // {
    //       id: "string",
    //       src: "string",
    //       dst: "ip",
    //       type: "string",
    //       props: {},
    //     },

    this.links = this.datasj.edges.map((res) => {
      return {
        source: res.src,
        target: res.dst,
        name: res.type,
      };
    });
    this.nodes = this.datasj.nodes;
    // console.log(this.datasj.edges);
    // console.log(999999999);
    // console.log(999999999);
    // console.log(999999999);
    // console.log(this.links);
    this.createCharts();
  },
  // watch: {
  //   // list() {
  //   //   alert(8);
  //   // },
  //   datasj: {
  //     handler(to, form) {
  //       // this.type = this.$route.meta.type || "";
  //       // this.name = this.$route.meta.nemr || "";
  //       alert(8);
  //       console.log(33333333333333);
  //       console.log(33333333333333);
  //       console.log(33333333333333);
  //       console.log(33333333333333);
  //       // console.log(this.datasj.id);
  //       // console.log(this.datasj);
  //       // console.log(this.datasj);
  //       // this.nodes = this.datasj.nodes;
  //       // this.links = this.datasj.edges;
  //       alert(7);
  //       console.log(JSON.stringify(this.datasj.nodes));
  //       alert(6);
  //       console.log(JSON.stringify(this.datasj.edges));
  //       alert(5);
  //       this.createCharts();
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  methods: {
    createCharts() {
      // alert(4);
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
                  //   fontSize: 4, //连接文字大小
                  fontSize: 4 * 3, //连接文字大小
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
                fontSize: 4 * 3,
              },
              align: "center",
              formatter: (params) => {
                // return `\n{a|${params.data.name}}\n${params.data.ssxs}`;
                var xiaji = "";
                for (var i = 0; i < params.data.props.length; i++) {
                  xiaji += "\n" + params.data.props[i];
                }
                return `\n{a|${params.data.name}}${xiaji}`;
              },
              // 圆内文字
              rich: {
                a: {
                  color: "#fff",
                  padding: [14 * 3, 0],
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
      // ----------------------------------------------------------------
      // this.myChart.setOption(option);
      this.myChart.resize();
      option && this.myChart.setOption(option, true);
      //   ----------------------------------------------------------------------------------------
      //   let preZoom = 1
      this.myChart.getZr().off("mousewheel");
      this.myChart.getZr().on("mousewheel", (param) => {
        let currentOption = this.myChart.getOption();
        //   -------------------------------------------------------------------
        if (currentOption.series[0]) {
          let zoom = currentOption.series[0].zoom;
          // alert(zoom)
          // currentOption.textStyle.fontSize = 10 * zoom
          // console.log(11111111111111111111);
          // console.log(11111111111111111111);
          // console.log(11111111111111111111);
          // console.log(currentOption);
          // 点外文字
          currentOption.series[0].label.textStyle.fontSize = 4 * zoom;
          // 点内文字
          currentOption.series[0].label.rich.a.fontSize = 4 * zoom;
          currentOption.series[0].label.rich.a.padding[0] = 14 * zoom;
          // 边上文字
          currentOption.series[0].edgeLabel.textStyle.fontSize = 4 * zoom;
          option && this.myChart.setOption(currentOption);
        }
      });
    },
    // initTree() {
    //   // const echartDom = this.$refs.myEchartsRef;
    //   // this.myChart = this.$echarts.init(echartDom);
    //   this.myChart = this.$echarts.init(this.$refs[this.refName]);
    //   this.myChart.clear();
    //   const option = {
    //     color: "#ff0000",
    //     textStyle: {
    //       fontSize: 10,
    //     },
    //     series: [
    //       {
    //         type: "tree",
    //         orient: "LR", //竖向或水平   TB代表竖向  LR代表水平
    //         edgeShape: "polyline", //控制折线的形式
    //         id: 0,
    //         name: "tree1",
    //         data: this.verticalTreeData,
    //         top: 0,
    //         left: "20%",
    //         right: "20%",
    //         bottom: 0,
    //         symbolSize: 7,
    //         edgeForkPosition: "63%",
    //         initialTreeDepth: 3,
    //         position: "left",
    //         roam: true,
    //         lineStyle: {
    //           width: 1,
    //           color: "#3a74ca",
    //         },
    //         scaleLimit: {
    //           min: 1,
    //           max: 5,
    //         },
    //         label: {
    //           color: "#ffffff",
    //           align: "center",
    //           borderRadius: 5,
    //           width: 150,
    //           padding: [5, 0, 0, 0],
    //           backgroundColor: "#2a61b3",
    //           rich: {
    //             oneBox: {
    //               // fontSize: 12,
    //               borderRadius: 5,
    //               fontWeight: "bold",
    //             },
    //             twoBox: {
    //               // fontSize: 12,
    //               borderRadius: 5,
    //               fontWeight: "bold",
    //             },
    //             threeBox: {
    //               // fontSize: 12,
    //               borderRadius: 5,
    //               fontWeight: "bold",
    //             },
    //             bottomBox: {
    //               // fontSize: 12,
    //               color: "#9eb5d8",
    //               padding: 2,
    //               borderRadius: [0, 0, 5, 5],
    //             },
    //           },
    //           formatter: function (param) {
    //             const { data } = param;
    //             let res = "";
    //             switch (data.state) {
    //               case 1:
    //                 res += `{oneBox|${data.equipmentName + "\n"}} {bottomBox| ${
    //                   data.description
    //                 }} `;
    //                 break;
    //               case 2:
    //                 res += `{twoBox|${data.equipmentName + "\n"}} {bottomBox| ${
    //                   data.description
    //                 }} `;
    //                 break;
    //               case 3:
    //                 res += `{threeBox|${
    //                   data.equipmentName + "\n"
    //                 }} {bottomBox| ${data.description}} `;
    //                 break;
    //               default:
    //                 res += `{threeBox|${
    //                   data.equipmentName + "\n"
    //                 }} {bottomBox| ${data.description}} `;
    //                 break;
    //             }
    //             return res;
    //           },
    //         },
    //         leaves: {
    //           label: {
    //             position: "right",
    //             verticalAlign: "middle",
    //             // fontSize: 10,
    //             // lineHeight: 40,
    //             align: "center",
    //           },
    //         },
    //         expandAndCollapse: false,
    //         animationDuration: 550,
    //         animationDurationUpdate: 750,
    //       },
    //     ],
    //   };
    //   this.myChart.resize();
    //   option && this.myChart.setOption(option, true);
    //   this.myChart.getZr().off("mousewheel");
    //   this.myChart.getZr().on("mousewheel", (param) => {
    //     let currentOption = this.myChart.getOption();
    //     if (currentOption.series[0]) {
    //       let zoom = currentOption.series[0].zoom;
    //       // 点下文字大小
    //       currentOption.textStyle.fontSize = 10 * zoom;
    //       currentOption.series[0].label.width = 150 * zoom;
    //       option && this.myChart.setOption(currentOption);
    //     }
    //   });
    // },
  },
};
</script>
  <style lang="less" scoped>
.graph_charts {
  height: 100%;
}
</style>