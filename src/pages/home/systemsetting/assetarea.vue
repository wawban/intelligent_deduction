<!-- 漏洞知识库 -->
<template>
  <div class="assetarea">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">系统设置/</div>
      <div class="yys">资产区域管理</div>
    </div>
    <div class="lbox wbb">
      <div class="toupai">
        <div class="tesbt">
          <div class="guns"></div>
          <div class="wenz">资产区域管理</div>
        </div>

        <el-button
          class="buttonsy"
          size="mini"
          icon="el-icon-plus"
          @click="dialogVisible = true"
          >添加</el-button
        >
      </div>

      <!-- 列表 -->
      <div style="padding-top: 30rem">
        <!-- 表格 -->
        <el-table
          class="tablebottom"
          :data="tableData"
          style="width: 100%"
          :header-cell-style="{
            backgroundColor: '#292929',
            color: '#fff',
            borderColor: '#292929',
            fontSize: '14rem',
            padding: '16rem 0',
          }"
          :cell-style="{
            borderColor: 'rgba(255, 255, 255, 0.3)',
            backgroundColor: '#161616',
            color: '#fff',
            fontSize: '14rem',
            padding: '16rem 0',
          }"
        >
          <el-table-column
            align="center"
            show-overflow-tooltip
            v-for="(item, index) in vararr"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
          >
            <template slot-scope="scope">
              <!-- 操作 -->
              <div v-if="item.label == '操作'">
                <img
                  @click="gotu(scope.row)"
                  style="height: 22rem; cursor: pointer"
                  src="../img/cx.png"
                  alt=""
                />
                <img
                  @click="drawer = true"
                  style="height: 22rem; cursor: pointer"
                  src="../img/bj.png"
                  alt=""
                />
              </div>
              <span v-else>{{ scope.row[scope.column.property] }}</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pagefy" style="padding-top: 20px; padding-bottom: 20px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="[10, 20]"
            :page-size="page.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 添加 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="dialogVisible"
        width="520rem"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div
          style="
            color: #fff;
            text-align: center;
            font-size: 18rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 16rem;
          "
        >
          添加
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="124rem"
            class="demo-ruleForm"
          >
            <el-form-item label="区域名称：" prop="qy">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.qy"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="安全重要性：" prop="aq">
              <el-input
                placeholder="请输入1-10"
                class="inpustyle"
                v-model="ruleForm.aq"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="互联网联通性：" prop="hl">
              <el-radio-group v-model="ruleForm.hl" class="dxradio">
                <el-radio :label="1">备选项</el-radio>
                <el-radio :label="2">备选项</el-radio>
                <el-radio :label="3">备选项</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="区域资产组：">
              <el-input
                type="textarea"
                placeholder="请输入"
                class="inputtextarea"
                v-model="ruleForm.zc"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div style="text-align: center">
          <el-button class="buttonsy" size="mini" style="margin-right: 30rem"
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30rem"
            @click="dialogVisible = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 树形抽屉 -->
    <el-drawer
      class="drawerstyle"
      :visible.sync="drawer"
      direction="rtl"
      :show-close="false"
      :wrapperClosable="false"
      size="350rem"
    >
      <div class="ctishu">
        <div class="tesbt">
          <div class="guns"></div>
          <div class="wenz">资产组架构</div>
        </div>
        <div class="testree">
          <div style="padding-bottom: 12rem">
            <el-checkbox
              class="fuxuan"
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
              >全选/全不选</el-checkbox
            >
          </div>
          <!-- <el-tree
            default-expand-all
            node-key="label"
            :data="data"
            show-checkbox
            :default-checked-keys="xztreearr"
            ref="tree"
            @check="oncheck"
          >
          </el-tree> -->
          <el-tree
            :data="data"
            :expand-on-click-node="false"
            node-key="id"
            default-expand-all
          >
            <span
              style="
                padding-right: 12rem;
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
              "
              slot-scope="{ node, data }"
            >
              <!-- <span style="font-size: 16rem; display: flex; align-items: center" -->
                <el-checkbox
              class="fuxuan"
              v-model="data.type"
              @change="treeChange($event,data.id)"
              >
              {{ node.label }}</el-checkbox
            >
            <!-- <el-checkbox
              class="fuxuan"
              v-model="data.type"
              @change="()=>{
                data.type=!data.type
              }"
              >
              {{ node.label }}</el-checkbox
            > -->
              <!-- <span style="font-size: 16rem;"
                >{{ node.label }}
              </span> -->
              <!-- <div>
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
              </div> -->
            </span>
          </el-tree>




















































          
          <div
            style="
              display: flex;
              justify-content: space-between;
              position: fixed;
              right: 20rem;
              bottom: 20rem;
            "
          >
            <el-button class="buttonsy" size="mini" style="margin-right: 30rem"
              >反选</el-button
            >
            <el-button class="buttonsy" size="mini" style="margin-right: 30rem"
              >确认</el-button
            >
            <el-button
              class="buttonsy"
              size="mini"
              style="margin-left: 30rem"
              @click="drawer = false"
              >取消</el-button
            >
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      // dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      arrtree:[11,12,15,17,18],//请求的选中id(选中id集合)
      treeall: [], //树形递归出全部数据（树形id）
      isIndeterminate: false, //全选/全不选   样式控制
      checkAll: false, //全选/全不选  值   样式控制  true   false

      //   ff-k  ft-q  tt-b tf-b
      // xztreearr: ["A地区"], //树形选中数据-默认
      // 树形数据
      data: [
        {
          label: "A地区",
          id:11,
          // type: true,
          children: [
            {
              label: "地区1",
              id:12,
              // type: true,
            },
            {
              label: "地区2",
              id:13
              // type: true,
            },
            {
              label: "地区3",
              id:14,
              // type: true,
              children: [
                {
                  label: "地区11",
                  id:15
                  // type: true,
                },
                {
                  label: "地区22",
                  id:16
                  // type: true,
                },
                {
                  label: "地区33",
                  id:17
                  // type: true,
                },
              ],
            },
          ],
        },
        {
          label: "服务器组",
          // type: true,
          id:18,
          children: [
            {
              label: "服务器组1",
              // type: true,
              id:19
            },
            {
              label: "服务器组2",
              // type: true,
              id:20
            },
            {
              label: "服务器组3",
              // type: true,
              id:21
            },
          ],
        },
      ],
      drawer: false, //抽屉弹窗
      //   ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      dialogVisible: false, //添加弹窗
      // 添加表单数据
      ruleForm: {
        qy: "",
        aq: "",
        hl: 1,
        zc: "",
      },
      // 添加表单验证
      rules: {
        qy: [{ required: true, message: "请输入区域名称", trigger: "blur" }],
        aq: [{ required: true, message: "请输入安全重要性", trigger: "blur" }],
        hl: [
          { required: true, message: "请选择互联网联通性", trigger: "change" },
        ],
        zc: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      // -----------------------------------------------------------------关联查询组件下
      // 表格数据
      tableData: [
        {
          a: "系统服务器",
          b: "11",
          c: "是",
          d: "人力资源部",
          e: "系统内置",
        },
        {
          a: "系统服务器",
          b: "11",
          c: "是",
          d: "人力资源部",
          e: "系统内置",
        },
        {
          a: "系统服务器",
          b: "11",
          c: "是",
          d: "人力资源部",
          e: "系统内置",
        },
        {
          a: "系统服务器",
          b: "11",
          c: "是",
          d: "人力资源部",
          e: "系统内置",
        },
        {
          a: "系统服务器",
          b: "11",
          c: "是",
          d: "人力资源部",
          e: "系统内置",
        },
        {
          a: "系统服务器",
          b: "11",
          c: "是",
          d: "人力资源部",
          e: "系统内置",
        },
        {
          a: "系统服务器",
          b: "11",
          c: "是",
          d: "人力资源部",
          e: "系统内置",
        },
        {
          a: "系统服务器",
          b: "11",
          c: "是",
          d: "人力资源部",
          e: "系统内置",
        },
        {
          a: "系统服务器",
          b: "11",
          c: "是",
          d: "人力资源部",
          e: "系统内置",
        },
        {
          a: "系统服务器",
          b: "11",
          c: "是",
          d: "人力资源部",
          e: "系统内置",
        },
      ],
      // 表头改变数据
      vararr: [
        {
          prop: "a",
          label: "区域名称",
          type: true,
        },
        {
          prop: "b",
          label: "安全重要性",
          type: true,
        },
        {
          prop: "c",
          label: "互联网连通性",
          type: true,
        },
        {
          prop: "d",
          label: "区域资产组",
          type: true,
        },
        {
          prop: "e",
          label: "区域类别",
          type: true,
        },
        {
          prop: "h",
          label: "操作",
          type: true,
        },
      ],
      // 分页
      page: {
        current: 1,
        size: 10,
        total: 44,
      },
    };
  },
  mounted() {
    // 树形处理，是否全选状态改变
    this.qianz();
  },
  methods: {
    // dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    // 树形  全选/全不选
    // handleCheckAllChange(val) {
    //   //   this.checkedCities = val ? cityOptions : [];
    //   //   this.isIndeterminate = false;
    //   if (val) {
    //     this.$refs.tree.setCheckedKeys(this.treeall);
    //   } else {
    //     this.$refs.tree.setCheckedKeys([]);
    //   }
    //   // if (this.treeall.length == 11) {
    //   //   // 全选
    //   //   this.isIndeterminate = false;
    //   //   this.checkAll = true;
    //   // } else if (this.treeall.length == 0) {
    //   //   // 全空
    //   //   this.isIndeterminate = false;
    //   //   this.checkAll = false;
    //   // } else {
    //   //   // 半选
    //   //   this.isIndeterminate = true;
    //   //   this.checkAll = false;
    //   // }
    // },
    // // 树形清空
    // resetChecked() {
    //   this.$refs.tree.setCheckedKeys([]);
    // },
    // // 树形全选
    // setCheckedKeys() {
    //   this.$refs.tree.setCheckedKeys([3]);
    // },
    // xxx() {
    //   //   console.log(this.xztreearr);
    //   console.log(this.$refs.tree.getCheckedNodes()); //获取选中数据，不含父级
    // },
    // // 树形选择数据处理
    // oncheck(res, req) {
    //   console.log(res);
    //   console.log(req);
    //   console.log(this.$refs.tree.getCheckedNodes());
    //   //   this.smbdatazd = [...res, ...req.halfCheckedKeys]
    // },
    // 初始化树，前置获取数据后的处理
    qianz() {
      // var arrtree=[11,15,17]//请求的选中id
      // var treeall = []
      for (var i = 0; i < this.data.length; i++) {
        if(this.arrtree.indexOf(this.data[i].id) !== -1){
          this.$set(this.data[i],'type',true)
        }else{
          this.$set(this.data[i],'type',false)
        }
        this.treeall.push(this.data[i].id);
        // if (this.data[i].label == e.label) {
        //   this.data[i].type = !this.data[i].type;
        //   // console.log(this.data[i].label);
        //   this.treekry = this.data[i].label;
        //   return;
        // }
        if (this.data[i].children && this.data[i].children.length !== 0) {
          this.dg(this.data[i].children);
        }
      }
    //   // //   alert(this.treeall.length);
      if (this.treeall.length == this.arrtree.length) {
        // 全选
        this.isIndeterminate = false;
        this.checkAll = true;
      } else if (this.treeall.length == 0) {
        // 全空
        this.isIndeterminate = false;
        this.checkAll = false;
      } else {
        // 半选
        this.isIndeterminate = true;
        this.checkAll = false;
      }
    //   this.isIndeterminate = true;
    //   this.checkAll = false;
    },
    // 递归树
    dg(arr) {
      for (var i = 0; i < arr.length; i++) {
        if(this.arrtree.indexOf(arr[i].id) !== -1){
          // arr[i].type = true
          this.$set(arr[i],'type',true)
        }else{
          // arr[i].type = false
          this.$set(arr[i],'type',false)
        }
        // if()
        this.treeall.push(arr[i].id);
    //     // if (arr[i].label == e) {
    //     //   arr[i].type = !arr[i].type;
    //     //   this.treekry = arr[i].label;
    //     //   return;
    //     // }
        if (arr[i].children && arr[i].children.length !== 0) {
          this.dg(arr[i].children);
        }
    //     // console.log(arr[i].label);
      }
    },
    // 树形选中与取消
    treeChange(type,e){
      // 数据替换
      if(type){
        this.arrtree.push(e)
      }else{
        var i = this.arrtree.indexOf(e)
        this.arrtree.splice(i,1)
      }
      console.log(this.arrtree)
      console.log(this.data)
// // 树形回显更新
//       for (var i = 0; i < this.data.length; i++) {
//         if (this.data[i].id == e) {
//           // alert(e)
//           if(type){
//             this.$nextTick(() => {
//               this.data[i].type = true
//         });
//             // this.data[i].type = true
//           }else{
//             this.$nextTick(() => {
//               this.data[i].type = false
//         });
//             // this.data[i].type = false
//           }
//           // alert(this.data[i].type)
//           return;
//         }
//         if (this.data[i].children && this.data[i].children.length !== 0) {
//           this.typedg(this.data[i].children,e,type);
//         }
//       }
    },
    // // 更新是否选择递归
    // typedg(arr, e,type) {
    //   for (var i = 0; i < arr.length; i++) {
    //     if (arr[i].id == e) {
    //       // alert(e)
    //       if(type){
    //         arr[i].type = true
    //       }else{
    //         arr[i].type = false
    //       }
    //       // arr[i].type = !arr[i].type;
    //       // this.treekry = arr[i].label;
    //       return;
    //     }
    //     if (arr[i].children && arr[i].children.length !== 0) {
    //       this.typedg(arr[i].children, e);
    //     }
    //     // console.log(arr[i].label);
    //   }
    // },

    // dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    // ----------------------------关联查询组件下
    // 表格头
    fields(e, i) {
      if (e == "1") {
        this.btarr[i].type = false;
      } else {
        this.btarr[i].type = true;
      }
      localStorage.setItem(
        "localpersonnelmanagement",
        JSON.stringify(this.btarr)
      );
    },
    // ---------------------------分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      alert(val);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      alert(val);
    },
    // ---------------------------跳转详情
    gotu(e) {
      // console.log(e)
      this.$router.push("/systemsetting/assetregiondetails");
    },
  },
};
</script>
    <style lang="less" scoped>
