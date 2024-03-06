<!-- 主机资产 -->
<!-- icon-class="el-icon-arrow-right" -->
<template>
  <div class="hostmachine">
    <div class="left wbb">
      <div class="treestyle">
        <el-tree
          :data="data"
          :expand-on-click-node="false"
          :current-node-key="treekry"
          node-key="label"
          default-expand-all
          icon-class="el-icon-arrow-right"
        >
          <span
            style="
              padding-right: 12rem;
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: space-between;
              /* background: red; */
            "
            slot-scope="{ node, data }"
          >
            <span style="font-size: 16rem; display: flex; align-items: center"
              >{{ node.label }}
            </span>
            <div>
              <el-popover placement="right" trigger="hover">
                <div class="treekub">
                  <div @click="qiehuan(data)">
                    {{ data.type ? "只看本级" : "查看本级和下级" }}
                  </div>
                </div>
                <div slot="reference">
                  <img style="height: 14rem" src="../img/sd.png" alt="" />
                </div>
              </el-popover>
            </div>
          </span>
        </el-tree>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <div class="xxx wbb">
      <!-- 循环一层 -->
      <div v-for="(e, i) in data" :key="i">
        <!-- 一层内容 -->
        <div><i @click="style('test'+i)" v-if="e.children && e.children.length != 0" class="el-icon-arrow-right"></i><span v-else style="background: red;width: 12rem;display: inline-block;"></span>{{ e.label }}</div>
        <!-- 循环二层 -->
        <div style="padding-left: 12rem;" :class="'test'+i" v-for="(e1, i1) in e.children" :key="i1">
          <!-- 二层内容 -->
          <div><i v-if="e1.children && e1.children.length != 0" class="el-icon-arrow-right"></i><span v-else style="background: red;width: 12rem;display: inline-block;"></span>{{ e1.label }}</div>
          <!-- 循环三层 -->
          <div style="padding-left: 12rem;" v-for="(e2, i2) in e1.children" :key="i2">
            <!-- 三层内容 -->
            <div><i v-if="e2.children && e2.children.length != 0" class="el-icon-arrow-right"></i><span v-else style="background: red;width: 12rem;display: inline-block;"></span>{{ e2.label }}</div>
            <!-- 循环四层 -->
            <div style="padding-left: 12rem;" v-for="(e3, i3) in e2.children" :key="i3">
              <!-- 四层内容 -->
              <div><i v-if="e3.children && e3.children.length != 0" class="el-icon-arrow-right"></i><span v-else style="background: red;width: 12rem;display: inline-block;"></span>{{ e3.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      t1:true,
      // --------------------------------------------------------------------------------------
      // 默认选中值
      treekry: "地区3",
      // 树形数据
      data: [
        {
          label: "A地区",
          type: true,
          children: [
            {
              label: "地区1",
              type: true,
            },
            {
              label: "地区2",
              type: true,
            },
            {
              label: "地区3",
              type: true,
              children: [
                {
                  label: "地区11",
                  type: true,
                },
                {
                  label: "地区22",
                  type: true,
                },
                {
                  label: "地区33",
                  type: true,
                },
              ],
            },
          ],
        },
        {
          label: "服务器组",
          type: true,
          children: [
            {
              label: "服务器组1",
              type: true,
            },
            {
              label: "服务器组2",
              type: true,
            },
            {
              label: "服务器组3",
              type: true,
            },
          ],
        },
        // {
        //   label: "一级 2",
        //   type: true,
        //   children: [
        //     {
        //       label: "二级 2-1",
        //       type: true,
        //       children: [
        //         {
        //           label: "三级 2-1-1",
        //           type: true,
        //         },
        //       ],
        //     },
        //     {
        //       label: "二级 2-2",
        //       type: true,
        //       children: [
        //         {
        //           label: "三级 2-2-1",
        //           type: true,
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   label: "一级 3",
        //   type: true,
        //   children: [
        //     {
        //       label: "二级 3-1",
        //       type: true,
        //       children: [
        //         {
        //           label: "三级 3-1-1",
        //           type: true,
        //         },
        //       ],
        //     },
        //     {
        //       label: "二级 3-2",
        //       type: true,
        //       children: [
        //         {
        //           label: "三级 3-2-1",
        //           type: true,
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    style(e){
      var arr = document.getElementsByClassName(e)
      // alert(arr[0].style.display)
      if(arr[0].style.display == 'none'){
        for(var i=0;i<arr.length;i++){
        arr[i].style.display = 'block'
      }
      }else{
        for(var i=0;i<arr.length;i++){
        arr[i].style.display = 'none'
      }

      }
      
      // console.log(document.getElementsByClassName(e)[0])
    },
    // 切换本级与下级
    qiehuan(e) {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].label == e.label) {
          this.data[i].type = !this.data[i].type;
          this.treekry = this.data[i].label;
          return;
        }
        if (this.data[i].children && this.data[i].children.length !== 0) {
          this.dg(this.data[i].children, e.label);
        }
      }
    },
    // 递归树
    dg(arr, e) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].label == e) {
          arr[i].type = !arr[i].type;
          this.treekry = arr[i].label;
          return;
        }
        if (arr[i].children && arr[i].children.length !== 0) {
          this.dg(arr[i].children, e);
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
.xxx {
  width: 400px;
  height: 500px;
  // display: block;
}
.treekub {
  > div {
    text-align: center;
    cursor: pointer;
    color: #fff;
  }
  > div:hover {
    color: #fa9600;
  }
  .hovys {
    color: #fa9600;
  }
}
.hostmachine {
  .container {
    .left {
      width: 298rem;
      .treestyle {
        padding-top: 17rem;
      }
    }
  }
}
</style>