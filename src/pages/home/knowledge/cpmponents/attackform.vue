<template>
  <div class="attackform gdstyle">
    <div>
      <table border="1" cellspacing="0" width="100%">
        <tr class="jianjian">
          <td colspan="2">信息收集</td>
          <td colspan="2">初始访问</td>
          <td colspan="2">持久化</td>
          <td colspan="2">特权提升</td>
          <td colspan="2">发现</td>
          <td colspan="2">横向移动</td>
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
          <td>战术名称</td>
          <td>战术编号</td>
          <td>战术名称</td>
          <td>战术编号</td>
        </tr>
        <tr v-for="(e,i) in 11" :key="i">
            <td>战术名称{{ e }}</td>
            <td>战术编号{{ e }}</td>
            <td>战术名称{{ e }}</td>
            <td>战术编号{{ e }}</td>
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
  padding-top: 20rem;
  height: 720rem;
  overflow: auto;
  >div{
    tr{
        td{
            text-align: center;
            line-height: 46rem;
        }
    }
    .jianjian{
        td{
            color: #aaa;
            font-size: 20rem;
        }
    }
    .tows{
        td{
            font-size: 16rem;
        }
    }
  }
}
</style>