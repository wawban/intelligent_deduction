<template>
	<div class="layout">
    	<div class="layout-header">
    		<div class="backtask"><span @click="$router.push('/instrumentpanel')">&lt; 任务列表</span></div>
    		<div class="sysname">CybSeer智能推演平台</div>
    		<div class="seltask">
    			<img src="../img/sq.png"/>
    			<el-dropdown trigger="click" @command="chgtask">
			      <span class="el-dropdown-link">
			        {{taskname}}<i class="el-icon-arrow-down el-icon--right"></i>
			      </span>
			      <el-dropdown-menu slot="dropdown" class="taskmenu">
			        <el-dropdown-item v-for="(item,index) in tasklist" :key="index" :command="item">{{item.label}}</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>
				<img class="user" src="../img/user.png">
    		</div>
    	</div>
    	<div class="layout-container">
	    	<div class="layout-west">
		    	<div class="layout-count">
		    		<el-row :gutter="18">
	  					<el-col :span="13">
	  						<div style="position:relative">
		  						<div class="pie" id="pie"></div>
		  						<div class="score">综合评分</div>
	  						</div>
	  					</el-col>
	  					<el-col :span="11">
	  						<div class="field">
	  							<div class="number" style="color:#F6D535;">{{count.gjzcs}}</div>
	  							<div class="title">关键资产数</div>
	  						</div>
	  						<div class="field">
	  							<div class="number" style="color:#0085FF;">{{count.jkzcs}}</div>
	  							<div class="title">健康资产数</div>
	  						</div>
	  					</el-col>
	  					<el-col :span="13">
	  						<div class="field">
	  							<div class="number" style="color:#FA9600;">{{count.zczs}}</div>
	  							<div class="title">资产总数</div>
	  						</div>
	  					</el-col>
	  					<el-col :span="11">
	  						<div class="field">
	  							<div class="number" style="color:#E53A40;">{{count.bjzcs}}</div>
	  							<div class="title">边界资产数</div>
	  						</div>
	  					</el-col>
	  					<el-col :span="13">
	  						<div class="field">
	  							<div class="number" style="color:#FA9600;">{{count.zczhus}}</div>
	  							<div class="title">资产组数</div>
	  						</div>
	  					</el-col>
	  					<el-col :span="11">
	  						<div class="field">
	  							<div class="number" style="color:#29CA9B;">{{count.fhzcs}}</div>
	  							<div class="title">防护资产数</div>
	  						</div>
	  					</el-col>
					</el-row>
		    	</div>
		    	<div class="layout-path">
		    		<div class="title">
	    				<div>攻击路径清单</div>
	    			</div>
	    			<div class="path">
	    				<div class="box">
		    				<div class="item" v-for="(item,index) in path" :key="index" @mouseenter="pathEnter(item)" @mouseleave="pathLeave(item)">
		    					<div class="header" @click="pathSwitch(item)"><span :style="'border:4px '+pathColor(index)+' solid;'"></span>{{item.title}}</div>
		    					<div class="body" v-show="item.open">
		    						<div v-for="(item1,index1) in item.node" :key="index1">
			    						<div class="host">
			    							<div :class="index1==0?'icon':'icon p'" @click="selIcon(item1)"></div>
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
	    	<div class="layout-center" @click="centerCk">
	    		<div class="control">
	    			<div class="switch">
		    			<div class="item"><span class="icon" style="background:#0085FF;"></span><span class="text">业务图层</span><el-switch v-model="ywtc" active-color="#13ce66" inactive-color="#DCDFE6" disabled></el-switch></div>
		    			<div class="item"><span class="icon" style="background:#E53A40;"></span><span class="text">攻击图层</span><el-switch v-model="gjtc" @change="gjtcChange" active-color="#13ce66" inactive-color="#DCDFE6"></el-switch></div>
		    			<!--
		    			<div class="item"><span class="icon" style="background:#29CA9B;"></span><span class="text">防护图层</span><el-switch v-model="fhtc" active-color="#13ce66" inactive-color="#DCDFE6"></el-switch></div>
		    			<div class="item"><span class="icon" style="background:#FA9600;"></span><span class="text">风险图层</span><el-switch v-model="fxtc" active-color="#13ce66" inactive-color="#DCDFE6"></el-switch></div>
	    				-->
	    			</div>
	    		</div>
				<div id="canvas" class="canvas"></div>
	    		<div class="play">
	    			<input type="button" class="playbtn" @click="play"/>
	    			<span>|</span>
	    			<input type="button" class="replay" @click="replay"/>
	    		</div>
	    		<input type="button" class="backbig" v-show="backbigShow" @click="backbig"/>
	    	</div>
	    </div>
	    <!-- 基本信息 -->
		<jbxx ref="jbxx" />
    	<!-- 资产详情 -->
		<zcxq ref="zcxq" />
    	<!-- 知识图普 -->
		<zstp ref="zstp" />
    </div>
