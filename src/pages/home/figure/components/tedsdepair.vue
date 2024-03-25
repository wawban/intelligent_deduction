<template>
  <div class="Repair">
    <div class="ckaowz">
      <i class="el-icon-caret-right"></i>修复建议
      <div></div>
    </div>
    <div class="nrongh">
      <div>
        Cybrosys Techno Solutions Website Blog Search是博客中提供了搜索选项。
      </div>
      <div>
        Cybrosys Techno Solutions Website Blog Search
        13.0版本至13.0.1.0.1版本存在安全漏洞，该漏洞源于存在SQL注入漏洞，允许远程攻击者执行任意代码并获取权限。
      </div>
    </div>
    <div class="ckaowz">
      <i class="el-icon-caret-right"></i>参考网址
      <div></div>
    </div>
    <div class="nrongh">
      <div>来源：nvd.nist.gov</div>
      <div>
        链接：<a href="" style="color: #02a7f0"
          >https://nvd.nist.gov/vuln/detail/CVE-2023-48049</a
        >
      </div>
    </div>
    <div class="ckaowz">
      <i class="el-icon-caret-right"></i>官方补丁
      <div></div>
    </div>
    <div class="nrongh">
      <a href="" style="color: #02a7f0"
        >https://nvd.nist.gov/vuln/detail/CVE-2023-48049</a
      >
    </div>
  </div>
</template>
<style lang="less" scoped>
.Repair {
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
      //   right: -255rem;
    }
  }
  .nrongh {
    padding-top: 17rem;
    padding-bottom: 40rem;
  }
}
</style>