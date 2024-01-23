<template>
	<div class="layout">
    	<div class="west">
    		<div class="count">
    			<el-row :gutter="18">
  					<el-col :span="13">
  						<div style="position:relative">
	  						<div class="pie" id="pie"></div>
	  						<div class="score">综合评分</div>
  						</div>
  					</el-col>
  					<el-col :span="11">
  						<div class="field">
  							<div class="number" style="color:#F6D535;">{{gjzcs}}</div>
  							<div class="title">关键资产数</div>
  						</div>
  						<div class="field">
  							<div class="number" style="color:#0085FF;">{{jkzcs}}</div>
  							<div class="title">健康资产数</div>
  						</div>
  					</el-col>
  					<el-col :span="13">
  						<div class="field">
  							<div class="number" style="color:#FA9600;">{{zczs}}</div>
  							<div class="title">资产总数</div>
  						</div>
  					</el-col>
  					<el-col :span="11">
  						<div class="field">
  							<div class="number" style="color:#E53A40;">{{bjzcs}}</div>
  							<div class="title">边界资产数</div>
  						</div>
  					</el-col>
  					<el-col :span="13">
  						<div class="field">
  							<div class="number" style="color:#FA9600;">{{zczhus}}</div>
  							<div class="title">资产组数</div>
  						</div>
  					</el-col>
  					<el-col :span="11">
  						<div class="field">
  							<div class="number" style="color:#29CA9B;">{{fhzcs}}</div>
  							<div class="title">防护资产数</div>
  						</div>
  					</el-col>
				</el-row>
				
    		</div>
    		<div class="paths">
    			<div class="title">
    				<div>攻击路径清单</div>
    			</div>
    			<div class="path">
    				<div class="box">
	    				<div class="item" v-for="(item,index) in path" :key="index" @mouseenter="pathEnter" @mouseleave="pathLeave">
	    					<div class="header" @click="pathSwitch(item)"><span :style="'border:4px '+item.color+' solid;'"></span>{{item.title}}</div>
	    					<div class="body" :style="item.open===true?'':'display:none;'">
	    						<div v-for="(item1,index1) in item.node" :key="index1">
		    						<div class="host">
		    							<div :class="index1==0?'icon':'icon p'" @click="selIcon"></div>
		    							<div class="ip">
		    								<div>{{item1.ip}}</div>
		    								<span>{{item1.desc}}</span>
		    							</div>
		    						</div>
		    						<div class="allow" v-if="item1.pass != null">
		    							<img src="../img/37.png" @click="selPass"/>{{item1.pass}}
		    						</div>
		    					</div>
	    					</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="center">
    		<div class="control">控制区</div>
    		<div class="play">播放按钮区</div>
    		<div id="canvas" class="canvas"></div>
    	</div>
    </div>
