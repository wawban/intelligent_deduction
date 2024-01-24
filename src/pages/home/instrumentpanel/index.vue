<template>
  <div class="assets">
    <div>
      <div>
        <ul>
          <li
            :dragable="true"
            v-for="(e, i) in bt"
            :key="i"
            v-dragging="{ list: bt, item: e }"
          >
            {{ e.label }}
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="left">eeeeeee</div>
      <div class="right">
        <el-table
          class="tablebottom"
          :data="tableData"
          style="width: 100%"
          :header-cell-style="{
            backgroundColor: '#292929',
            color: '#fff',
            borderColor: '#292929',
          }"
          :cell-style="{
            borderColor: '#292929',
            backgroundColor: '#000',
            color: '#fff',
          }"
        >
          <el-table-column
            v-for="(item, index) in bt"
            :key="index"
            :prop="item.prop"
            :label="item.prop"
          >
          </el-table-column>
        </el-table>
        <div class="pagefy" style="padding-top: 20px; padding-bottom: 20px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="[10, 20]"
            :page-size="page.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------------------- -->
    <div ref="xcxc" style="width: 600px; height: 500px"></div>
    <!-- ------------------------------------------------------- -->
    <el-popover
      placement="bottom"
      width="400"
      style="background: none !important"
      trigger="click"
    >
      <div>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
      <div slot="reference">xxx</div>
    </el-popover>
    <el-popover placement="right" width="400" trigger="click">
      <div>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
      <div slot="reference">click 激活</div>
    </el-popover>
    <!-- ------------------------------------------------------ -->
    <div>33</div>
    <div ref="szx" style="width: 600px; height: 500px"></div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <div>33</div>
    <!-- ------------------------------------------------------ -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: {
        current: 1,
        size: 10,
        total: 44,
      },
      bt: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "date",
          label: "日期",
        },
        {
          prop: "address",
          label: "地址",
        },
        {
          prop: "address",
          label: "地址1",
        },
        {
          prop: "address",
          label: "地址2",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
      ],
      //   --------------------------------------------
      //   显示球数据
      nodes: [
        {
          name: "1",
          category: 1,
          ssxs: "",
        },
        {
          name: "2",
          category: 0,
          ssxs: "dwdd3",
        },
        {
          name: "3",
          category: 1,
          ssxs: "dwdd2",
        },
        {
          name: "4",
          category: 1,
          ssxs: "dwdd1",
        },
      ],
      //   连接线数据
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
    this.zxiantu();
    this.init();
    // this.$dragging.$on('dragend',(e)=>{
    this.$dragging.$on("dragged", (e) => {
      this.bt = e.value.list;
    });
  },
  methods: {
    zxiantu() {
      this.myCharte = this.$echarts.init(this.$refs["szx"]);
      var option = {
        legend: {
          itemHeight:10,
          itemWidth:10,
          itemStyle:{
            borderColor:'#FA9600'
          },
          textStyle:{
            color:'#fff'
          },
          data:[
            {
              name:'隐蔽问题数',
              icon:'rect'
            }
          ]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 竖线样式
            lineStyle: {
              // color:'red'
              //     color: {
              //         type: 'linear',
              //         x: 0,
              //         y: 0,
              //         x2: 0,
              //         y2: 1,
              //         colorStops: [{
              //             offset: 0,
              //             color: 'rgba(0, 255, 233,0)'
              //         }, {
              //             offset: 0.5,
              //             color: 'rgba(255, 255, 255,1)',
              //         }, {
              //             offset: 1,
              //             color: 'rgba(0, 255, 233,0)'
              //         }],
              //         global: false
            },
          },
          // ------------------------------------------------------
          // ---------------------------------------------------------------
          formatter: function (params) {
            console.log(11111)
            console.log(params)
            // return "121";
            // return `\n{a|${12121}}\n${343434}`;
            return "eee" + "<br/>" + "ccc";
            // return (
            //   params[2].name +
            //   '<br />' +
            //   ((params[2].value - base) * 100).toFixed(1) +
            //   '%'
            // );
          },
          // rich: {
          //       a: {
          //         color: "red",
          //         padding: [30, 0],
          //         // margin:[30,0,0,0]
          //         // paddingBottom:50,
          //         // backgroundColor: 'rgba(255, 86, 76, .45)'
          //       },
          //       // a1: {
          //       //     color: 'red',
          //       //     padding: [4, 5],
          //       //     backgroundColor: 'rgba(255, 86, 76, .35)'
          //       // }
          //     }
          // ------------------------------------------------------------------
        },
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: {
        //     type: 'none',
        //     // animation: false,
        //     // label: {
        //     //   backgroundColor: '#ccc',
        //     //   borderColor: '#aaa',
        //     //   borderWidth: 1,
        //     //   shadowBlur: 0,
        //     //   shadowOffsetX: 0,
        //     //   shadowOffsetY: 0,
        //     //   color: '#222'
        //     // }
        //   },
        //   formatter: function (params) {
        //     return '121'
        //     // return (
        //     //   params[2].name +
        //     //   '<br />' +
        //     //   ((params[2].value - base) * 100).toFixed(1) +
        //     //   '%'
        //     // );
        //   }
        // },

        xAxis: {
          nameLocation: "start",
          name: "日期",
          type: "category",
          data: ["12.1", "12.2", "12.3", "12.4", "12.5", "12.6", "12.7"],
        },
        yAxis: [
          {
            // nameLocation:'end',
            name: "数量",
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.4)",
              },
            },
          },
        ],
        series: [
          {
            name:'隐蔽问题数',
            type: "line",
            data: [150, 230, 224, 218, 135, 147, 260],
            // data: [
            //   {value:150,key:40}
            // ],
            met:[{a:1,b:2}],
            symbolSize: 8, //折线圈大小
            symbol: "circle",
            // 折线
            itemStyle: {
              color: "#FF9A3E",
              borderColor: "#fff",
              borderWidth: 2,
            },
            // 渐变背景
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#FA9600",
                    },
                    {
                      offset: 1,
                      color: "#f59a2300",
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
      };
      this.myCharte.setOption(option);
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      alert(val);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      alert(val);
    },
    init() {
      this.myChart = this.$echarts.init(this.$refs["xcxc"]);
      //   圆心样式
      this.nodes.map((e) => {
        if (e.category == 0) {
          //   e.symbolSize = 100; //圆球大小
          e.itemStyle = {
            color: "red", //圆球颜色
            borderColor: "#fff", //加边框
            borderWidth: 3, //边框宽度
          };
        } else {
          //   e.symbolSize = 50; //圆球大小
        }
      });
      // 连接线样式
      this.links.map((e) => {
        // if(e.category == 0){
        // e.symbolSize = 100;//圆球大小
        e.lineStyle = {
          color: "#fff", //圆球颜色
          // borderColor: '#fff',//加边框
          // borderWidth: 3,//边框宽度
        };
        // }
      });
      //   设置球与连接线样式
      //   const color1 = "#006acc";
      //   const color2 = "#ff7d18";
      //   const color3 = "#10a050";

      //   this.links.forEach((link) => {
      //     link.label = {
      //       align: "center",
      //       fontSize: 12,
      //     };
      //     if (link.name === "参股") {
      //       link.lineStyle = {
      //         color: color2,
      //       };
      //     } else if (link.name === "董事") {
      //       link.lineStyle = {
      //         color: color1,
      //       };
      //     } else if (link.name === "法人") {
      //       link.lineStyle = {
      //         color: color3,
      //       };
      //     }
      //   });
      var option = {
        series: [
          {
            type: "graph",
            layout: "force", // //'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置.'circular' 采用环形布局，'force' 采用力引导布局。
            symbolSize: 50, // /标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
            // draggable: true, //节点是否可拖拽，只在使用力引导布局的时候有用。
            // roam: true, //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            // focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。放大
            // categories: categories, //节点分类的类目，可选。
            edgeSymbol: ["", "arrow"], // 箭头
            edgeSymbolSize: ["", 10], //边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
            edgeLabel: {
              normal: {
                show: true,
                // 连接文字样式
                textStyle: {
                  fontSize: 12, //连接文字大小
                  color: "#fff",
                },
                formatter(x) {
                  return x.data.name; // 连接线显示内容
                },
              },
            },

            label: {
              //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
              show: true, //是否显示标签。
              //   圆文字样式
              textStyle: {
                color: "#fff",
              },
              align: "center",
              formatter: (params) => {
                // console.log(555)
                // console.log(params.data)
                return `\n{a|${params.data.name}}\n${params.data.ssxs}`;
                // return `{a${params.value.type}|密接人数：${params.value.num}}\n\n\n\n\n\n\n${params.name}`
              },
              rich: {
                a: {
                  color: "red",
                  padding: [30, 0],
                  // margin:[30,0,0,0]
                  // paddingBottom:50,
                  // backgroundColor: 'rgba(255, 86, 76, .45)'
                },
                // a1: {
                //     color: 'red',
                //     padding: [4, 5],
                //     backgroundColor: 'rgba(255, 86, 76, .35)'
                // }
              },
              //   --------------------------------------------------
              // position: "inside",          //标签的位置。// 绝对的像素值[10, 10],// 相对的百分比['50%', '50%'].'top','left','right','bottom','inside','insideLeft','insideRight','insideTop','insideBottom','insideTopLeft','insideBottomLeft','insideTopRight','insideBottomRight'
              // offset: [30, 40],             //是否对文字进行偏移。默认不偏移。例如：[30, 40] 表示文字在横向上偏移 30，纵向上偏移 40。
              // formatter: '{b}: {c}',       //标签内容格式器。模板变量有 {a}、{b}、{c}，分别表示系列名，数据名，数据值。
              // textStyle: mytextStyle
              //         const mytextStyle = {
              //   color: "#333",               //文字颜色
              //   fontStyle: "normal",         //italic斜体  oblique倾斜
              //   fontWeight: "normal",        //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
              //   fontFamily: "sans-serif",    //字体系列
              //   fontSize: 18,                  //字体大小
              // };
              // normal: mylabel,
              // emphasis: mylabel
            },

            // label: {
            // show: true,
            // align: 'center',
            // formatter: params => {
            //    return `{a${params.value.type}|密接人数：${params.value.num}}\n\n\n\n\n\n\n${params.name}`
            //     // return `{a${params.value.type}|密接人数：${params.value.num}}\n\n\n\n\n\n\n${params.name}`
            // },
            // rich: {
            //     a0: {
            //         color: '#fff',
            //         padding: [4, 5],
            //         backgroundColor: 'rgba(255, 86, 76, .45)'
            //     },
            //     a1: {
            //         color: '#fff',
            //         padding: [4, 5],
            //         backgroundColor: 'rgba(255, 86, 76, .35)'
            //     },
            //     a2: {
            //         color: '#fff',
            //         padding: [4, 5],
            //         backgroundColor: 'rgba(239, 255, 55, .35)'
            //     },
            //     a3: {
            //         color: '#fff',
            //         padding: [4, 5],
            //         backgroundColor: 'rgba(50, 233, 255, .35)'
            //     },
            // }
            // },

            force: {
              repulsion: 2000, // 连接线长短
              edgeLength: 120, // 连接线长短
            },
            data: this.nodes,
            links: this.links,
          },
        ],
      };
      this.myChart.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
// ::v-deep .el-table  expanded-cell {
//   background-color: transparent !important;
// }

.assets {
  color: #fff;
  .container {
    display: flex;
    // justify-content: space-between;
    .left {
      width: 268px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 5px;
    }
    .right {
      width: 700px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 5px;
      padding: 10px;
    }
  }
}
</style>