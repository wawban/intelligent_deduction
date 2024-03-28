<template>
  <div :ref="refName" class="gauge_charts"></div>
</template>
<script>
// import { number } from "echarts";
export default {
  props: {
    refName: {
      type: String,
      default: String(Math.floor(Math.random() * 100)) + "lineadd",
    },
    num: {
      type: Number,
      default: () => {
        return 0;
      },
    },
    text: {
      type: String,
      default: "",
    },
  },
  watch: {
    // list() {
    //   alert(8);
    // },
    num: {
      handler(to, form) {
        // this.type = this.$route.meta.type || "";
        // this.name = this.$route.meta.nemr || "";
        // alert(8);
        // alert(this.list.length);
        this.createCharts(this.num);
      },
      // deep: true,
      // immediate: true,
    },
  },
  // mounted() {
  //   this.createCharts();
  // },
  methods: {
    sz(e) {
      // let w = document.documentElement.clientWidth;
      // if (!w) return;
      // let j = 100 * (w / 1920);
      // return e * j;
      let w = document.documentElement.clientWidth;
      if (w <= 1440) {
        let j = w / 1440 / 1.33333333333;
        return e * j;
      } else if (w >= 1920) {
        let j = w / 1920;
        // return e * j * 1.33333333333;
        return e * j;
      }
    },
    createCharts(numd) {
      this.myChart = this.$echarts.init(this.$refs[this.refName]);
      const _this = this;
      var option = {
        // backgroundColor: "#02041B",
        series: [
          {
            type: "gauge",
            radius: "100%", //外圆大小
            startAngle: 220, //外圆闭合度
            endAngle: -40, //外圆闭合度
            axisLine: {
              // 坐标轴线
              roundCap: false,
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [
                    1,
                    "#37393B", //外圆颜色
                  ],
                ],
                width: this.sz(20), //外圆宽度
              },
            },
            splitLine: {
              //分隔线样式
              show: false,
            },
            axisLabel: {
              //刻度标签
              show: false,
            },
            axisTick: {
              //刻度样式
              show: false,
            },
          },

          // 数据
          {
            name: "",
            type: "gauge",
            radius: "100%",
            startAngle: 220,
            endAngle: -45,
            axisLine: {
              show: true,
              lineStyle: {
                width: this.sz(20),
                color: [
                  [
                    // Number(this.num) / 100,
                    numd / 100,
                    "#FF9A3E", // 数值变量
                  ],
                  [1, "rgba(255,255,255,.0)"],
                ],
              },
            },
            axisTick: {
              show: 0,
            },
            splitLine: {
              show: 0,
            },
            axisLabel: {
              show: 0,
            },
            pointer: {
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, 0],
              textStyle: {
                fontSize: this.sz(20),
                color:
                  _this.text == "高"
                    ? "#e53a40"
                    : _this.text == "中"
                    ? "#fa9600"
                    : "#f6d535",
                backgroundColor: "#81520C",
                width: this.sz(48),
                height: this.sz(48),
                borderRadius: this.sz(48),
                padding: 0,
              },
              formatter: function (value) {
                // return `${value}%`;
                return _this.text;
              },
            },
            data: [{}],
          },
        ],
      };
      this.myChart.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
.gauge_charts {
  height: 100%;
}
</style>