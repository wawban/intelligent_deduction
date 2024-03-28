<template>
  <div class="disposal">
    <div class="ckaowz">
      <i class="el-icon-caret-right"></i>利用信息
      <div></div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">处置方式:</div>
      <div>{{ ticket.method }}</div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">分配对象:</div>
      <div>{{ ticket.assignee }}</div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">漏洞负责人:</div>
      <div>{{ ticket.manager }}</div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">处置结果:</div>
      <div>{{ ticket.result == 0 ? "未处理" : "已处理" }}</div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">处置时间:</div>
      <div>{{ $moment(ticket.resolved_at).format("YYYY-MM-DD HH:mm:ss") }}</div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">处置过程:</div>
      <div>
        <div v-for="(item, index) in ticket.procedure" :key="index">
          {{ item }}
        </div>
        <!-- <div>
          验证漏洞：安全团队验证了该漏洞的存在，并确认了其影响范围和危害程度。
        </div>
        <div>
          报告漏洞：安全团队将漏洞报告给软件开发商，并提供详细的漏洞描述和漏洞证明。
        </div>
        <div>
          修复漏洞：软件开发商在收到漏洞报告后，立即开始修复工作。经过一段时间的开发和测试，最终发布了修复补丁。
        </div>
        <div>发现漏洞：内部安全团队在常规安全检查中发现该漏洞。</div>
        <div>
          验证漏洞：安全团队验证了该漏洞的存在，并确认了其影响范围和危害程度。
        </div>
        <div>
          更新安全策略：针对该漏洞，安全团队更新了安全策略和措施，以防止类似漏洞的再次出现。
        </div> -->
      </div>
    </div>
    <div style="margin-top: 15rem; display: flex">
      <div style="color: #aaa; padding-right: 10rem">备注:</div>
      <div>{{ ticket.note }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ticket: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style lang="less" scoped>
.disposal {
  padding: 33rem 39rem;
  .ckaowz {
    display: flex;
    align-items: center;
    font-size: 14rem;
    position: relative;

    > div {
      position: absolute;
      height: 1rem;
      background: rgba(255, 255, 255, 0.3);
      width: 1300rem;
      left: 80rem;
    }
  }
}
</style>