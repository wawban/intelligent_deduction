<!-- 主机资产 -->
<template>
  <div class="hostmachine">
    <div class="mianbaox">
      <div>
        <img src="../img/sg.png" alt="" />
      </div>
      <div>数字空间治理/</div>
      <div>主机资产</div>
      <!-- ------------------------ -->
      <table border="1" cellspacing="0" width="100%">
        <tr>
          <td v-for="(e,i) in arr" :key="i" colspan="2">{{e.a}}</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr v-for="(e,i) in nim" :key="i">
          <td>{{arr[0].d[i] || ''}}</td>
          <td>{{arr[0].d[i] || ''}}</td>
          <td>{{arr[1].d[i] || ''}}</td>
          <td>{{arr[1].d[i] || ''}}</td>
          <td>{{arr[2].d[i] || ''}}</td>
          <td>{{arr[2].d[i] || ''}}</td>
          <td>{{arr[3].d[i] || ''}}</td>
          <td>{{arr[3].d[i] || ''}}</td>
        </tr>
      </table>
    </div>
    <br>
    <br>
    <br>
    <div class="wasew">
        <div>
            <div>1</div>
            <div>2</div>
            <div>4</div>
            <div>
                <div>12121wewewewewewewewewewewewwwwwwwwwwwwwwwww</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
                <div>12121</div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            

            // arr:[
            //     {
            //         img:require("./img/dan.png"),
            //         name:'xx',
            //         numb:'123'
            //     }
            // ]









            arr:[
                {
                    a:'name',
                    b:'xxxx',
                    c:'zzzz',
                    d:[10,2,3,4,5,6,9]
                },
                {
                    a:'name',
                    b:'xxxx',
                    c:'zzzz',
                    d:[1,2,3,4,5,61,7,8,9]
                },
                {
                    a:'name',
                    b:'xxxx',
                    c:'zzzz',
                    d:[1,2,3,4,5,6,7]
                },
                {
                    a:'name',
                    b:'xxxx',
                    c:'zzzz',
                    d:[1,2,3,4,5,6]
                }
            ],
            nim: 0,
        }
    },
    mounted(){
        var arrs = this.arr.map(e=>{
            return e.d.length
        })
        this.nim = Math.max(...arrs)
    }
}
</script>
<style lang="less" scoped>
.wasew{
    >div{
        min-height: 200rem;
        border-top: 1px solid red;
        background: #ccc;
        display: flex;
        padding-left: 206rem;
        >div{
            width: 367rem;
            min-height: 100%;
            border-left: 1px solid red;
        }
    }
}
</style>