<template>
  <div class="treerew">
    <div class="container wbb">
      <!-- 循环一层 -->
      <div v-for="(e, i) in data" :key="i">
        <!-- 一层内容 -->
        <div class="terewenr" style="background: #292929">
          <i
            @click="style('test' + i, $event)"
            v-if="e.children && e.children.length != 0"
            class="el-icon-arrow-right"
          ></i>
          <div
            :class="treekry == e.label ? 'xuanz weizc' : 'weizc'"
            @click="onxuanz(e)"
          >
            {{ e.label }}
          </div>
        </div>
        <!-- 循环二层 -->
        <div
          :class="'test' + i + ' wereeer'"
          v-for="(e1, i1) in e.children"
          :key="i1"
        >
          <!-- 二层内容 -->
          <div class="terewenr" style="background: #161616">
            <div
              :class="treekry == e1.label ? 'xuanz weizc' : 'weizc'"
              @click="onxuanz(e1)"
              style="padding-left: 20rem"
            >
              {{ e1.label }}
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
      // 默认选中值
      treekry: "地区2",
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
            }
          ],
        },
      ],
    };
  },
  methods: {
    // 树形点击样式
    style(e, event) {
      if (event.target.className == "el-icon-arrow-right") {
        event.target.className = "el-icon-arrow-down";
      } else {
        event.target.className = "el-icon-arrow-right";
      }
      var arr = document.getElementsByClassName(e);
      alert(arr[0].style.display)
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
    // 点击树
    onxuanz(e) {
      this.treekry = e.label;
    },
  },
};
</script>
  <style lang="less" scoped>
.treerew {

.wereeer{
  display: none;
}

  .container {
    width: 400px;
    height: 500px;
    font-size: 16rem;
    .weizc {
      cursor: pointer;
    }
    .xuanz {
      color: #fa9600;
    }
    .terewenr {
      border-bottom: 1rem solid rgba(255, 255, 255, 0.2);
      line-height: 40rem;
      display: flex;
      align-items: center;
      position: relative;
      .sandina {
        position: absolute;
        right: 16rem;
      }
    }
    i {
      padding: 0 22rem;
    }
  }
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
}
</style>