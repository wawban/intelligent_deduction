<template>
  <div class="addquest">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">任务管理/推演任务/</div>
      <div class="yys">创建任务</div>
    </div>
    <div class="box wbb">
      <div class="zsbtbox">
        <div class="guns"></div>
        <div class="wenz">创建任务</div>
      </div>
      <!-- 正题 -->
      <div class="zhengti">
        <div :class="type == 1 ? 'bz1k' : 'bz1g'">
          <div class="xhuhao">1.</div>
          <div class="textr">任务基础设置</div>
        </div>
        <div :class="type == 2 ? 'bz2k' : 'bz2g'">
          <div class="xhuhao">2.</div>
          <div class="textr">推演目标设置</div>
        </div>
        <div :class="type == 3 ? 'bz2k' : 'bz2g'">
          <div class="xhuhao">3.</div>
          <div class="textr">高级设置</div>
        </div>
      </div>
      <div class="jducontainer">
        <!-- 任务基础设置 -->
        <div v-if="type == 1">
          <div class="formstyle">
            <el-form
              :model="ruleForm"
              label-width="100rem"
              class="demo-ruleForm"
            >
              <el-form-item label="推演类型：" prop="radio">
                <el-radio-group v-model="ruleForm.radio" class="dxradio">
                  <el-radio :label="3">常规推演</el-radio>
                  <el-radio :label="6">模拟推演</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="任务名称：" prop="radio"
                ><el-input
                  placeholder="请输入"
                  class="inpustyle"
                  v-model="ruleForm.mc"
                  size="mini"
                  style="width: 630rem"
                ></el-input>
              </el-form-item>
              <el-form-item label="任务描述：" prop="gd">
                <el-input
                  type="textarea"
                  placeholder="请输入"
                  class="inputtextarea"
                  v-model="ruleForm.gd"
                  size="mini"
                  style="width: 630rem"
                ></el-input>
              </el-form-item>
              <el-form-item label="运行模式：" prop="radio">
                <el-radio-group v-model="ruleForm.ms" class="dxradio">
                  <el-radio :label="3">立刻</el-radio>
                  <el-radio :label="6">定时</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div v-if="type == 2">
          <div class="formstyle">
            <el-form
              :model="ruleForm"
              label-width="100rem"
              class="demo-ruleForm"
            >
              <el-form-item label="推演目标：" prop="radio">
                <el-radio-group v-model="ruleForm.ms" class="dxradio">
                  <el-radio :label="3">IP/IP段</el-radio>
                  <el-radio :label="6">资产组</el-radio>
                </el-radio-group>
              </el-form-item>
              <div v-if="ruleForm.ms == 3">
                <el-form-item label="起点：" prop="gd">
                  <el-input
                    type="textarea"
                    class="inputtextarea"
                    size="mini"
                    style="width: 630rem"
                    :autosize="{ minRows: 6, maxRows: 6 }"
                  ></el-input>
                </el-form-item>
                <el-form-item label="终点：" prop="gd">
                  <el-input
                    type="textarea"
                    class="inputtextarea"
                    size="mini"
                    style="width: 630rem"
                    :autosize="{ minRows: 6, maxRows: 6 }"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
        <div v-if="type == 3">
          <div class="formstyle">
            <el-form
              :model="ruleForm"
              label-width="100rem"
              class="demo-ruleForm"
            >
              <el-form-item label="推演算法：" prop="radio">
                <el-select
                  class="zhessless"
                  size="mini"
                  v-model="ruleForm.bqmc"
                  placeholder="请选择"
                  style="width: 340rem"
                  filterable
                  multiple
                >
                  <el-option
                    v-for="item in 4"
                    :key="item"
                    :label="'推演算法' + item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="bottbot">
          <el-button class="buttonsy" size="mini" @click="goto">取消</el-button>
          <el-button
            v-if="type != 1"
            class="tsbuttonsy"
            size="mini"
            @click="gousb"
            >上一步</el-button
          >
          <el-button
            v-if="type != 3"
            class="tsbuttonsy"
            size="mini"
            @click="gouxb"
            >下一步</el-button
          >
          <el-button v-if="type == 3" class="tsbuttonsy" size="mini"
            >完成</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 1, //当前步骤
      // 任务基础设置-表单数据
      ruleForm: {
        ms: 3,
      },
    };
  },
  methods: {
    // 下一步
    gouxb() {
      if (this.type == 1) {
        this.type = 2;
      } else if (this.type == 2) {
        this.type = 3;
      }
    },
    // 上一步
    gousb() {
      if (this.type == 2) {
        this.type = 1;
      } else if (this.type == 3) {
        this.type = 2;
      }
    },
    // 取消返回
    goto() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.addquest {
  .box {
    width: 1824rem;
    height: 809rem;
    padding: 20rem 30rem;
    .zhengti {
      padding-top: 40rem;
      display: flex;
      > div {
        width: 576rem;
        height: 42rem;
        display: flex;
        align-items: center;
        .xhuhao {
          padding-left: 43rem;
          font-size: 30px;
          font-weight: 900;
        }
        .textr {
          padding-left: 140rem;
          font-size: 18px;
          font-weight: bold;
        }
      }
      .bz1k {
        background: url("../img/bz1k.png") no-repeat;
        background-size: 100% 100%;
      }
      .bz1g {
        background: url("../img/bz1g.png") no-repeat;
        background-size: 100% 100%;
      }
      .bz2k {
        background: url("../img/bz2k.png") no-repeat;
        background-size: 100% 100%;
      }
      .bz2g {
        background: url("../img/bz2g.png") no-repeat;
        background-size: 100% 100%;
      }
      //   .bz3k{
      //     background: url('../img/bz3k.png') no-repeat;
      //     background-size: 100% 100%;
      //   }
      //   .bz3g{
      //     background: url('../img/bz3g.png') no-repeat;
      //     background-size: 100% 100%;
      //   }
    }
    .jducontainer {
      padding-top: 40rem;
      // background: red;
      height: 620rem;
      position: relative;
      .bottbot {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        button {
          margin: 0 20rem;
        }
        // 按钮样式
        .tsbuttonsy {
          background: #fa9600 !important;
          color: #fff !important;
          border-color: #fa9600;
        }
      }
    }
  }
}
</style>