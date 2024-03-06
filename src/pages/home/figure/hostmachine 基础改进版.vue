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
        <div class="terewenr" style="background: #292929;">
          <i @click="style('test'+i,$event)" v-if="e.children && e.children.length != 0" class="el-icon-arrow-right"></i>
            <div>{{ e.label }}</div>
            <div class="sandina">
              <el-popover placement="right" trigger="hover">
                <div class="treekub">
                  <div @click="qiehuan(e)">
                    {{ e.type ? "只看本级" : "查看本级和下级" }}
                  </div>
                </div>
                <div slot="reference">
                  <img style="height: 16rem" src="../img/sd.png" alt="" />
                </div>
              </el-popover>
            </div>
        </div>
        <!-- 循环二层 -->
        <div :class="'test'+i" v-for="(e1, i1) in e.children" :key="i1">
          <!-- 二层内容 -->
          <div class="terewenr" style="background: #161616;">
            <i @click="style('test1'+i,$event)" v-if="e1.children && e1.children.length != 0" class="el-icon-arrow-right"></i>
            <div v-else style="width: 60rem;"></div>
            <div style="padding-left: 20rem;">{{ e1.label }}</div>
            <div class="sandina">
              <el-popover placement="right" trigger="hover">
                <div class="treekub">
                  <div @click="qiehuan(e1)">
                    {{ e1.type ? "只看本级" : "查看本级和下级" }}
                  </div>
                </div>
                <div slot="reference">
                  <img style="height: 16rem" src="../img/sd.png" alt="" />
                </div>
              </el-popover>
            </div>
          </div>
          <!-- 循环三层 -->
          <div :class="'test1'+i" v-for="(e2, i2) in e1.children" :key="i2">
            <!-- 三层内容 -->
            <div class="terewenr" style="background: #000000;">
              <i @click="style('test2'+i,$event)" v-if="e2.children && e2.children.length != 0" class="el-icon-arrow-right"></i>
              <div v-else style="width: 60rem;"></div>
              <div style="padding-left: 40rem;">{{ e2.label }}</div>
              <div class="sandina">
                <el-popover placement="right" trigger="hover">
                  <div class="treekub">
                    <div @click="qiehuan(e2)">
                      {{ e2.type ? "只看本级" : "查看本级和下级" }}
                    </div>
                  </div>
                  <div slot="reference">
                    <img style="height: 16rem" src="../img/sd.png" alt="" />
                  </div>
                </el-popover>
              </div>
            </div>
            <!-- 循环四层 -->
            <div :class="'test2'+i" v-for="(e3, i3) in e2.children" :key="i3">
              <!-- 四层内容 -->
              <div class="terewenr" style="">{{ e3.label }}</div>
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
          type: false,
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
        {
          label: "一级 2",
          type: true,
          children: [
            {
              label: "二级 2-1",
              type: true,
              children: [
                {
                  label: "三级 2-1-1",
                  type: true,
                },
              ],
            },
            {
              label: "二级 2-2",
              type: true,
              children: [
                {
                  label: "三级 2-2-1",
                  type: true,
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          type: true,
          children: [
            {
              label: "二级 3-1",
              type: true,
              children: [
                {
                  label: "三级 3-1-1",
                  type: true,
                },
              ],
            },
            {
              label: "二级 3-2",
              type: true,
              children: [
                {
                  label: "三级 3-2-1",
                  type: true,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 树形点击样式
    style(e,event){
      // console.log(event.target.className   el-icon-arrow-right)
      if(event.target.className == 'el-icon-arrow-right'){
        event.target.className = 'el-icon-arrow-down'
      }else{
        event.target.className = 'el-icon-arrow-right'
      }
      var arr = document.getElementsByClassName(e)
      if(arr[0].style.display == 'none'){
        for(var i=0;i<arr.length;i++){
        arr[i].style.display = 'block'
      }
      }else{
        for(var i=0;i<arr.length;i++){
        arr[i].style.display = 'none'
      }
      }
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
  font-size: 16rem;
  .terewenr{
    border-bottom: 1rem solid rgba(255, 255, 255, 0.2);
    line-height: 40rem;
    display: flex;
    align-items: center;
    position: relative;
    .sandina{
      position: absolute;
      right: 16rem;
    }
  }
  i{
    padding: 0 22rem;
  }
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