.ctishu {
  padding: 20rem;

  // 树形样式
  .testree {
    // 复选样式
//   .fuxuan {
//     /deep/.el-checkbox__label {
//         color: #fff;
//     }

//     /deep/.el-checkbox__input.is-checked+.el-checkbox__label {
//         color: #fff;
//     }
// }
    padding-top: 20rem;
    /deep/.el-tree {
      background: none;
    }
    /deep/.el-tree-node__content {
      color: #fff !important;
    }

    /deep/.el-tree-node__content:hover {
      background: none;
    }
    /deep/.el-tree-node:focus > .el-tree-node__content {
      background: none;
    }
    /deep/.is-checked > .el-checkbox__inner {
      background: #fb8619;
      border-color: #fa9600;
    }
    /deep/ .is-indeterminate > .el-checkbox__inner {
      background: #fb8619;
      border-color: #fa9600;
    }
  }
  .tesbt {
    display: flex;
    line-height: 18rem;
    padding-bottom: 20rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    .guns {
      height: 18rem;
      width: 4rem;
      background: #fa9600;
      margin-right: 8rem;
    }

    .wenz {
      font-size: 18rem;
      font-weight: 500;
    }
  }
}
.assetarea {
  .tandialog {
    /deep/.el-dialog {
      background: none !important;
    }
    /deep/.el-dialog__header {
      // padding: 0;
      display: none;
    }
    /deep/.el-dialog__body {
      // background: #676767;
      background: rgba(103, 103, 103, 0.2);
      backdrop-filter: blur(13rem);
      // background: #676767;
      border-radius: 5rem;
      border: 1rem solid;
      border-image: linear-gradient(270deg, #fb8619 0%, #fcba48 100%) 1;
    }
    // -------------------------------------------------------
  }
  .lbox {
    height: 809rem;
    padding: 20rem 30rem;
    .toupai {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 18rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      .tesbt {
        display: flex;
        line-height: 18rem;

        .guns {
          height: 18rem;
          width: 4rem;
          background: #fa9600;
          margin-right: 8rem;
        }

        .wenz {
          font-size: 18rem;
          font-weight: 500;
        }
      }
    }
    // .biaotab {
    //   .styg {
    //     color: #e53a40;
    //   }
    //   .styz {
    //     color: #fa9600;
    //   }
    //   .styd {
    //     color: #e53a40;
    //   }
    // }
  }
}
</style>