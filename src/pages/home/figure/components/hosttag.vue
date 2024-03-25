<template>
  <div class="hosttag gdstyle">
    <div>
      <table border="1" cellspacing="0" width="100%">
        <tr class="syetop">
          <td>标签类型</td>
          <td>标签名称</td>
          <td>应用资产数</td>
          <td>设为常用标签</td>
        </tr>
        <tbody v-for="(e, i) in tablelist" :key="i">
          <tr v-for="(item, index) in e.tags" :key="index">
            <td :rowspan="e.tags.length" v-if="index == 0">{{ e.category }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.count_assets }}</td>
            <td>
              <el-switch
                class="huandk"
                v-model="item.is_favorite"
                active-color="#fa960069"
                inactive-color="transparent"
                @change="funcswi($event, item.id)"
              >
              </el-switch>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { governance_tagshosts, governance_tagshosttags } from "@/api";
export default {
  data() {
    return {
      tablelist: {},
    };
  },
  mounted() {
    this.governancetagshosts();
  },
  methods: {
    funcswi(e, id) {
      governance_tagshosttags({ is_favorite: e }, id).then((res) => {
        this.governancetagshosts();
      });
    },
    governancetagshosts() {
      governance_tagshosts().then((res) => {
        this.tablelist = res;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.hosttag {
  padding-top: 30rem;
  height: 720rem;
  overflow: auto;
  > div {
    tr {
      td {
        line-height: 39rem;
        text-align: center;
        font-size: 16rem;
        .huandk {
          /deep/.el-switch__core {
            border: 1rem solid #aaaaaa !important;
          }
        }
      }
    }
    .syetop {
      td {
        color: #aaa;
      }
    }
  }
}
</style>