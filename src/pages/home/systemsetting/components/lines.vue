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
    liste: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  // mounted() {
  //   this.createCharts();
  // },
  watch: {
    liste: {
      handler(to, form) {
        // console.log(this.liste);
        // this.createCharts(this.liste);
        this.createCharts();
      },
      // deep: true,
      // immediate: true,
    },
  },
  methods: {
    sz(e) {
      let w = document.documentElement.clientWidth;
      if (w <= 1440) {
        let j = w / 1440;
        return (e * j) / 1.33333333333;
      } else if (w >= 1920) {
        let j = w / 1920;
        return e * j;
      }
    },
    createCharts() {
      this.myChart = this.$echarts.init(this.$refs[this.refName]);
      var arr = [
        { a: "2023年12月1号" },
        { a: "2023年12月2号" },
        { a: "2023年12月3号" },
        { a: "2023年12月4号" },
        { a: "2023年12月5号" },
        { a: "2023年12月6号" },
        { a: "2023年12月7号" },
      ];
      var option = {
        grid: {
          top: "18%",
          left: "6%",
          right: "1%",
          bottom: "10%",
        },
        legend: {
          // itemHeight: this.sz(10),
          // itemWidth: this.sz(10),
          // itemStyle: {
          //   borderColor: "#FA9600",
          // },
          textStyle: {
            color: "#fff",
            // padding: [0, 0, 0, this.sz(15)],
          },
          data: [
            {
              name: "接收",
              icon: "rect",
            },
            {
              name: "发送",
              icon: "rect",
            },
          ],
          // formatter: (e) => {
          //   return "\n" + "\n" + "\n" + "\n" + e;
          // },
          right: 0,
          top: this.sz(20),
        },
        xAxis: {
          axisTick: { show: false },
          nameLocation: "start",
          type: "category",
          data: ["10:00", "11:00", "13:00", "15:00", "17:00"],
        },
        yAxis: [
          {
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.4)",
              },
            },
            axisLabel: {
              formatter: "{value}mbs",
            },
          },
        ],
        series: [
          {
            showSymbol: false,
            name: "接收",
            type: "line",
            data: [150, 230, 166, 218, 135],
            itemStyle: {
              color: "#FF9A3E",
            },
          },
          {
            showSymbol: false,
            name: "发送",
            type: "line",
            data: [34, 77, 224, 66, 44],
            itemStyle: {
              color: "#C6502D",
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