</template>
<script>
import * as d3 from 'd3';
import Raphael from 'raphael';
//import Konva from 'konva';
var paper;
export default {
  data() {
    return {
      gjzcs: 221,//关键资产数
      jkzcs: 222,//健康资产数
      zczs: 223,//资产总数
      bjzcs: 224,//边界资产数
      zczhus: 225,//资产组数
      fhzcs: 226,//防护资产数
      score: 79.9,//综合得分
      path:[{//攻击路径清单
      	color:'#FA9600',
      	open:true,
      	title:'最高价值路径（路径八）',
      	node:[
      		{ip:'192.168.0.100（起点）',desc:'内部网络',pass:'抓取评证技术等'},
      		{ip:'192.168.0.101(途径)',desc:'数据库服务器',pass:'渗透测试技术等'},
      		{ip:'192.168.0.102(途径)',desc:'邮件服务器',pass:'注入攻击等'},
      		{ip:'192.168.0.103(终点)',desc:'文件服务器'}
      	]
      },{
      	color:'#29CA9B',
      	open:false,
      	title:'最隐蔽路径（路径六）',
      	node:[
      		{ip:'192.168.0.200',desc:'内部网络',pass:'抓取评证技术等'},
      		{ip:'192.168.0.201',desc:'数据库服务器',pass:'渗透测试技术等'},
      		{ip:'192.168.0.202',desc:'邮件服务器',pass:'注入攻击等'},
      		{ip:'192.168.0.203',desc:'文件服务器'}
      	]
      },{
      	color:'#CE6D39',
      	open:false,
      	title:'最短路径（路径三）',
      	node:[
      		{ip:'192.168.1.200',desc:'内部网络',pass:'抓取评证技术等'},
      		{ip:'192.168.1.203',desc:'文件服务器'}
      	]
      },{
      	color:'#0085FF',
      	open:false,
      	title:'路径一',
      	node:[
      		{ip:'192.168.2.200',desc:'内部网络',pass:'抓取评证技术等'},
      		{ip:'192.168.2.201',desc:'数据库服务器',pass:'渗透测试技术等'},
      		{ip:'192.168.2.203',desc:'文件服务器'}
      	]
      },{
      	color:'#0085FF',
      	open:false,
      	title:'路径二',
      	node:[
      		{ip:'192.168.2.200',desc:'内部网络',pass:'抓取评证技术等'},
      		{ip:'192.168.2.201',desc:'数据库服务器',pass:'渗透测试技术等'},
      		{ip:'192.168.2.203',desc:'文件服务器'}
      	]
      }],
      nodes:[{//主图数据
      	name:'系统1',
      	children:[{
      		name:'系统1-1',
      		children:[{
	      		name:'系统1-1-1',
	      		children:[{
		      		ip:'192.168.3.123'
		      	},{
		      		ip:'192.168.3.124'
		      	},{
		      		ip:'192.168.3.125'
		      	},{
		      		ip:'192.168.3.126'
		      	}]
	      	},{
	      		name:'系统1-1-2',
	      		children:[{
		      		ip:'192.168.4.123'
		      	},{
		      		ip:'192.168.4.124'
		      	},{
		      		ip:'192.168.4.125'
		      	},{
		      		ip:'192.168.4.126'
		      	}]
	      	},{
	      		name:'系统1-1-3',
	      		children:[{
		      		ip:'192.168.5.123'
		      	},{
		      		ip:'192.168.5.124'
		      	},{
		      		ip:'192.168.5.125'
		      	},{
		      		ip:'192.168.5.126'
		      	},{
		      		ip:'192.168.5.127'
		      	},{
		      		ip:'192.168.5.128'
		      	},{
		      		ip:'192.168.5.129'
		      	}]
	      	}]
      	},{
      		name:'系统1-2',
      		children:[{
	      		ip:'192.168.1.123'
	      	},{
	      		ip:'192.168.1.124'
	      	},{
	      		ip:'192.168.1.125'
	      	},{
	      		ip:'192.168.1.126'
	      	}]
      	}]
      },{
      	name:'系统2',
      	children:[{
      		ip:'192.168.2.124'
      	},{
      		ip:'192.168.2.124'
      	},{
      		ip:'192.168.2.124'
      	}]
      }]
    };
  },
  mounted() {
  	//创建综合得分pie图
  	this.createPie();
  	//主内容区域
    var canvasDiv = document.getElementById('canvas');
    var width = canvasDiv.clientWidth;
    var height = canvasDiv.clientHeight;
    var pack = d3.pack().size([width,height]).padding(10);
    var root = d3.hierarchy({children:this.nodes}).sum(function(d){return d.type==1?1:1000;});
    pack(root);
    //console.info(root.children||[]);
    
    paper = Raphael('canvas',width,height);
    this.createGroup(root.children||[]);
  },
  methods: {
  	//创建综合得分pie图
    createPie() {
      this.myChart = this.$echarts.init(document.getElementById('pie'));
      this.myChart.setOption({
		  series: [
		    {
		      type: 'gauge',
		      radius: '100%',
		      itemStyle: {
		        color: '#FF9E10'
		      },
		      progress: {
		        show: true,
		        width: 15
		      },
		      axisLine: {
		        lineStyle: {
		          color: [[1, '#37393B']],
		          width: 15
		        }
		      },
		      axisTick:{show: false},
		      pointer:{show: false},
		      splitLine:{show: false},
		      axisLabel: {
		        distance: -19,
		        color: '#aaa',
		        fontSize: 10
		      },
		      anchor:{show: false},
		      title:{show: false},
		      detail: {
		        valueAnimation: true,
		        fontSize:24,
		        color: 'inherit',
		        offsetCenter: [0,0]
		      },
		      data:[{value:this.score}]
		    }
		  ]
		});
    },
    //关闭、展开路径
    pathSwitch(item){
    	if(item.open == true){
    		item.open = false;
    	}else{
    		item.open = true;
	    	for(var i=0;i<this.path.length;i++){
	    		var o = this.path[i];
	    		if(o.title != item.title){
	    			o.open = false;
	    		}
	    	}
    	}
    },
    //点击路径主机
    selIcon(){
    	alert('点击主机');
    },
    //点击路径箭头
    selPass(){
    	alert('点击路径');
    },
    //鼠标移入路径，加粗显示路径
    pathEnter(){
    	console.info('加粗显示路径');
    },
    //鼠标移出路径，取消加粗显示路径
    pathLeave(){
    	console.info('取消加粗显示路径');
    },
    //主图画组
    createGroup(arr){
    	for(var i=0;i<arr.length;i++){
			var obj = arr[i];
			var data = obj.data || {};
			if(obj.x && obj.y && obj.r){
				var circle;
				//资产
				if(data.ip){
					circle = paper.circle(obj.x,obj.y,2);
					circle.attr({
					    fill:'#E9E9E9',
					    stroke:'#E9E9E9',
					    'stroke-width':1,
					});
				}
				//组
				else{
					circle = paper.circle(obj.x,obj.y,obj.r);
					circle.attr({
					    stroke:'#E9E9E9',
					    'stroke-width':1,
					});
				}
			}
			if(obj.children){
				this.createGroup(obj.children);
			}
		}
    }
  },
};
</script>
<style lang="less" scoped>
	.layout{display: flex;height:100%;}
	.layout .west{width: 288px;display: flex;flex-direction: column;}
	.west .count,.west .paths{border-radius: 5px;box-sizing: border-box;border:1px solid rgba(255, 255, 255, 0.3);}
	.west .count{margin-bottom:20px;height:318px;padding:18px;}
	.west .paths{flex-grow: 1;}
	
	.count .field{
		padding:5px 9px 0 9px;
		border-radius: 3px;
		box-sizing: border-box;
		border: 1px solid rgba(255, 255, 255, 0.4);
		margin-bottom:5px;
		height:67px;
		background:url('../img/4521.png') no-repeat right 12px;
	}
	.count .field .title{
		font-family: Source Han Sans;
		font-weight: 500;
		color: #AAAAAA;
	}
	.count .field .number{
		font-family: Arial;
		font-size: 24px;
		font-weight: 900;
	}
	.count .pie{
		height:139px;
	}
	.count .score{
		position:absolute;
		bottom:12px;
		width:100%;
		font-family: Source Han Sans;
		font-size: 14px;
		font-weight: bold;
		color:white;
		text-align:center;
	}

	.paths{display: flex;flex-direction: column;}
	.paths .title{
		border-bottom:1px #4A4A4A solid;
		height:52px;
		padding:17px 0 0 20px;
	}
	.paths .title div{
		padding-left:10px;
		border-left:3px #FA9600 solid;
		font-family: Source Han Sans;
		font-size: 18px;
		font-weight: 500;
		height:18px;
		line-height:18px;
	}
	.paths .path{flex-grow:1;position:relative;}
	.paths .path .box{position:absolute;left:0;top:0;right:0;bottom:0;overflow-y:auto;padding:5px 10px;}
	.paths .path .item{margin:5px 0;}
	.paths .path .header{
		height:36px;line-height:36px;font-family: Source Han Sans;font-size: 14px;padding:0 0 0 10px;background:url('../img/down.png') no-repeat right center #292929;
	}
	.paths .path .header span{display:inline-block;border-radius:4px;margin-right:8px;}
	.paths .path .body{padding:10px 0 10px 17px;}
	.paths .path .host{display:flex;}
	.paths .path .host .icon{height:44px;width:44px;background:url('../img/hip.png') no-repeat;background-size:100% 100%;cursor:pointer;}
	.paths .path .host .icon.p{background:url('../img/lip.png') no-repeat;background-size:100% 100%;}
	.paths .path .host .ip{flex-grow: 1;}
	.paths .path .host .ip div{
		margin:5px 0 3px 0;
		font-family: Source Han Sans;
		font-size: 12px;
	}
	.paths .path .host .ip span{
		font-family: Source Han Sans;
		font-size: 10px;
		color:#aaa;
	}
	.paths .path .allow{height:23px;line-height:23px;margin:5px 0;}
	.paths .path .allow img{margin:0 15px 0 17px;cursor:pointer;}
	
	.layout .center{flex-grow:1;margin-left:20px;position:relative;}
	.layout .control{position:absolute;top:0;bottom:0;left:0;width:130px;background:gray;}
	.layout .play{position:absolute;bottom:20px;width:200px;right:60px;height:50px;background:gray;}
	.layout .canvas{position:absolute;top:0;right:0;bottom:0;left:130px;}
</style>