</template>
<script>
import * as d3 from 'd3';
import Raphael from 'raphael';
import jbxx from "./jbxx.vue";
import zcxq from "./zcxq.vue";
import zstp from "./zstp.vue";
var paper;
var clickTimer;
export default {
  components:{jbxx,zcxq,zstp},
  data() {
    return {
      colors:['#FA9600','#29CA9B','#CE6D39','#0085FF'],//路径颜色
      ywtc:true,//业务图层
      gjtc:true,//攻击图层
      fhtc:true,//防护图层
      fxtc:true,//风险图层
      backbigShow:false,//微观到大图按钮
      tasklist:[{//任务列表
      	value:1,
      	label:'服务器推演任务一'
      },{
      	value:2,
      	label:'服务器推演任务二'
      },{
      	value:3,
      	label:'服务器推演任务三'
      }],
      weiguan:null,//微观图数据
      wggraps:{},//微观——根据id记录图形
      graps:{},//主图——根据id记录主机图形
      lines:{},//主图——根据title记录线
      taskid:1,//当前任务id
      taskname:'未选择任务',//当前任务名
      count:{//统计数据
		  gjzcs: 221,//关键资产数
	      jkzcs: 222,//健康资产数
	      zczs: 223,//资产总数
	      bjzcs: 224,//边界资产数
	      zczhus: 225,//资产组数
	      fhzcs: 226,//防护资产数
	      score: 79.9,//综合得分
      },
      path:[{//攻击路径清单
      	open:true,
      	title:'最高价值路径（路径八）',
      	node:[
      		{id:1,ip:'192.168.3.123（起点）',desc:'内部网络',pass:'抓取评证技术等'},
      		{id:5,ip:'192.168.4.123(途径)',desc:'数据库服务器',pass:'渗透测试技术等'},
      		{id:9,ip:'192.168.5.123(途径)',desc:'邮件服务器',pass:'注入攻击等'},
      		{id:16,ip:'192.168.1.123(终点)',desc:'文件服务器'}
      	]
      },{
      	open:false,
      	title:'最隐蔽路径（路径六）',
      	node:[
      		{id:3,ip:'192.168.3.125（起点）',desc:'内部网络',pass:'抓取评证技术等'},
      		{id:14,ip:'192.168.5.128（途径）',desc:'数据库服务器',pass:'渗透测试技术等'},
      		{id:8,ip:'192.168.4.126（途径）',desc:'邮件服务器',pass:'注入攻击等'},
      		{id:18,ip:'192.168.1.125（终点）',desc:'文件服务器'}
      	]
      },{
      	open:false,
      	title:'最短路径（路径三）',
      	node:[
      		{id:10,ip:'192.168.5.124（起点）',desc:'内部网络',pass:'抓取评证技术等'},
      		{id:20,ip:'192.168.2.124（终点）',desc:'文件服务器'}
      	]
      }],
      nodes:[{//主图数据
      	name:'系统1',//资产组名称
      	number:20,//资产数量
      	depip:'192.168.0.1,192.168.0.2',//部门IP
      	depaddr:'重庆市九龙坡区石小路177号',//部门地址
      	fxzcs:11,//风险资产数量
      	syxmj:'业务受影响面积xxxxxxx',//业务受影响面积
      	yxzcz:'可能受影响资产组1',//可能受影响资产组
      	fxhx:'风险画像aaaa',//风险画像
      	children:[{
      		name:'系统1-1',
      		children:[{
	      		name:'系统1-1-1',
	      		number:4,
	      		children:[{
	      			id:1,
	      			type:'router',
		      		ip:'192.168.3.123'
		      	},{
	      			id:2,
	      			type:'fw',
		      		ip:'192.168.3.124'
		      	},{
	      			id:3,
	      			type:'ids',
		      		ip:'192.168.3.125'
		      	},{
	      			id:4,
	      			name:'资产名',
		      		ip:'192.168.3.126',
		      		type:'ips',
		      		typename:'terminal server',
		      		os:'centos 7',
		      		port:'80,443',
		      		src:'来源11',
		      		busin:'业务重要程度11',
		      		connectivity:'是',//连通性
		      		sdetetime:'首次探测时间xxx',
		      		edetetime:'最后探测时间xxx',
		      		sscantime:'首次扫描时间xxx',
		      		escantime:'最后扫描时间xxx',
		      		pgfz:'76.8',//评估分值
		      		fxhx:'风险画像1111',
		      		sgrmb:'潜在受感染目标1111',
		      		hdqx:'已获得权限1111',
		      		yxyw:'影响业务11111',
		      	}]
	      	},{
	      		name:'系统1-1-2',
	      		number:4,
	      		children:[{
	      			id:5,
	      			type:'camera',
		      		ip:'192.168.4.123'
		      	},{
	      			id:6,
		      		ip:'192.168.4.124'
		      	},{
	      			id:7,
		      		ip:'192.168.4.125'
		      	},{
	      			id:8,
		      		ip:'192.168.4.126'
		      	}]
	      	},{
	      		name:'系统1-1-3',
	      		number:7,
	      		children:[{
	      			id:9,
		      		ip:'192.168.5.123'
		      	},{
	      			id:10,
		      		ip:'192.168.5.124'
		      	},{
	      			id:11,
		      		ip:'192.168.5.125'
		      	},{
	      			id:12,
		      		ip:'192.168.5.126'
		      	},{
	      			id:13,
		      		ip:'192.168.5.127'
		      	},{
	      			id:14,
		      		ip:'192.168.5.128'
		      	},{
	      			id:15,
		      		ip:'192.168.5.129'
		      	}]
	      	}]
      	},{
      		name:'系统1-2',
      		number:4,
      		children:[{
      			id:16,
	      		ip:'192.168.1.123'
	      	},{
      			id:17,
	      		ip:'192.168.1.124'
	      	},{
      			id:18,
	      		ip:'192.168.1.125'
	      	},{
      			id:19,
	      		ip:'192.168.1.126'
	      	}]
      	}]
      },{
      	name:'系统2',
      	number:3,
      	children:[{
  			id:20,
      		ip:'192.168.2.124'
      	},{
  			id:21,
      		ip:'192.168.2.124'
      	},{
  			id:22,
      		ip:'192.168.2.124'
      	}]
      }]
    };
  },
  mounted() {
  	//创建综合得分pie图
  	this.createPie();
  	//主内容区域
  	this.drawConvas();
    //窗口改变大小重绘图形
    window.addEventListener('resize',this.drawConvas);
  },
  beforeDestroy() {
	window.removeEventListener('resize',this.drawConvas);
  },
  methods: {
  	drawConvas(){
  		var canvasDiv = document.getElementById('canvas');
	    var width = canvasDiv.clientWidth;
	    var height = canvasDiv.clientHeight;
	    if(paper){
	    	paper.remove();
	    }
	    this.lines = {};
	    this.wggraps = {};
      	this.graps = {};
      	
	    paper = Raphael('canvas',width,height);
	    //微观图
	    if(this.weiguan){
	    	var root = d3.hierarchy(this.weiguan).sum(function(d){return 1;});
	    	var pack = d3.pack().size([width,height]).padding(5);
	    	pack(root);
	    	if(root.data.number > 0 && root.data.number == root.children.length && root.children[0].data.ip){
		    	this.createWeiguan([root]);
	    	}else{
		    	this.createWeiguan(root.children||[]);
	    	}
	    }
	    //主图
	    else{
		    var root = d3.hierarchy({children:this.nodes}).sum(function(d){return d.ip?1:1000;});
		    var pack = d3.pack().size([width,height]).padding(10);
		    pack(root);
		    this.createGrap(root.children||[]);
		    if(this.gjtc){
			    this.createPath();
		    }
	    }
  	},
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
		      data:[{value:this.count.score}]
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
    pathColor(i){
    	var color = i<this.colors.length?this.colors[i]:this.colors[this.colors.length-1];
    	return color;
    },
    //切换任务
    chgtask(item){
    	this.taskid = item.value;
    	this.taskname = item.label;
    },
    //微观返回到大图
    backbig(){
    	this.weiguan = null;
    	this.backbigShow = false;
    	this.drawConvas();
    },
    //点击路径主机
    selIcon(item1){
    	var graphical = this.wggraps[item1.id] || this.graps[item1.id];
    	if(graphical){
    		var divElement = document.getElementById("canvas");
			var rect = divElement.getBoundingClientRect();
	    	this.$refs.zcxq.open(graphical.attr('cx')+rect.left,graphical.attr('cy')+rect.top,graphical.data('data'));
    	}
    },
    //点击路径箭头
    selPass(){
    	var divElement = document.getElementById("canvas");
		var rect = divElement.getBoundingClientRect();
    	this.$refs.zstp.open(rect.left,rect.top,{});
    },
    //攻击图层switch改变
    gjtcChange(b){
    	this.drawConvas();
    },
    //播放攻击路径
    pathAnim(circle,ps){
    	var self = this;
    	var index = circle.data('index');
    	if(index < ps.length){
    		var line = ps[index];
	    	var endCoord = line.getPointAtLength(line.getTotalLength());
   			circle.animate({
				cx:endCoord.x,
				cy:endCoord.y
		    }, 2000, function () {
		    	circle.data('index',index+2);
		   		self.pathAnim(circle,ps);
		    });
   		}else{
	    	circle.remove();
   		}
    },
    play(){
    	for(var i=0;i<this.path.length;i++){
    		var path = this.path[i];
    		var ps = this.lines[path.title];
    		var color = i<this.colors.length?this.colors[i]:this.colors[this.colors.length-1];
    		var startCoord = ps[0].getPointAtLength(0);
    		var circle = paper.circle(startCoord.x,startCoord.y,8);
			circle.attr({
			    fill:color,
			    'stroke-width':0
			});
			circle.data('index',0);
	    	this.pathAnim(circle,ps);
    	}
    },
    //重播
    replay(){
    	this.play();
    },
    //主图区域点击
    centerCk(){
    	this.$refs.jbxx.close();
    	this.$refs.zcxq.close();
    	this.$refs.zstp.close();
    },
    //鼠标移入路径，加粗显示路径
    pathEnter(item){
    	var ps = this.lines[item.title];
    	if(ps){
    		for(var i=0;i<ps.length;i++){
    			ps[i].attr('stroke-width',5);
    		}
    	}
    },
    //鼠标移出路径，取消加粗显示路径
    pathLeave(item){
    	var ps = this.lines[item.title];
    	if(ps){
    		for(var i=0;i<ps.length;i++){
    			ps[i].attr('stroke-width',1);
    		}
    	}
    },
    //主图画图
    createGrap(arr){
    	var self = this;
    	for(var i=0;i<arr.length;i++){
			var obj = arr[i];
			var data = obj.data || {};
			if(obj.x && obj.y && obj.r){
				var circle;
				//资产
				if(data.ip){
					circle = paper.circle(obj.x,obj.y,5);
					circle.attr({
					    fill:'#E9E9E9',
					    stroke:'#E9E9E9',
					    'stroke-width':1,
					});
					this.graps[data.id+''] = circle;
					//单击
					circle.click(function(e) {
						var me = this;
					    clearTimeout(clickTimer);
						clickTimer = setTimeout(function(){
					    	self.$refs.zcxq.open(e.clientX,e.clientY,me.data('data'));
						},300);
					});
				}
				//组
				else{
					circle = paper.circle(obj.x,obj.y,obj.r);
					circle.attr({
					    stroke:'#E9E9E9',
					    fill:'rgba(0, 0, 0, 0)',
					    'stroke-width':1,
					});
					//单击
					circle.click(function(e) {
						var me = this;
					    clearTimeout(clickTimer);
						clickTimer = setTimeout(function(){
					    	self.$refs.jbxx.open(e.clientX,e.clientY,me.data('data'));
						},300);
					});
					//双击
					circle.dblclick(function() {
					    clearTimeout(clickTimer);
					    self.weiguan = this.data('data');
					    self.drawConvas();
					   	self.backbigShow = true;
					});
				}
				//绑定数据
				circle.data('data',data);
			}
			if(obj.children){
				this.createGrap(obj.children);
			}
		}
    },
    //微观图画图
    createWeiguan(arr){
    	var self = this;
    	for(var i=0;i<arr.length;i++){
			var obj = arr[i];
			var data = obj.data || {};
			if(obj.x && obj.y && obj.r){
				var circle;
				//资产
				if(data.ip){
					const image = require("../img/weiguan/"+(data.type||'host')+".png");
					circle = paper.image(image,obj.x,obj.y,52,52);
					this.wggraps[data.id+''] = circle;
					//图标下方文字
					var text = paper.text(obj.x+25,obj.y+55,data.ip);
				    text.attr({
				      'font-size':10,
				      'fill':'white'
				    });
					//单击
					circle.click(function(e) {
						var me = this;
					    clearTimeout(clickTimer);
						clickTimer = setTimeout(function(){
					    	self.$refs.zcxq.open(e.clientX,e.clientY,me.data('data'));
						},300);
					});
				}
				//组
				else{
					circle = paper.circle(obj.x,obj.y,obj.r);
					circle.attr({
					    stroke:'#E9E9E9',
					    fill:'rgba(0, 0, 0, 0)',
					    'stroke-width':1,
					});
				}
				//绑定数据
				circle.data('data',data);
			}
			if(obj.children){
				this.createWeiguan(obj.children);
			}
		}
    },
    //主图画路线
    createPath(){
    	for(var i=0;i<this.path.length;i++){
    		var color = i<this.colors.length?this.colors[i]:this.colors[this.colors.length-1];
			var nodes = this.path[i].node;
			for(var j=0;j<nodes.length;j++){
				if(j+1<nodes.length){
					var n = nodes[j];
					var n1 = nodes[j+1];
					var g = this.graps[n.id];
					var g1 = this.graps[n1.id];
					if(g && g1){
						var startX = g.attr('cx');
						var startY = g.attr('cy');
						var endX = g1.attr('cx');
						var endY = g1.attr('cy');
						//线条
						const line = paper.path(`M${startX} ${startY}L${endX} ${endY}`);
					    line.attr({
							stroke:color,
							'stroke-width':1
					    });
					    //箭头
					    var angle = Math.atan2(endY - startY, endX - startX);
						var arrowLength = 10;
						var arrowPoint1 = {
						    x: endX - arrowLength * Math.cos(angle - Math.PI / 6),
						    y: endY - arrowLength * Math.sin(angle - Math.PI / 6)
						};
						var arrowPoint2 = {
						    x: endX - arrowLength * Math.cos(angle + Math.PI / 6),
						    y: endY - arrowLength * Math.sin(angle + Math.PI / 6)
						};
						var arrowPoint3 = {
						    x: endX,
						    y: endY
						};
						var arrow = paper.path("M" + arrowPoint1.x + " " + arrowPoint1.y +
	                       "L" + arrowPoint2.x + " " + arrowPoint2.y +
	                       "L" + arrowPoint3.x + " " + arrowPoint3.y);
						arrow.attr({
						    'stroke':color,
						    'fill':color
						});
					    //记录
					    var ps = this.lines[this.path[i].title];
					    if(!ps){
					    	ps = [];
					    	this.lines[this.path[i].title] = ps;
					    }
					    ps.push(line);
					    ps.push(arrow);
					}
				}
			}
		}
    }
  },
};
</script>
<style lang="less" scoped>
/*布局*/
.layout{display:flex;height:100%;flex-direction:column;background:black;}
.layout-container{flex-grow:1;display:flex;}
.layout-west{width:288px;margin:18rem;display:flex;flex-direction:column;}
.layout-count{height:320px;border-radius:5px;box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.3);}
.layout-path{flex-grow:1;border-radius:5px;box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.3);margin-top:18rem;display: flex;flex-direction: column;}
.layout-center{position:relative;flex-grow:1;margin-top:18rem;margin-right:18rem;margin-bottom:18rem;}
/*header头*/
.layout-header{height:60rem;background: #242322;position:relative;}
.layout-header .backtask{position:absolute;left:0;top:0;height:60rem;line-height:60rem;font-size: 18px;margin-left:20px;z-index:1;}
.layout-header .backtask span{cursor:pointer;font-weight: 500;}
.layout-header .sysname{position:absolute;left:0;top:0;right:0;height:60rem;line-height:60rem;text-align:center;font-size: 24px;font-weight: bold;}
.layout-header .seltask{position:absolute;right:0;top:0;height:60rem;line-height:60rem;}
.seltask .user{width:32rem;margin:0 30px 0 30px;}
.seltask .el-dropdown{margin-left:10px;color:white;font-size:16px;font-weight:500;}
.taskmenu{background-color:#505050;border:none;}
.taskmenu .el-dropdown-menu__item{color:white;}
.taskmenu .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover{background-color:transparent;font-weight:bold;}
/*统计数据*/
.layout-count .field{padding:5px 9px 0 9px;border-radius:3px;box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.4);
	margin-bottom:5px;height:67px;background:url('../img/4521.png') no-repeat right 12px;
}
.layout-count{padding:18px 18px 0 18px;}
.layout-count .field .title{font-family: Source Han Sans;font-weight: 500;color: #AAAAAA;}
.layout-count .field .number{font-family: Arial;font-size: 24px;font-weight: 900;}
.layout-count .pie{height:139px;}
.layout-count .score{position:absolute;bottom:12px;width:100%;font-family:Source Han Sans;font-size:14px;font-weight:bold;color:white;text-align:center;}
/*攻击路径*/
.layout-path .title{border-bottom:1px #4A4A4A solid;height:52px;padding:17px 0 0 20px;}
.layout-path .title div{padding-left:10px;border-left:3px #FA9600 solid;font-family: Source Han Sans;font-size: 18px;font-weight: 500;
	height:18px;line-height:18px;
}
.layout-path .path{flex-grow:1;position:relative;}
.layout-path .path .box{position:absolute;left:0;top:0;right:0;bottom:0;overflow-y:auto;padding:5px 10px;}
.layout-path .path .item{margin:5px 0;}
.layout-path .path .header{height:36px;line-height:36px;font-family: Source Han Sans;font-size: 14px;padding:0 0 0 10px;
	background:url('../img/down.png') no-repeat right center #292929;
}
.layout-path .path .header span{display:inline-block;border-radius:4px;margin-right:8px;}
.layout-path .path .body{padding:10px 0 10px 17px;}
.layout-path .path .host{display:flex;}
.layout-path .path .host .icon{height:44px;width:44px;background:url('../img/hip.png') no-repeat;background-size:100% 100%;cursor:pointer;}
.layout-path .path .host .icon.p{background:url('../img/lip.png') no-repeat;background-size:100% 100%;}
.layout-path .path .host .ip{flex-grow: 1;}
.layout-path .path .host .ip div{margin:5px 0 3px 0;font-family: Source Han Sans;font-size: 12px;}
.layout-path .path .host .ip span{font-family: Source Han Sans;font-size: 10px;color:#aaa;}
.layout-path .path .allow{height:23px;line-height:23px;margin:5px 0;}
.layout-path .path .allow img{margin:0 15px 0 17px;cursor:pointer;}
/*主图区*/
.layout-center .control{position:absolute;top:0;bottom:0;left:0;width:150px;padding:18px 0 0 10px;z-index:1;}
.layout-center .canvas{position:absolute;top:0;right:0;bottom:0;left:130px;}
.layout-center .play{position:absolute;bottom:20px;right:60px;border:1px #3E3E3E solid;padding:5px 10px;border-radius:5px;}
.layout-center .play input{cursor:pointer;}
.layout-center .play span{color:#3E3E3E;margin:0 5px;}
.layout-center .playbtn{width:40px;height:40px;background:url('../img/play.png') no-repeat;}
.layout-center .replay{width:40px;height:40px;background:url('../img/replay.png') no-repeat;}
/*switch按钮*/
.layout-center .control .item{margin-bottom:15px;}
.layout-center .control .item .icon{display:inline-block;width:12px;height:12px;}
.layout-center .control .item .text{font-size:16px;margin:0 10px;}
/*返回按钮*/
.backbig{position:absolute;background:url('../img/weiguan/back.png') no-repeat;cursor:pointer;width:65px;height:24px;top:0;right:0;}
</style>