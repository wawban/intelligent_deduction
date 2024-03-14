<template>
  <div :ref="refName" class="line_charts"></div>
</template>
  <script>
export default {
  props: {
    refName: {
      type: String,
      default: String(Math.floor(Math.random() * 100)) + "lineadd",
    },
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      myChart: "",
    };
  },
  watch: {
    // list() {
    //   alert(8);
    // },
    list: {
      handler(to, form) {
        // this.type = this.$route.meta.type || "";
        // this.name = this.$route.meta.nemr || "";
        // alert(8);
        // alert(this.list.length);
        this.createCharts(this.list);
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    // alert(1);
    // alert(this.list);
    // this.createCharts();
  },
  methods: {
    sz(e) {
      let w = document.documentElement.clientWidth;
      if (w <= 1440) {
        let j = w / 1440;
        return e * j;
      } else if (w >= 1920) {
        let j = w / 1920;
        return e * j * 1.33333333333;
      }
    },
    createCharts(arrlis) {
      // alert(9);
      // alert(this.refName);
      this.myChart = this.$echarts.init(this.$refs[this.refName]);
      // alert(767);
      // var arr = this.list.map((item) => {
      // alert(1);
      var arr = arrlis.map((item) => {
        return item.date;
      });
      // alert(3);
      var arrvsj = arrlis.map((item) => {
        return item.value;
      });
      // alert(2);
      // alert(JSON.stringify(arr));
      // alert(JSON.stringify(arrvsj));
      // alert(arr);
      // var arr = [
      //   { a: "2023年12月1号" },
      //   { a: "2023年12月2号" },
      //   { a: "2023年12月3号" },
      //   { a: "2023年12月4号" },
      //   { a: "2023年12月5号" },
      //   { a: "2023年12月6号" },
      //   { a: "2023年12月7号" },
      // ];
      var option = {
        grid: {
          top: "16%",
          left: "18%",
          right: "1%",
          bottom: "10%",
        },
        legend: {
          itemHeight: this.sz(10),
          itemWidth: this.sz(10),
          itemStyle: {
            borderColor: "#FA9600",
          },
          textStyle: {
            color: "#fff",
            padding: [0, 0, 0, this.sz(-15)],
          },
          data: [
            {
              name: "隐蔽问题数",
              icon: "rect",
            },
          ],
          formatter: (e) => {
            return "\n" + "\n" + "\n" + "\n" + e;
          },
          left: 0,
          top: this.sz(30),
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 竖线样式
            lineStyle: {},
          },
          formatter: function (e) {
            var i = e[0].dataIndex;
            return (
              "<div style='font-size: 12rem; font-weight: normal; color: #000000'>" +
              arr[i] +
              "</div>" +
              "<div style='display: flex;align-items: flex-end;padding-top:10rem'>" +
              "<div style='font-size: 14rem;font-weight: 500;color: #000000;margin-right: 10rem;'>隐蔽问题数</div>" +
              "<div style='font-size: 16rem;font-weight: 500;color: #000000;'>" +
              // "<div style='font-size: 0.14rem;font-weight: 500;color: #000000;'>" +
              e[0].data +
              "个</div>" +
              "</div>"
            );
          },
        },
        xAxis: {
          nameLocation: "start",
          name: "日期",
          type: "category",
          // data: ["12.1", "12.2", "12.3", "12.4", "12.5", "12.6", "12.7"],
          data: arr,
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
            name: "隐蔽问题数",
            type: "line",
            // data: [150, 230, 224, 218, 135, 147, 260],arrvsj
            data: arrvsj,
            // data: [
            //   {value:150,key:40}
            // ],
            met: [{ a: 1, b: 2 }],
            symbolSize: 8, //折线圈大小
            symbol: "circle",
            // 折线
            itemStyle: {
              color: "#FF9A3E",
              borderColor: "#fff",
              borderWidth: this.sz(2),
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
      this.myChart.setOption(option);
    },
  },
};
</script>
  <style lang="less" scoped>
.line_charts {
  height: 100%;
}
</style>