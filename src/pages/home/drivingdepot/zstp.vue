<!-- 知识图普、对抗详情 -->
<template>
	<div class="popinfo" v-show="show" :style="popstyle()" :id="id">
		<div class="left">
			<div v-for="(item,index) in items" :key="index">
				<div class="title">
					<fieldset>
						<legend>{{item.title}}</legend>
					</fieldset>
				</div>
				<div class="body">
					<ul v-if="item.lines">
						<li v-for="(item1,index2) in item.lines" :key="index2">{{item1}}</li>
					</ul>
					<div v-else-if="item.tags">
						<span class="tag" v-for="(item1,index2) in item.tags" :key="index2">{{item1}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="header">
				<span :class="{'text':true,'active':active==1}" @click="active=1">知识图谱</span>
				<span class="line"></span>
				<span :class="{'text':true,'active':active==2}" @click="active=2">对抗详情</span>
			</div>
			<div class="body">
				<div v-show="active==1" class="zstp" id="zstp"></div>
				<!--对抗详情-->
				<div class="dtxq" v-show="active==2">
					<div class="line1">
						<div class="src">询问知识库是</div>
						<div class="dest">
							<div class="icon1"></div>
						</div>
					</div>
					<div class="line1">
						<div class="src">询问知识库是</div>
						<div class="dest">
							<div class="icon2"></div>
						</div>
					</div>
					<div class="line1">
						<div class="src">询问知识库是</div>
						<div class="dest">
							<div class="icon1"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
		data(){
			return {
				id:'id'+Math.random(),
				x:0,
		      	y:0,
		      	show:false,
		      	active:1,
		      	items:[{//左边数据
		      		title:'当前节点',
		      		tags:['外网办公区','核心资产']
		      	},{
		      		title:'决策过程',
		      		lines:['攻击成本','攻击隐蔽性','攻击武器适配度','攻击隐蔽性','攻击武器适配度攻击武器适配度攻击武器适配度','攻击隐蔽性','攻击武器适配度']
		      	},{
		      		title:'收益评估',
		      		tags:['外网办公区','核心资产']
		      	}],
		      	links:[{
					"source": 0,
					"target": 1
				},{
					"source": 0,
					"target": 2
				},{
					"source": 0,
					"target": 3
				},{
					"source": 0,
					"target": 4
				},{
					"source": 4,
					"target": 5
				},{
					"source": 4,
					"target": 6
				},{
					"source": 3,
					"target": 2
				}],
				nodes:[{
					"name": "192.168.0.1",
					"value": 1,
					"type": 1,
				}, {
					"name": "资产组",
					"value": 1
				}, {
					"name": "探测工具",
					"value": 1
				}, {
					"name": "windows",
					"value": 1
				}, {
					"name": "应用",
					"value": 1
				}, {
					"name": "服务",
					"value": 1
				}, {
					"name": "漏洞",
					"value": 1
				}]
			};
		},
		mounted() {
			//构建知识图谱
			this.myChart = this.$echarts.init(document.getElementById('zstp'));
      		this.myChart.setOption({
				series: [
			      {
			        type: 'graph',
			        layout: 'force',
			        symbolSize:60,
			        animation: false,
			        itemStyle: {
			            color: function(params) {
			                return params.data.type == 1?'#0085FF':'#FA9600';
			            },
			            borderWidth:0
			        },
			        label: {
			          	show: true,
			            position: 'inside',
			            formatter: '{b}',
			            fontSize: 12,
			            color: 'white',
			        },
			        draggable: true,
			        data: this.nodes,
			        force: {
			          edgeLength:100,//球间距
			          repulsion:150,
			        },
			        lineStyle:{
			        	width:2,
			        	color:'white'
			        },
			        edgeSymbol:["","arrow"],
              		edgeSymbolSize: ["",10],
			        edges:this.links
			      }
			    ]
			});
		},
		methods: {
        	open:function(x,y,data){
				this.x = x;
				this.y = y;
				this.active = 2;
				this.data = data;
				this.show = true;
        	},
        	close:function(){
				this.show = false;
        	},
        	//样式
		    popstyle(){
		    	var html = [];
		    	html.push('top:'+this.y+'px;');
		    	html.push('left:'+this.x+'px;');
		    	return html.join('');
		    }
		}
    }
</script>
<style lang="less" scoped>
.popinfo{position:absolute;z-index:2;border-radius:5px;border:2px #C67320 solid;background:#242423;top:0;left:0;width:650px;display:flex;}
/*左边*/
.popinfo .left{width:250px;border-right:1px #848484 dashed;margin:20px;overflow-y:auto;max-height:579px;}
.popinfo .left .title{background:url('../img/sjx.png') no-repeat 0 center;padding-left:22px;font-size:14px;font-weight:bold;font-family: Source Han Sans;}
.popinfo .left fieldset{border-top:1px #7C7C7C solid;margin-right:20px;}
.popinfo .left legend{padding-right:10px;}
.popinfo .left .body{margin:10px 10px 10px 22px;}
.popinfo .left ul{font-size:12px;font-family: Source Han Sans;color:#aaa;}
.popinfo .left li{line-height:18px;margin:10px 0;word-break:break-all;word-wrap: anywhere;}
.popinfo .left .tag{border:1px #FE9B0F solid;color:#FE9B0F;font-size:10px;border-radius:4px;padding:3px 10px;margin:0 10px 5px 0;display:inline-block;}
.popinfo .right{flex-grow:1;}
/*右边*/
.popinfo .right .header{height:50px;line-height:50px;text-align:center;}
.popinfo .right .line{display:inline-block;width:1px;height:10px;background:#D8D8D8;margin:0 30px;}
.popinfo .right .text{cursor:pointer;}
.popinfo .right .text.active{border-bottom:2px #FA9600 solid;padding-bottom:5px;}
.popinfo .right .body{margin:0 20px 20px 0;height:550px;overflow-y:auto;border-radius:3px;
	background:rgba(3, 3, 3, 0.2);box-shadow: inset 0px 0px 12px 0px rgba(24, 24, 24, 0.4);
}
/*知识图谱*/
.zstp{width:336px;height:550px;}
/*对抗详情*/
.dtxq{padding:20px 10px;}
.dtxq .line1{display:flex;margin:10px 0;}
.dtxq .src{flex-grow:1;background:url('../img/duikang/gjf.png') no-repeat 0 center;padding-left:30px;}
.dtxq .dest{width:70px;}
.dtxq .icon1{margin:0 auto;width:36px;height:36px;background:url('../img/duikang/ip5.png') no-repeat center center;}
.dtxq .icon2{margin:0 auto;width:36px;height:36px;background:url('../img/duikang/fsf.png') no-repeat center center;}
</style>