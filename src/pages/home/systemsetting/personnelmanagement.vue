<!-- 漏洞知识库 -->
<template>
  <div class="personnelmanagement">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">系统设置/</div>
      <div class="yys">人员管理</div>
    </div>
    <div class="lbox wbb">
      <div class="zsbtbox">
        <div class="guns"></div>
        <div class="wenz">人员管理</div>
      </div>
      <!-- 查询组件 -->
      <div class="zheestoub">
        <div>
          <el-button
            class="buttonsy"
            size="mini"
            icon="el-icon-plus"
            @click="dialogVisible = true"
            >添加</el-button
          >
        </div>
        <!-- ----------------------------------------------------------------------------------------------------- -->
        <div class="zheipr">
          <div class="marginr">
            <el-popover placement="bottom" trigger="hover">
              <div class="ckqbtopqian">
                <el-button class="buttonsy" size="mini">查看全部</el-button>
              </div>
              <div slot="reference" class="boxjc">
                <img src="../img/qb.png" alt="" />
                查看全部
              </div>
            </el-popover>
          </div>
          <!-- --------------------------------------------------------------------------------------------------------- -->
          <!-- <div class="marginr">
            <el-popover placement="bottom" width="530" trigger="click">
              <div class="tjiansxian">
                <div class="top">
                  <div>筛选</div>
                  <div>清空</div>
                </div>
                <div class="dang">
                  <div v-if="typei == '2' || typei == '3'">
                    <div>当</div>
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        v-model="cxl"
                        filterable
                        multiple
                        collapse-tags
                        style="width: 180rem"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in 4"
                          :key="item"
                          :label="'条件' + item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </div>
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        style="width: 88rem"
                        v-model="cxz"
                        placeholder="请选择"
                      >
                        <el-option label="包含" value="1"></el-option>
                        <el-option label="不包含" value="2"></el-option>
                        <el-option label="为空" value="3"></el-option>
                        <el-option label="不为空" value="4"></el-option>
                      </el-select>
                    </div>
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        v-model="cxr"
                        filterable
                        multiple
                        collapse-tags
                        style="width: 180rem"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in 4"
                          :key="item"
                          :label="'条件' + item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </div>
                    <div style="width: 20rem">
                      <i
                        @click="cxoff('1')"
                        v-if="typei == '2'"
                        class="el-icon-close"
                        style="cursor: pointer"
                      ></i>
                    </div>
                  </div>
                  <div v-if="typei == '3'">
                    <div>且</div>
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        v-model="cxl"
                        filterable
                        multiple
                        collapse-tags
                        style="width: 180rem"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in 4"
                          :key="item"
                          :label="'条件' + item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </div>
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        style="width: 88rem"
                        v-model="cxz"
                        placeholder="请选择"
                      >
                        <el-option label="包含" value="1"></el-option>
                        <el-option label="不包含" value="2"></el-option>
                        <el-option label="为空" value="3"></el-option>
                        <el-option label="不为空" value="4"></el-option>
                      </el-select>
                    </div>
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        v-model="cxr"
                        filterable
                        multiple
                        collapse-tags
                        style="width: 180rem"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in 4"
                          :key="item"
                          :label="'条件' + item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </div>
                    <div style="width: 20rem">
                      <i
                        @click="cxoff('2')"
                        class="el-icon-close"
                        style="cursor: pointer"
                      ></i>
                    </div>
                  </div>
                </div>
                <div style="padding-top: 20rem">
                  <el-button class="buttonsy" @click="appendtj" size="mini"
                    >添加条件</el-button
                  >
                </div>
              </div>
              <div slot="reference" class="boxjc">
                <img src="../img/tj.png" alt="" />
                条件筛选
              </div>
            </el-popover>
          </div> -->
          <!-- xxxxxxxxxxxxxxxxxxxx -->
          <div class="marginr">
            <el-popover placement="bottom" width="530" trigger="click">
              <div slot="reference" class="boxjc">
                <img src="../img/tj.png" alt="" />
                条件筛选
              </div>
              <div class="tjiansxian">
                <div class="top">
                  <div>筛选</div>
                  <div @click="cleark">清空</div>
                </div>
                <div
                  style="padding: 12rem 0; display: flex; align-items: center"
                >
                  符合以下&nbsp;&nbsp;
                  <el-select
                    class="zhessless"
                    size="mini"
                    style="width: 74rem"
                    v-model="rysy"
                    placeholder="请选择"
                  >
                    <el-option label="任一" value="1"></el-option>
                    <el-option label="所有" value="2"></el-option>
                  </el-select>
                  &nbsp;&nbsp;条件
                </div>
                <div class="tjiansearch">
                  <div v-for="(e, i) in searcharr" :key="i">
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        v-model="e.key"
                        filterable
                        style="width: 180rem"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in 4"
                          :key="item"
                          :label="'条件' + item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </div>
                    <div>
                      <el-select
                        class="zhessless"
                        size="mini"
                        style="width: 88rem"
                        v-model="e.value"
                        placeholder="请选择"
                      >
                        <el-option label="包含" value="1"></el-option>
                        <el-option label="不包含" value="2"></el-option>
                        <el-option label="为空" value="3"></el-option>
                        <el-option label="不为空" value="4"></el-option>
                      </el-select>
                    </div>
                    <div>
                      <el-input
                        placeholder="请输入"
                        class="inpustyle"
                        v-model="e.type"
                        size="mini"
                        style="width: 180rem"
                      ></el-input>
                    </div>
                    <div style="width: 20rem">
                      <i
                        @click="cxoff(i)"
                        class="el-icon-close"
                        style="cursor: pointer"
                      ></i>
                    </div>
                  </div>
                  <div style="padding-top: 20rem">
                    <el-button class="buttonsy" @click="appendtj" size="mini"
                      >添加条件</el-button
                    >
                  </div>
                </div>
              </div>
            </el-popover>
          </div>
          <!-- xxxxxxxxxxxxxxxxxxxx -->
          <!-- ------------------------------------------------------------------------------------------------------------ -->
          <div class="marginr">
            <el-popover placement="bottom" width="220" trigger="hover">
              <div class="zduanpeizi">
                <div>字段配置</div>
                <div class="zdbox">
                  <div
                    v-for="(e, i) in btarr"
                    :key="i"
                    v-dragging="{ list: btarr, item: e }"
                    :dragable="true"
                  >
                    <div>{{ e.label }}</div>
                    <div>
                      <img
                        @click="fields('1', i)"
                        v-if="e.type"
                        src="../img/yk.png"
                        alt=""
                      />
                      <img
                        @click="fields('2', i)"
                        v-else
                        src="../img/yg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div slot="reference" class="boxjc">
                <img src="../img/zd.png" alt="" />
                字段配置
              </div>
            </el-popover>
          </div>
        </div>
      </div>

      <!-- 列表 -->
      <!-- <div class="biaotab"> -->
      <div>
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
                  @click="flagcz = true"
                  style="height: 22rem; cursor: pointer; margin: 0 26rem"
                  src="../img/bq.png"
                  alt=""
                />
                <img
                  @click="flagbj = true"
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
            label-width="100rem"
            class="demo-ruleForm"
          >
            <el-form-item label="角色：" prop="js">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.js"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户名：" prop="yhm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.yhm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="账号：" prop="zh">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.zh"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="mm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.mm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="qrmm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.qrmm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="部门：" prop="bm">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.bm"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开启/禁用：">
              <el-switch
                class="huandk"
                v-model="ruleForm.kqjy"
                active-color="#fa960069"
                inactive-color="transparent"
              >
              </el-switch>
            </el-form-item>
            <el-form-item label="手机号：" prop="sjh">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.sjh"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="yx">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.yx"
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
    <!-- 编辑 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="flagbj"
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
          编辑
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100rem"
            class="demo-ruleForm"
          >
            <el-form-item label="角色：" prop="js">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.js"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户名：" prop="yhm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.yhm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="账号：" prop="zh">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.zh"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="部门：" prop="bm">
              <el-select
                class="zhessless"
                size="mini"
                v-model="ruleForm.bm"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="管理员" value="1"> </el-option>
                <el-option label="xxx" value="2"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开启/禁用：">
              <el-switch
                class="huandk"
                v-model="ruleForm.kqjy"
                active-color="#fa960069"
                inactive-color="transparent"
              >
              </el-switch>
            </el-form-item>
            <el-form-item label="手机号：" prop="sjh">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.sjh"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="yx">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.yx"
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
            @click="flagbj = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 重置密码 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="flagcz"
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
          重置密码
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100rem"
            class="demo-ruleForm"
          >
            <el-form-item label="密码：" prop="mm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.mm"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="qrmm">
              <el-input
                placeholder="请输入"
                class="inpustyle"
                v-model="ruleForm.qrmm"
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
            @click="flagcz = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      flagcz: false, //重置密码
      flagbj: false, //编辑弹窗
      dialogVisible: false, //添加弹窗
      // 添加表单数据
      ruleForm: {
        js: "",
        yhm: "",
        mm: "",
        qrmm: "",
        zh: "",
        bm: "",
        kqjy: false,
        xxx: "",
      },
      // 添加表单验证
      rules: {
        js: [{ required: true, message: "请选择角色 ", trigger: "change" }],
        yhm: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        zh: [{ required: true, message: "请输入账号", trigger: "blur" }],
        mm: [{ required: true, message: "请输入密码", trigger: "blur" }],
        qrmm: [{ required: true, message: "请输入确认密码", trigger: "blur" }],
        bm: [{ required: true, message: "请输入部门", trigger: "change" }],
        // { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        // password: [{ validator: funcpassword, trigger: "blur" }],
      },
      // -----------------------------------------------------------------关联查询组件下
      // 表格数据
      tableData: [
        {
          a: "张有志",
          b: "zhangyouzhi",
          c: "18812036503",
          d: "265987461@qq.com",
          e: "超级管理员",
          f: "开启",
          g: "人螂碍变哎肮资源部",
        },
        {
          a: "张有志",
          b: "zhangyouzhi",
          c: "18812036503",
          d: "265987461@qq.com",
          e: "超级管理员",
          f: "开启",
          g: "人螂碍变哎肮资源部",
        },
        {
          a: "张有志",
          b: "zhangyouzhi",
          c: "18812036503",
          d: "265987461@qq.com",
          e: "超级管理员",
          f: "开启",
          g: "人螂碍变哎肮资源部",
        },
        {
          a: "张有志",
          b: "zhangyouzhi",
          c: "18812036503",
          d: "265987461@qq.com",
          e: "超级管理员",
          f: "开启",
          g: "人螂碍变哎肮资源部",
        },
        {
          a: "张有志",
          b: "zhangyouzhi",
          c: "18812036503",
          d: "265987461@qq.com",
          e: "超级管理员",
          f: "开启",
          g: "人螂碍变哎肮资源部",
        },
        {
          a: "张有志",
          b: "zhangyouzhi",
          c: "18812036503",
          d: "265987461@qq.com",
          e: "超级管理员",
          f: "开启",
          g: "人螂碍变哎肮资源部",
        },
        {
          a: "张有志",
          b: "zhangyouzhi",
          c: "18812036503",
          d: "265987461@qq.com",
          e: "超级管理员",
          f: "开启",
          g: "人螂碍变哎肮资源部",
        },
        {
          a: "张有志",
          b: "zhangyouzhi",
          c: "18812036503",
          d: "265987461@qq.com",
          e: "超级管理员",
          f: "开启",
          g: "人螂碍变哎肮资源部",
        },
        {
          a: "张有志",
          b: "zhangyouzhi",
          c: "18812036503",
          d: "265987461@qq.com",
          e: "超级管理员",
          f: "开启",
          g: "人螂碍变哎肮资源部",
        },
        {
          a: "张有志",
          b: "zhangyouzhi",
          c: "18812036503",
          d: "265987461@qq.com",
          e: "超级管理员",
          f: "开启",
          g: "人螂碍变哎肮资源部",
        },
      ],
      // 表头数据
      btarr: [],
      // 表头改变数据
      vararr: [],
      // 表头原始数据
      tablearr: [
        {
          prop: "a",
          label: "用户名",
          type: true,
        },
        {
          prop: "b",
          label: "账号",
          type: true,
        },
        {
          prop: "c",
          label: "手机号",
          type: true,
        },
        {
          prop: "d",
          label: "邮箱",
          type: true,
        },
        {
          prop: "e",
          label: "角色",
          type: true,
        },
        {
          prop: "f",
          label: "开启/禁用",
          type: true,
        },
        {
          prop: "g",
          label: "部门",
          type: true,
        },
        {
          prop: "h",
          label: "操作",
          type: true,
        },
      ],
      // 查询组件一排中间
      //   cxz: "1",
      // 查询组件一排left
      //   cxl: "",
      // 查询组件一排right
      //   cxr: "",
      // 查询组件条件显示
      //   typei: "1",
      //   xxxxxxxxxxxxxxxxxxxxxxxxxxx
      rysy: "2", //符合条件，任一或所有
      //   查询数据
      searcharr: [{ key: "", value: "", type: "" }],
      //   xxxxxxxxxxxxxxxxxxxxxxxxxxx
      // -----------------------------------------------------------------关联查询组件上
      // 分页
      page: {
        current: 1,
        size: 10,
        total: 44,
      },
    };
  },
  watch: {
    // --------------------表格头
    btarr: {
      handler: function (val, oldVal) {
        this.vararr = this.btarr.filter((e) => {
          return e.type;
        });
        this.$nextTick(() => {
          this.tableData = JSON.parse(JSON.stringify(this.tableData));
        });
        // this.tableData = JSON.parse(JSON.stringify(this.tableData))
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    // ----------------------------关联查询组件下
    // 表格头
    this.btarr = localStorage.getItem("localpersonnelmanagement")
      ? JSON.parse(localStorage.getItem("localpersonnelmanagement"))
      : this.tablearr;
    this.$dragging.$on("dragged", (e) => {
      this.btarr = e.value.list;
      localStorage.setItem(
        "localpersonnelmanagement",
        JSON.stringify(this.btarr)
      );
    });
    // ----------------------------关联查询组件上
  },
  methods: {
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
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // 查询组件添加条件
    appendtj() {
      this.searcharr.push({ key: "", value: "1", type: "" });
    },
    // 查询组件减少条件
    cxoff(i) {
      this.searcharr.splice(i, 1);
    },
    // 触发清空
    cleark() {
      this.searcharr = [{ key: "", value: "1", type: "" }];
    },
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ----------------------------关联查询组件上
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
      this.$router.push("/knowledgedetails");
    },
  },
};
</script>
  <style lang="less" scoped>
.personnelmanagement {
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
    .huandk {
      /deep/.el-switch__core {
        border: 1rem solid #aaaaaa !important;
      }
    }
  }
  .lbox {
    height: 809rem;
    padding: 20rem 30rem;
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
  .zheestoub {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>