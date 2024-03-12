<template>
  <Lines :list="ybwtqs" />
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
// import { color } from "echarts";
export default {
  components: {
    Lines: () => import("@/components/lines"),
  },
  data() {
    return {
      ybwtqs: {}, //隐蔽问题趋势
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    // 初始请求
    getdata() {
      this.dashboardissuestrend(); //隐蔽问题趋势
    },
    // 隐蔽问题趋势
    dashboardissuestrend() {
      dashboard_issuestrend({
        period: this.zq == "2" ? "weekly" : "monthly",
      }).then((res) => {
        this.ybwtqs = res.series;
        console.log("xxxxxxxxxxxxxxxx");
        console.log(this.ybwtqs);
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>