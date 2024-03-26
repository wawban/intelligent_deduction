<template>
  <div class="hosttag gdstyle">
    <div>
      <table border="1" cellspacing="0" width="100%">
        <!--  -->
        <tr class="syetop">
          <td>标签类型</td>
          <td>标签名称</td>
          <td>应用资产数</td>
          <td>设为常用标签</td>
        </tr>
        <!-- 其它类型 -->
        <tr>
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
        </tr>
        <!-- 存储设备 -->
        <tr>
          <td :rowspan="tablelist.sb.arr.length">{{ tablelist.sb.name }}</td>
          <td>{{ tablelist.sb.arr[0].a }}</td>
          <td>{{ tablelist.sb.arr[0].b }}</td>
          <td>
            <el-switch
              class="huandk"
              v-model="tablelist.sb.arr[0].c"
              active-color="#fa960069"
              inactive-color="transparent"
            >
            </el-switch>
          </td>
        </tr>
        <tr v-for="(e, i) in tablelist.sb.arr" :key="i" v-show="i !== 0">
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
        </tr>
        <!-- 服务器设备 -->
        <tr>
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
        </tr>
        <!-- 办公设备 -->
        <tr>
          <td :rowspan="tablelist.bg.arr.length">{{ tablelist.bg.name }}</td>
          <td>{{ tablelist.bg.arr[0].a }}</td>
          <td>{{ tablelist.bg.arr[0].b }}</td>
          <td>
            <el-switch
              class="huandk"
              v-model="tablelist.bg.arr[0].c"
              active-color="#fa960069"
              inactive-color="transparent"
            >
            </el-switch>
          </td>
        </tr>
        <tr v-for="(e, i) in tablelist.bg.arr" :key="i" v-show="i !== 0">
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
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import {
  // governance_groups,
  // governance_hosts,
  // governance_meta,
  governance_tagshosts,
  // governance_tagscustom,
  // governance_tagscustomcj,
  // governance_metatags,
} from "@/api";
export default {
  data() {
    return {
      tablelist: {
        qt: {
          name: "其它类型",
          arr: [{ a: "其它类型", b: "12", c: false }],
        },
        sb: {
          name: "存储设备",
          arr: [
            { a: "存储设备", b: "23", c: true },
            { a: "NAS", b: "8", c: false },
          ],
        },
        zc: {
          name: "服务器设备",
          arr: [
            { a: "负载均衡", b: "23", c: false },
            { a: "硬件服务器", b: "8", c: false },
            { a: "嵌入式服务器", b: "8", c: false },
            { a: "其他服务器产品", b: "8", c: false },
            { a: "代理服务器", b: "8", c: false },
            { a: "串口服务器", b: "8", c: false },
            { a: "Web服务器", b: "8", c: false },
            { a: "DNS服务器", b: "8", c: false },
          ],
        },
        bg: {
          name: "办公设备",
          arr: [
            { a: "传真", b: "23", c: false },
            { a: "扫描仪", b: "8", c: false },
            { a: "打印服务器", b: "8", c: false },
            { a: "打印机或复印机", b: "8", c: false },
          ],
        },
      },
    };
  },
  mounted() {
    this.governancetagshosts();
  },
  methods: {
    governancetagshosts() {
      governance_tagshosts().then((res) => {
        // res.map((item) => {
        //   item.tags.map((e) => {
        //     if (e.is_favorite) {
        //       if (idarr.indexOf(e.id) == -1) {
        //         this.cy.push(e);
        //       }
        //     } else {
        //       if (idarr.indexOf(e.id) == -1) {
        //         this.yz.push(e);
        //       }
        //     }
        //   });
        // });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.hosttag {
  padding-top: 30px;
  height: 720px;
  overflow: auto;
  > div {
    tr {
      td {
        line-height: 39px;
        text-align: center;
        font-size: 16px;
        .huandk {
          /deep/.el-switch__core {
            border: 1px solid #aaaaaa !important;
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