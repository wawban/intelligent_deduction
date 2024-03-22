<template>
  <div class="website gdstyle">
    <div>
      <table border="1" cellspacing="0" width="100%">
        <!--  -->
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
        <!-- 其它类型 -->
        <!-- <tr>
          <td :rowspan="tablelist.qt.arr.length">{{ tablelist.qt.name }}</td>
          <td>{{ tablelist.qt.arr[0].a }}</td>
          <td>{{ tablelist.qt.arr[0].b }}</td>
          <td>
            <el-switch
              class="huandk"
              v-model="tablelist.qt.arr[0].c"
              active-color="#fa960069"
              inactive-color="transparent"
            >
            </el-switch>
          </td>
        </tr>
        <tr v-for="(e, i) in tablelist.qt.arr" :key="i" v-show="i !== 0">
          <td>{{ e.a }}</td>
          <td>{{ e.b }}</td>
          <td>
            <el-switch
              class="huandk"
              v-model="e.c"
              active-color="#fa960069"
              inactive-color="transparent"
            >
            </el-switch>
          </td>
        </tr> -->
        <!-- 服务器管理产品 -->
        <!-- <tr>
          <td :rowspan="tablelist.zc.arr.length">{{ tablelist.zc.name }}</td>
          <td>{{ tablelist.zc.arr[0].a }}</td>
          <td>{{ tablelist.zc.arr[0].b }}</td>
          <td>
            <el-switch
              class="huandk"
              v-model="tablelist.zc.arr[0].c"
              active-color="#fa960069"
              inactive-color="transparent"
            >
            </el-switch>
          </td>
        </tr>
        <tr v-for="(e, i) in tablelist.zc.arr" :key="i" v-show="i !== 0">
          <td>{{ e.a }}</td>
          <td>{{ e.b }}</td>
          <td>
            <el-switch
              class="huandk"
              v-model="e.c"
              active-color="#fa960069"
              inactive-color="transparent"
            >
            </el-switch>
          </td>
        </tr> -->
      </table>
    </div>
  </div>
</template>
<script>
import { governance_tagssite, governance_tagssitetags } from "@/api";
export default {
  data() {
    return {
      tablelist: {
        // qt: {
        //   name: "其它类型",
        //   arr: [{ a: "其它类型", b: "12", c: false }],
        // },
        // zc: {
        //   name: "服务器管理产品",
        //   arr: [
        //     { a: "docker项目管理", b: "23", c: false },
        //     { a: "硬件服务器", b: "8", c: false },
        //     { a: "嵌入式服务器", b: "8", c: false },
        //     { a: "其他服务器产品", b: "8", c: false },
        //     { a: "代理服务器", b: "8", c: false },
        //     { a: "串口服务器", b: "8", c: false },
        //     { a: "Web服务器", b: "8", c: false },
        //     { a: "DNS服务器", b: "8", c: false },
        //     { a: "DNS服务器", b: "8", c: false },
        //     { a: "DNS服务器", b: "8", c: false },
        //     { a: "DNS服务器", b: "8", c: false },
        //     { a: "DNS服务器", b: "8", c: false },
        //     { a: "DNS服务器", b: "8", c: false },
        //     { a: "DNS服务器", b: "8", c: false },
        //   ],
        // },
      },
    };
  },
  mounted() {
    this.governancetagssite();
  },
  methods: {
    funcswi(e, id) {
      governance_tagssitetags({ is_favorite: e }, id).then((res) => {
        this.governancetagssite();
      });
    },
    governancetagssite() {
      governance_tagssite().then((res) => {
        this.tablelist = res;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.website {
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