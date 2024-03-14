<template>
  <div class="disposalworkorder">
    <!-- 面包屑 -->
    <div class="crumbss">
      <div class="img">
        <img src="../img/sh.png" alt="" />
      </div>
      <div class="wys">数字空间治理/</div>
      <div class="yys">处置工单</div>
    </div>
    <div class="box wbb">
      <div class="zsbtbox">
        <div class="guns"></div>
        <div class="wenz">处置工单</div>
      </div>
      <!-- 查询组件 -->
      <div class="zheipr">
        <div class="marginr">
          <!-- <el-popover placement="bottom" width="500" trigger="click"> hover-->
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
              <div style="padding: 12rem 0; display: flex; align-items: center">
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
      <!-- 列表 -->
      <div class="biaotab">
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
              <div v-if="item.label == '漏洞等级'">
                <div :class="scope.row.f == 1 ? 'styg' : 'styz'">
                  {{ scope.row.a == 1 ? "高危" : "中危" }}
                </div>
              </div>
              <div v-else-if="item.label == '漏洞状态'">
                <div :class="scope.row.g == 1 ? 'styg' : 'styz'">
                  {{ scope.row.g == 1 ? "修复中" : "已修复" }}
                </div>
              </div>
              <div v-else-if="item.label == '工单状态'">
                <div :class="scope.row.g == 1 ? 'styg' : 'styz'">
                  {{ scope.row.g == 1 ? "处理中" : "已完成" }}
                </div>
              </div>
              <div v-else-if="item.label == '操作'">
                <img
                  style="height: 16rem; cursor: pointer"
                  src="../img/cx.png"
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
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <!-- 漏洞处置 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="ldczflah"
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
          漏洞处置
        </div>
        <div class="czstyle" style="padding-top: 20rem">
          <div>
            <div class="biaot">漏洞验证：</div>
            <div class="neiron">存在</div>
          </div>
          <div>
            <div class="biaot">处置方式：</div>
            <div class="neiron">存在</div>
          </div>
          <div>
            <div class="biaot">漏洞负责人：</div>
            <div class="neiron">张有志</div>
          </div>
          <div>
            <div class="biaot">分配对象：</div>
            <div class="neiron">李友田</div>
          </div>
          <div>
            <div class="biaot">处置过程：</div>
            <div class="neiron">
              <div>内部安全团队在常规安全检查中发现该漏洞。</div>
              <div>
                安全团队验证了该漏洞的存在，并确认了其影响范围和危害程度。
              </div>
              <div>
                安全团队将漏洞报告给软件开发商，并提供详细的漏洞描述和漏洞证明。
              </div>
            </div>
          </div>
          <div>
            <div class="biaot">处置结果：</div>
            <div class="neiron">已修复</div>
          </div>
          <div>
            <div class="biaot">备注：</div>
            <div class="neiron">-</div>
          </div>
        </div>
        <div style="text-align: center">
          <el-button
            class="buttonsy"
            @click="ldczflah = false"
            size="mini"
            style="margin-right: 30rem"
            >确认</el-button
          >
          <el-button
            class="buttonsy"
            size="mini"
            style="margin-left: 30rem"
            @click="ldczflah = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 漏洞处置-存在 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="czflag"
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
          漏洞处置
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="czForm"
            :rules="czrules"
            ref="ruleForm"
            label-width="110rem"
            class="demo-ruleForm"
          >
            <el-form-item label="漏洞验证：" prop="yz">
              <el-radio-group v-model="czForm.yz" class="dxradio">
                <el-radio :label="1">存在</el-radio>
                <el-radio :label="2">不存在</el-radio>
                <el-radio :label="3">无法验证</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="处置方式：" prop="fs">
              <el-select
                class="zhessless"
                size="mini"
                v-model="czForm.fs"
                placeholder="请选择"
                style="width: 340rem"
              >
                <el-option label="方式1" value="1"> </el-option>
                <el-option label="方式2" value="2"> </el-option>
                <el-option label="方式3" value="3"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="漏洞负责人：" prop="fzr">
              <el-input
                disabled
                class="inpustyle"
                v-model="czForm.fzr"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="分配对象：">
              <el-input
                disabled
                class="inpustyle"
                v-model="czForm.dx"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="处置过程：" prop="gc">
              <el-input
                type="textarea"
                placeholder="请输入"
                class="inputtextarea"
                v-model="czForm.gc"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="处置结果：" prop="jg">
              <el-radio-group v-model="czForm.jg" class="dxradio">
                <el-radio :label="1">已修复</el-radio>
                <el-radio :label="2">无法修复</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="备注：">
              <el-input
                type="textarea"
                placeholder="请输入"
                class="inputtextarea"
                v-model="czForm.bz"
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
            @click="czflag = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 漏洞处置-不存在 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="bczflag"
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
          漏洞处置
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="bczForm"
            :rules="bczrules"
            ref="ruleForm"
            label-width="110rem"
            class="demo-ruleForm"
          >
            <el-form-item label="漏洞验证：" prop="yz">
              <el-radio-group v-model="bczForm.yz" class="dxradio">
                <el-radio :label="1">存在</el-radio>
                <el-radio :label="2">不存在</el-radio>
                <el-radio :label="3">无法验证</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="漏洞负责人：" prop="fzr">
              <el-input
                disabled
                class="inpustyle"
                v-model="bczForm.fzr"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="分配对象：">
              <el-input
                disabled
                class="inpustyle"
                v-model="bczForm.dx"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="处置结果：" prop="jg">
              <el-radio-group v-model="bczForm.jg" class="dxradio">
                <el-radio :label="1">误报</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="备注：">
              <el-input
                type="textarea"
                placeholder="请输入"
                class="inputtextarea"
                v-model="bczForm.bz"
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
            @click="bczflag = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 漏洞处置-无法验证 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="yzflag"
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
          漏洞处置
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="yzForm"
            :rules="yzrules"
            ref="ruleForm"
            label-width="110rem"
            class="demo-ruleForm"
          >
            <el-form-item label="漏洞验证：" prop="yz">
              <el-radio-group v-model="yzForm.yz" class="dxradio">
                <el-radio :label="1">存在</el-radio>
                <el-radio :label="2">不存在</el-radio>
                <el-radio :label="3">无法验证</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="漏洞负责人：" prop="fzr">
              <el-input
                disabled
                class="inpustyle"
                v-model="yzForm.fzr"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="分配对象：">
              <el-input
                disabled
                class="inpustyle"
                v-model="yzForm.dx"
                size="mini"
                style="width: 340rem"
              ></el-input>
            </el-form-item>
            <el-form-item label="处置结果：" prop="jg">
              <el-radio-group v-model="yzForm.jg" class="dxradio">
                <el-radio :label="1">无法修复</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="备注：">
              <el-input
                type="textarea"
                placeholder="请输入"
                class="inputtextarea"
                v-model="yzForm.bz"
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
            @click="yzflag = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 强制关闭-存在 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="qzczflag"
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
          漏洞处置
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="qzczForm"
            :rules="qzczrules"
            ref="ruleForm"
            label-width="110rem"
            class="demo-ruleForm"
          >
            <el-form-item label="漏洞验证：" prop="yz">
              <el-radio-group v-model="qzczForm.yz" class="dxradio">
                <el-radio :label="1">存在</el-radio>
                <el-radio :label="2">不存在</el-radio>
                <el-radio :label="3">无法验证</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="处置结果：" prop="jg">
              <el-radio-group v-model="qzczForm.jg" class="dxradio">
                <el-radio :label="1">已修复</el-radio>
                <el-radio :label="2">无法修复</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="备注：">
              <el-input
                type="textarea"
                placeholder="请输入"
                class="inputtextarea"
                v-model="qzczForm.bz"
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
            @click="qzczflag = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 强制关闭-不存在 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="qzbczflag"
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
          漏洞处置
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="qzbczForm"
            :rules="qzbczrules"
            ref="ruleForm"
            label-width="110rem"
            class="demo-ruleForm"
          >
            <el-form-item label="漏洞验证：" prop="yz">
              <el-radio-group v-model="qzbczForm.yz" class="dxradio">
                <el-radio :label="1">存在</el-radio>
                <el-radio :label="2">不存在</el-radio>
                <el-radio :label="3">无法验证</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="处置结果：" prop="jg">
              <el-radio-group v-model="qzbczForm.jg" class="dxradio">
                <el-radio :label="1">误报</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="备注：">
              <el-input
                type="textarea"
                placeholder="请输入"
                class="inputtextarea"
                v-model="qzbczForm.bz"
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
            @click="qzbczflag = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 强制关闭-无法验证 -->
    <div class="tandialog">
      <el-dialog
        :visible.sync="qzyzflag"
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
          漏洞处置
        </div>
        <div class="formstyle" style="padding-top: 20rem">
          <el-form
            :model="qzyzForm"
            :rules="qzyzrules"
            ref="ruleForm"
            label-width="110rem"
            class="demo-ruleForm"
          >
            <el-form-item label="漏洞验证：" prop="yz">
              <el-radio-group v-model="qzyzForm.yz" class="dxradio">
                <el-radio :label="1">存在</el-radio>
                <el-radio :label="2">不存在</el-radio>
                <el-radio :label="3">无法验证</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="处置结果：" prop="jg">
              <el-radio-group v-model="qzyzForm.jg" class="dxradio">
                <el-radio :label="1">无法修复</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="备注：">
              <el-input
                type="textarea"
                placeholder="请输入"
                class="inputtextarea"
                v-model="qzyzForm.bz"
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
            @click="qzyzflag = false"
            >取消</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // ==========================================================
      ldczflah: false, //漏洞处置
      czflag: false, //漏洞处置-存在
      // 漏洞处置-存在表单数据
      czForm: {
        yz: 1,
        fs: "",
        fzr: "张有志",
        dx: "李有田",
        gc: "",
        jg: "",
      },
      // 漏洞处置-存在表单验证
      czrules: {
        yz: [{ required: true, message: "请选择漏洞验证", trigger: "change" }],
        fs: [{ required: true, message: "请选择处置方式", trigger: "change" }],
        fzr: [{ required: true, message: "请输入漏洞负责人", trigger: "blur" }],
        gc: [{ required: true, message: "请输入处置过程：", trigger: "blur" }],
        jg: [{ required: true, message: "请选择处置结果", trigger: "change" }],
      },
      bczflag: false, //漏洞处置-不存在
      // 漏洞处置-不存在表单数据
      bczForm: {
        yz: 1,
        fzr: "张有志",
        dx: "李有田",
        jg: "",
      },
      // 漏洞处置-不存在表单验证
      bczrules: {
        yz: [{ required: true, message: "请选择漏洞验证", trigger: "change" }],
        fzr: [{ required: true, message: "请输入漏洞负责人", trigger: "blur" }],
        jg: [{ required: true, message: "请选择处置结果", trigger: "change" }],
      },
      yzflag: false, //漏洞处置-无法验证
      // 漏洞处置-无法验证表单数据
      yzForm: {
        yz: 1,
        fzr: "张有志",
        dx: "李有田",
        jg: "",
      },
      // 漏洞处置-无法验证表单验证
      yzrules: {
        yz: [{ required: true, message: "请选择漏洞验证", trigger: "change" }],
        fzr: [{ required: true, message: "请输入漏洞负责人", trigger: "blur" }],
        jg: [{ required: true, message: "请选择处置结果", trigger: "change" }],
      },
    //   qzczflag: true,//强制关闭-无法验证\不存在\存在
      qzczflag: false,//强制关闭-存在
      // 漏洞处置-强制关闭-存在
      qzczForm: {
        yz: 1,
        jg: "",
      },
      // 漏洞处置-强制关闭-存在
      qzczrules: {
        yz: [{ required: true, message: "请选择漏洞验证", trigger: "change" }],
        jg: [{ required: true, message: "请选择处置结果", trigger: "change" }],
      },
      qzbczflag: false,//强制关闭-不存在
      // 漏洞处置-强制关闭-不存在
      qzbczForm: {
        yz: 1,
        jg: "",
      },
      // 漏洞处置-强制关闭-不存在
      qzbczrules: {
        yz: [{ required: true, message: "请选择漏洞验证", trigger: "change" }],
        jg: [{ required: true, message: "请选择处置结果", trigger: "change" }],
      },
      qzyzflag: true,//强制关闭-无法验证
      // 漏洞处置-强制关闭-无法验证
      qzyzForm: {
        yz: 1,
        jg: "",
      },
      // 漏洞处置-强制关闭-无法验证
      qzyzrules: {
        yz: [{ required: true, message: "请选择漏洞验证", trigger: "change" }],
        jg: [{ required: true, message: "请选择处置结果", trigger: "change" }],
      },
      // ==========================================================
      // -----------------------------------------------------------------关联查询组件下
      // 表格数据
      tableData: [
        {
          a: "853672598700032",
          b: "Kashipara Job PortalSQL注入漏洞",
          c: "人力资源部",
          d: "张有志",
          e: "李友田",
          f: "1",
          g: "1",
          h: "1",
          i: "2023.10.23 02:06:12",
          j: "",
          k: "",
        },
        {
          a: "853672598700032",
          b: "Kashipara Job PortalSQL注入漏洞",
          c: "人力资源部",
          d: "张有志",
          e: "李友田",
          f: "2",
          g: "2",
          h: "2",
          i: "2023.10.23 02:06:12",
          j: "",
          k: "",
        },
        {
          a: "853672598700032",
          b: "Kashipara Job PortalSQL注入漏洞",
          c: "人力资源部",
          d: "张有志",
          e: "李友田",
          f: "1",
          g: "1",
          h: "1",
          i: "2023.10.23 02:06:12",
          j: "",
          k: "",
        },
        {
          a: "853672598700032",
          b: "Kashipara Job PortalSQL注入漏洞",
          c: "人力资源部",
          d: "张有志",
          e: "李友田",
          f: "1",
          g: "1",
          h: "1",
          i: "2023.10.23 02:06:12",
          j: "",
          k: "",
        },
        {
          a: "853672598700032",
          b: "Kashipara Job PortalSQL注入漏洞",
          c: "人力资源部",
          d: "张有志",
          e: "李友田",
          f: "1",
          g: "1",
          h: "1",
          i: "2023.10.23 02:06:12",
          j: "",
          k: "",
        },
        {
          a: "853672598700032",
          b: "Kashipara Job PortalSQL注入漏洞",
          c: "人力资源部",
          d: "张有志",
          e: "李友田",
          f: "1",
          g: "1",
          h: "1",
          i: "2023.10.23 02:06:12",
          j: "",
          k: "",
        },
        {
          a: "853672598700032",
          b: "Kashipara Job PortalSQL注入漏洞",
          c: "人力资源部",
          d: "张有志",
          e: "李友田",
          f: "1",
          g: "1",
          h: "1",
          i: "2023.10.23 02:06:12",
          j: "",
          k: "",
        },
        {
          a: "853672598700032",
          b: "Kashipara Job PortalSQL注入漏洞",
          c: "人力资源部",
          d: "张有志",
          e: "李友田",
          f: "1",
          g: "1",
          h: "1",
          i: "2023.10.23 02:06:12",
          j: "",
          k: "",
        },
        {
          a: "853672598700032",
          b: "Kashipara Job PortalSQL注入漏洞",
          c: "人力资源部",
          d: "张有志",
          e: "李友田",
          f: "1",
          g: "1",
          h: "1",
          i: "2023.10.23 02:06:12",
          j: "",
          k: "",
        },
        {
          a: "853672598700032",
          b: "Kashipara Job PortalSQL注入漏洞",
          c: "人力资源部",
          d: "张有志",
          e: "李友田",
          f: "1",
          g: "1",
          h: "1",
          i: "2023.10.23 02:06:12",
          j: "",
          k: "",
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
          label: "工单编号",
          type: true,
        },
        {
          prop: "b",
          label: "工单名称",
          type: true,
        },
        {
          prop: "c",
          label: "资产组",
          type: true,
        },
        {
          prop: "d",
          label: "工单负责人",
          type: true,
        },
        {
          prop: "e",
          label: "分配对象",
          type: true,
        },
        {
          prop: "f",
          label: "漏洞等级",
          type: true,
        },
        {
          prop: "g",
          label: "漏洞状态",
          type: true,
        },
        {
          prop: "h",
          label: "工单状态",
          type: true,
        },
        {
          prop: "i",
          label: "截止时间",
          type: true,
        },
        {
          prop: "g",
          label: "工单备注",
          type: true,
        },
        {
          prop: "k",
          label: "操作",
          type: true,
        },
      ],
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
    
    // localStorage.setItem("localdisposalworkorder",'')
    // 表格头
    this.btarr = localStorage.getItem("localdisposalworkorder")
      ? JSON.parse(localStorage.getItem("localdisposalworkorder"))
      : this.tablearr;
    this.$dragging.$on("dragged", (e) => {
      this.btarr = e.value.list;
      localStorage.setItem(
        "localdisposalworkorder",
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
        "localdisposalworkorder",
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
  },
};
</script>
<style lang="less" scoped>
.disposalworkorder {
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
    // .huandk {
    //   /deep/.el-switch__core {
    //     border: 1rem solid #aaaaaa !important;
    //   }
    // }
    .czstyle {
      > div {
        padding-bottom: 20rem;
        display: flex;
        .biaot {
          width: 100rem;
          font-size: 14px;
          font-weight: normal;
          text-align: right;
          color: #aaa;
          padding-right: 10rem;
        }
        .neiron {
          color: #fff;
          width: 300rem;
        }
      }
    }
  }
  .box {
    height: 809rem;
    padding: 20rem 30rem;
    .biaotab {
      .styg {
        color: #e53a40;
      }
      .styz {
        color: #fa9600;
      }
      .styd {
        color: #e53a40;
      }
    }
  }
}
</style>