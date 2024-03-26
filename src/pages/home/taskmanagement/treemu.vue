<template>
  <div class="treerew">
    <div class="container wbb">
      <div v-for="(e, i) in datatree" :key="i">
        <div class="terewenr" style="background: #292929">
          <i
            @click="onstyle(e.id + i, $event)"
            v-if="e.sub_groups && e.sub_groups.length != 0"
            class="el-icon-arrow-right"
          ></i>
          <div
            :class="treekry == e.id ? 'xuanz weizc' : 'weizc'"
            @click="onxuanz(e)"
          >
            {{ e.name }}
          </div>
        </div>
        <!-- 循环二层 -->
        <div
          :class="e.id + i + ' hideen'"
          v-for="(e1, i1) in e.sub_groups"
          :key="i1"
        >
          <!-- 二层内容 -->
          <div class="terewenr" style="background: #161616">
            <i
              @click="onstyle(e1.id + i1, $event)"
              v-if="e1.sub_groups && e1.sub_groups.length != 0"
              class="el-icon-arrow-right"
            ></i>
            <div v-else style="width: 60px"></div>
            <div
              :class="treekry == e1.id ? 'xuanz weizc' : 'weizc'"
              @click="onxuanz(e1)"
              style="padding-left: 20px"
            >
              {{ e1.name }}
            </div>
          </div>
          <!-- 循环三层 -->
          <div
            :class="e1.id + i1 + ' hideen'"
            v-for="(e2, i2) in e1.sub_groups"
            :key="i2"
          >
            <!-- 三层内容 -->
            <div class="terewenr" style="background: #000000">
              <i
                @click="onstyle(e2.id + i, $event)"
                v-if="e2.sub_groups && e2.sub_groups.length != 0"
                class="el-icon-arrow-right"
              ></i>
              <div v-else style="width: 60px"></div>
              <div
                :class="treekry == e2.id ? 'xuanz weizc' : 'weizc'"
                @click="onxuanz(e2)"
                style="padding-left: 40px"
              >
                {{ e2.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 未处理树形数据
    datatree: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 默认选中值
    treekry: {
      type: String,
      default: "",
    },
  },
  methods: {
    // 点击树展开
    onxuanz(e) {
      this.treekry = e.id;
    },
    // 递归树
    dg(arr, e) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == e) {
          arr[i].type = !arr[i].type;
          this.treekry = arr[i].id;
          return;
        }
        if (arr[i].sub_groups && arr[i].sub_groups.length !== 0) {
          this.dg(arr[i].sub_groups, e);
        }
      }
    },
    // 树形点击样式
    onstyle(e, event) {
      if (event.target.className == "el-icon-arrow-right") {
        event.target.className = "el-icon-arrow-down";
      } else {
        event.target.className = "el-icon-arrow-right";
      }
      var arr = document.getElementsByClassName(e);
      if (arr[0].style.display == "none" || !arr[0].style.display) {
        for (var i = 0; i < arr.length; i++) {
          arr[i].style.display = "block";
        }
      } else {
        for (var i = 0; i < arr.length; i++) {
          arr[i].style.display = "none";
        }
      }
    },
  },
};
</script>
    <style lang="less" scoped>
// 划出框（是否本级）
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
.treerew {
  .container {
    //   width: 400px;
    //   height: 500px;
    font-size: 16px;
    .hideen {
      display: none;
    }
    .weizc {
      cursor: pointer;
    }
    .xuanz {
      color: #fa9600;
    }
    .terewenr {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      line-height: 40px;
      display: flex;
      align-items: center;
      position: relative;
    }
    i {
      // padding: 0 22px;
      margin: 0 22px;
      cursor: pointer;
    }
  }
}
</style>