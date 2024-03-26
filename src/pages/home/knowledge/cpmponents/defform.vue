<template>
  <div class="attackform gdstyle">
    <div>
      <table border="1" cellspacing="0" width="100%">
        <tr class="jianjian">
          <td colspan="2">检测</td>
          <td colspan="2">隔离</td>
          <td colspan="2">欺骗</td>
          <td colspan="2">逐出</td>
        </tr>
        <tr class="jianjian tows">
          <td>战术名称</td>
          <td>战术编号</td>
          <td>战术名称</td>
          <td>战术编号</td>
          <td>战术名称</td>
          <td>战术编号</td>
          <td>战术名称</td>
          <td>战术编号</td>
        </tr>
        <tr v-for="(e, i) in 11" :key="i">
          <td>战术名称{{ e }}</td>
          <td>战术编号{{ e }}</td>
          <td>战术名称{{ e }}</td>
          <td>战术编号{{ e }}</td>
          <td>战术名称{{ e }}</td>
          <td>战术编号{{ e }}</td>
          <td>战术名称{{ e }}</td>
          <td>战术编号{{ e }}</td>
        </tr>
        <!-- <tr v-for="(e, i) in nim" :key="i">
          <td>{{ arr[0].d[i] || "" }}</td>
        </tr> -->
      </table>
    </div>
  </div>
</template>
<style lang="less" scoped>
.attackform {
  padding-top: 20px;
  height: 720px;
  overflow: auto;
  > div {
    tr {
      td {
        text-align: center;
        line-height: 46px;
      }
    }
    .jianjian {
      td {
        color: #aaa;
        font-size: 20px;
      }
    }
    .tows {
      td {
        font-size: 16px;
      }
    }
  }
}
</style>