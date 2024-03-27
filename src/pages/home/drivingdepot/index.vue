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
	    				<input type="button" v-show="showPathDetail" value="&lt; 返回" @click="canPathDetail"/>
	    				<div v-if="showPathDetail">攻击路径详情</div>
	    				<div v-else>攻击路径清单</div>
	    			</div>
	    			<div class="path">
	    				<div :class="{box:true,nopath:path.length==0}">
		    				<div class="item" v-for="(item,index) in path" :key="index" @mouseenter="pathEnter(item)" @mouseleave="pathLeave(item)">
		    					<div :class="{'header':true,'open':item.open}" @click="pathSwitch(item)">
		    						<span class="icon" :style="'border:4px '+pathColor(index)+' solid;'"></span>
		    						{{item.title}}
		    						<span class="detail" @click.stop="pathDetail(item)"></span>
		    					</div>
		    					<div :class="{'body':true,'detail':item.detail}" v-show="item.open">
		    						<div class="host" v-for="(item1,index1) in item.node" :key="index1">
		    							<div class="arrow" @click="selPass" v-if="item1.pass"></div>
		    							<div :class="index1==0?'icon':'icon p'" @click="selIcon(item1)"></div>
		    							<div class="ip">
		    								<div>{{item1.ip}}</div>
		    								<template v-if="item.detail">
		    									<span v-for="(item2,index2) in item1.desc" :key="index2">{{item2}}</span>
		    								</template>
		    								<template v-else>
		    									<span>{{item1.desc[0]}}</span>
		    								</template>
		    								<span class="pass" v-if="item1.pass">{{item1.pass}}</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    			</div>
		    	</div>
	    	</div>
	    	<div class="layout-center" @click="centerCk">
	    		<div :class="{'tuli':true,'show':weiguan != null}">
	    			<div>图例</div>
	    			<img src="../img/weiguan/5293.png"/>
	    			<img src="../img/weiguan/5292.png"/>
	    			<img src="../img/weiguan/5291.png"/>
	    			<img src="../img/weiguan/5290.png"/>
	    		</div>
	    		<div :class="{'ttuli':true,'show':weiguan == null}">
	    			<img src="../img/4842.png"/>
	    		</div>
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
import {
  infer_tasks,results_summary,results_paths,results_graph
} from "@/api/steer";
import * as d3 from 'd3';
import Raphael from 'raphael';
import jbxx from "./jbxx.vue";
import zcxq from "./zcxq.vue";
import zstp from "./zstp.vue";
var paper;
var clickTimer;
//六边形间距
var padding = 15;
//检测指定位置是否已经存在六边形
var isPointInside = function(x,y,r,siblings){
	for(var i=0;i<siblings.length;i++){
		var s = siblings[i];
		var height = (Math.sqrt(3) / 2) * s.r;
		var x1 = s.x - (s.r/2);
		var y1 = s.y - height;
		var x2 = s.x + (s.r/2);
		var y2 = s.y + height;
		if(x >= x1 && x <= x2 && y >= y1 && y <= y2){
			return true;
		}
		for (var j = 0; j < 6; j++) {
			var angle = (2 * Math.PI / 6) * j;
			var cx = x + r * Math.cos(angle);
			var cy = y + r * Math.sin(angle);
			if(cx >= x1 && cx <= x2 && cy >= y1 && cy <= y2){
				return true;
			}
		}
	}
	return false;
};

var nextInt = function(max){
	return Math.floor(Math.random() * (max + 1));
};

var addGroup = function(nodes){
	var hasHost = false;
	var hasGroup = false;
	nodes.forEach(function(item,index){
		if(item.ip){
			hasHost = true;
		}else{
			hasGroup = true;
		}
	});
	for(var i=0;i<nodes.length;i++){
		if(hasHost && hasGroup && nodes[i].ip){
			nodes[i] = {children:[nodes[i]]};
		}else if(nodes[i].children){
			addGroup(nodes[i].children);
		}
	}
};

export default {
  components:{jbxx,zcxq,zstp},
  data() {
    return {
      colors:['#FA9600','#29CA9B','#CE6D39','#0085FF'],//路径颜色
      ywtc:true,//业务图层
      gjtc:true,//攻击图层
      fhtc:true,//防护图层
      fxtc:true,//风险图层
      showPathDetail:false,//攻击路径详情返回按钮显示
      backbigShow:false,//微观到大图按钮
      tasklist:[],//任务列表
      weiguan:null,//微观图数据
      wggraps:{},//微观——根据id记录图形
      graps:{},//主图——根据id记录主机图形
      lines:{},//主图——根据title记录攻击路径
      taskid:null,//当前任务id
      taskname:'未选择任务',//当前任务名
      count:{//统计数据
		  gjzcs: 0,//关键资产数
	      jkzcs: 0,//健康资产数
	      zczs: 0,//资产总数
	      bjzcs: 0,//边界资产数
	      zczhus: 0,//资产组数
	      fhzcs: 0,//防护资产数
	      score: 0//综合得分
      },
      path:[],//攻击路径清单
      nodes:[],//主图数据
      attack:[]//主图攻击路径
    };
  },
  mounted() {
  	//创建综合得分pie图
  	this.createPie();
    //窗口改变大小重绘图形
    window.addEventListener('resize',this.drawConvas);
  },
  beforeDestroy() {
	window.removeEventListener('resize',this.drawConvas);
  },
  created() {
  	this.getTaskData();
  },
  methods: {
  	//任务列表
    getTaskData() {
		infer_tasks({}).then((res) => {
			var defid = this.$route.query.id;
			for(var i=0;i<res.results.length;i++){
				var obj = res.results[i];
				this.tasklist.push({id:obj.latest_result_id,label:obj.name});
				if(defid != null && defid == obj.latest_result_id){
					this.taskid = obj.latest_result_id
					this.taskname = obj.name;
				}
			}
			if(res.results.length > 0){
				if(!this.taskid){
					this.taskname = res.results[res.results.length-1].name;
					this.taskid = res.results[res.results.length-1].latest_result_id;
				}
				this.getdata();
			}
		});
    },
  	//初始请求
    getdata() {
    	//统计数据
		results_summary(this.taskid).then((res) => {
			this.count = {
			  gjzcs: res.count_exposures,
		      jkzcs: res.count_healths,
		      zczs: res.count_assets,
		      bjzcs: res.count_edges,
		      zczhus: res.count_asset_groups,
		      fhzcs: res.count_shields,
		      score: res.risk_score
	      	};
	      	this.myChart.setOption({
			  series: [
			    {
			      data:[{value:this.count.score}]
			    }
			  ]
			});
		});
		//攻击路径
		results_paths(this.taskid).then((res) => {
			var path = [];
			for(var i=0;i<res.length;i++){
				var nodes = [];
				for(var j=0;j<res[i].series.length;j++){
					var obj = res[i].series[j];
					nodes.push({
						id:obj.node.id,
						ip:obj.node.name,
						desc:[obj.node.label],pass:obj.edge?obj.edge.label:null
					});
				}
				path.push({
					open:i==0,
					detail:false,
					id:res[i].id,
					title:res[i].name,
					node:nodes
				});
			}
			this.path = path;
			/*this.path = [{
		      	open:true,
		      	detail:false,
		      	id:'xxx-zzz',
		      	title:'最高价值路径（路径八）',
		      	node:[
		      		{id:1,ip:'192.168.3.123（起点）',desc:['内部网络','内部网络11','内部网络22'],pass:'抓取评证技术等'},
		      		{id:5,ip:'192.168.4.123(途径)',desc:['数据库服务器','数据库服务器11','数据库服务器22'],pass:'渗透测试技术等'},
		      		{id:9,ip:'192.168.5.123(途径)',desc:['邮件服务器','邮件服务器11','邮件服务器22'],pass:'注入攻击等'},
		      		{id:16,ip:'192.168.1.123(终点)',desc:['文件服务器','文件服务器111','文件服务器222']}
		      	]
		      },{
		      	open:false,
		      	detail:false,
		      	id:'xxx-yyy',
		      	title:'最隐蔽路径（路径六）',
		      	node:[
		      		{id:3,ip:'192.168.3.125（起点）',desc:['内部网络','内部网络11','内部网络22'],pass:'抓取评证技术等'},
		      		{id:14,ip:'192.168.5.128（途径）',desc:['数据库服务器','数据库服务器11','数据库服务器22'],pass:'渗透测试技术等'},
		      		{id:8,ip:'192.168.4.126（途径）',desc:['邮件服务器','邮件服务器11','邮件服务器22'],pass:'注入攻击等'},
		      		{id:18,ip:'192.168.1.125（终点）',desc:['文件服务器','文件服务器111','文件服务器222']}
		      	]
		      }]*/
		});
		//主图数据
		results_graph(this.taskid).then((res) => {
			var nodes = [];
			var groupEntry = {};
			var ns = res.base_graph.nodes;
			for(var i=0;i<ns.length;i++){
				var node = ns[i];
				//组装组
				var groupNames = node.props.asset_group.fullname.split('/');
				var groupIds = node.props.asset_group.fullpath.split('/');
				var pArray = nodes;
				for(var j=0;j<groupIds.length;j++){
					var group = groupEntry[groupIds[j]];
					if(!group){
						group = {
							id:groupIds[j],
							name:groupNames[j].trim(),
							children:[]
						};
						groupEntry[groupIds[j]] = group;
						pArray.push(group);
					}
					pArray = group.children;
				}
				//资产
				pArray.push({
					id:node.props.asset_id,
	      			type:node.props.type,
		      		ip:node.props.ip
				});
			}
			//小圆点不能单独出现，如果出现了得给它加个组
			addGroup(nodes);
			
			this.nodes = nodes;
			/*this.nodes = [{//主图数据
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
			      			id:'1',
			      			type:'Host',
				      		ip:'192.168.3.123'
				      	},{
			      			id:'4',
			      			name:'资产名',
				      		ip:'192.168.3.126',
				      		type:'IPS',
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
			      			id:'5',
			      			type:'camera',
				      		ip:'192.168.4.123'
				      	},{
			      			id:'6',
				      		ip:'192.168.4.124'
				      	}]
			      	},{
			      		name:'系统1-1-3',
			      		number:7,
			      		children:[{
			      			id:'9',
				      		ip:'192.168.5.123'
				      	},{
			      			id:'10',
				      		ip:'192.168.5.124'
				      	}]
			      	}]
		      	},{
		      		name:'系统1-2',
		      		number:4,
		      		children:[{
		      			id:'16',
			      		ip:'192.168.1.123'
			      	},{
		      			id:'17',
			      		ip:'192.168.1.124'
			      	}]
		      	}]
		      }]*/
		      
			//攻击路线
			var attack = [];
			var attackEntry = {};
			res.series.forEach(function(item,index){
				if(item.edges){
					item.edges.forEach(function(item1,index1){
						var lines = attackEntry[item1.props.path_id];
						if(!lines){
							lines = [];
							attackEntry[item1.props.path_id] = lines;
							attack.push({id:item1.props.path_id,lines:lines});
						}
						item1.props.graph.edges.forEach(function(item2,index2){
							lines.push({
								source:item2.source,
								target:item2.target,
								label:item2.label
							});
						});
					});
				}
			});
			/*this.attack = [{
				id:'id1111',
				lines:[{
					source:'xxxx',
					target:'zzzz',
					label:'攻击'
				},{
					source:'aaaa',
					target:'bbb',
					label:'勾引'
				}]
			}];*/
			this.attack = attack;
			
			this.drawConvas();
		});
    },
    //画六边形
	drawHexagon(data,x,y,r,color){
		var self = this;
		//n边形组
		var points = [];
		var n = 6;//几边形
		for (var j = 0; j < n; j++) {
			var angle = (2 * Math.PI / n) * j;
			var cx = x + r * Math.cos(angle);
			var cy = y + r * Math.sin(angle);
			points.push(cx, cy);
		}
		var g = paper.path("M" + points[0] + " " + points[1] + "L" + points.join(" ") + "Z");
		g.toBack();
		g.attr({
			stroke:color||'#E9E9E9',
			fill:'rgba(0, 0, 0, 0)',
			'stroke-width':1.5
		});
		//单击
		g.click(function(e) {
			var d = this.data('data');
			//没名字的组是只有资产界面加的一个空组，则不显示
			if(d.name){
			    clearTimeout(clickTimer);
				clickTimer = setTimeout(function(){
			    	self.$refs.jbxx.open(e.clientX,e.clientY,d);
				},300);
			}
		});
		//双击
		g.dblclick(function() {
		    clearTimeout(clickTimer);
		    self.weiguan = this.data('data');
		    self.drawConvas();
		   	self.backbigShow = true;
		});
		g.data('data',data);
		
		return g;
	},
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
	    	var pack = d3.pack().size([width,height]).padding(padding);
	    	pack(root);
	    	this.createWeiguan([root]);
	    }
	    //主图
	    else{
		    var item = this.createGrap(this.nodes.length > 0 ? this.nodes[0] : [],width/2,height/2);
		    //整体居中
		    if(item){
				paper.forEach(function(element) {
				    element.translate(width/2 - item.x,height/2 - item.y);
				});
		    }
		    //主图攻击路线
		    if(this.gjtc){
			    this.createAttack();
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
    //攻击路径详情
    pathDetail(item){
    	this.showPathDetail = true;
    	for(var i=0;i<this.path.length;i++){
    		var path = this.path[i];
			path.preopen = path.open === true;
    		if(path.title == item.title){
    			path.detail = true;
    			path.open = true;
    		}else{
    			path.detail = false;
    			path.open = false;
    		}
    	}
    },
    //取消攻击路径详情
    canPathDetail(){
    	this.showPathDetail = false;
    	for(var i=0;i<this.path.length;i++){
    		var path = this.path[i];
    		path.detail = false;
    		path.open = path.preopen;
    	}
    },
    //切换任务
    chgtask(item){
    	this.taskid = item.id;
    	this.taskname = item.label;
    	this.getdata();
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
    		if(ps){
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
    	var ps = this.lines[item.id];
    	if(ps){
    		for(var i=0;i<ps.length;i++){
    			ps[i].attr('stroke-width',1);
    		}
    	}
    },
    //主图画图
    createGrap(node,x,y){
      var self = this;
      if(!node.children || node.children.length == 0){
      	return null;
      }
	  //最里层组
	  if(node.children[0].ip){
		  var group = paper.set();
		  var cx = nextInt(600);
		  var cy = nextInt(600);
		  var r,lines;
		  var rowledge;//行距
		  var colledge;//列距
		  if(node.children.length <= 7){
			  r = 24;
			  lines = [2,3,2];
			  rowledge = 4;
			  colledge = 5;
		  }else if(node.children.length <= 31){
			  r = 54;
			  lines = [3,5,7,7,5,4];
			  rowledge = 7;
			  colledge = 6;
		  }else{
			  r = 72;
			  lines = [5,6,7,8,9,8,7,7,6];
			  rowledge = 6;
			  colledge = 7;
		  }
		  //里面的点
		  var cR = 3;//圆点半径
		  var edge = (Math.sqrt(3) / 2) * r;
		  var sy = cy - edge;
		  
		  var index = 0;
		  b:for (var line=0;line<lines.length;line++) {
			  var tWidth = lines[line]*cR*2 + lines[line]*colledge - colledge;
			  var sx = cx - tWidth/2 + cR;
			  sy = sy + rowledge + cR*2;
			  for (var col=0;col<lines[line];col++) {
			  	  var data = node.children[index];
				  var d = paper.circle(sx,sy,cR);
				  d.attr({
					  fill:'#E9E9E9',
					  stroke:'#E9E9E9',
					  'stroke-width':0
				  });
				  this.graps[data.id] = d;
				  //单击
				  d.click(function(e) {
				  	  var d = this.data('data');
				  	  clearTimeout(clickTimer);
					  clickTimer = setTimeout(function(){
						  self.$refs.zcxq.open(e.clientX,e.clientY,d);
					  },300);
				  });
				  d.data('data',data);
				  group.push(d);
				  sx = sx + colledge + cR*2;
				  if(++index >= 63 || index >= node.children.length){
					  break b;
				  }
			  }
		  }
		  //六边形
		  var g = this.drawHexagon(node,cx,cy,r);
		  group.push(g);
		  return {r:r,x:cx,y:cy,g:group,h:g};
	  }else{
		  var group = paper.set();
		  var childs = [];
		  node.children.forEach(function(item,index){
		  	  var info = self.createGrap(item,x,y);
		  	  if(info){
				  childs.push(info);
		  	  }
		  });
		  //排序
		  childs.sort(function(a,b){
			  return b.r - a.r;
		  });
		  //调整布局
	  	  var siblings = [];
	  	  childs.forEach(function(item,index){
			  var nx,ny;
			  if(index == 0){
				  nx = x;
				  ny = y;
			  }else{
				  b:for(var i=0;i<siblings.length;i++){
					  var dest = siblings[i];
					  //根据半径计算中心到边距离
					  var destR = (Math.sqrt(3) / 2) * dest.r;
					  var itemR = (Math.sqrt(3) / 2) * item.r;
					  var nr = destR + padding + itemR;
					  for(var pos=0;pos<6;pos++){
						  if(pos == 0){
							  var radians = -90 * Math.PI / 180;
							  nx = dest.x + nr * Math.cos(radians);
							  ny = dest.y + nr * Math.sin(radians);
						  }else if(pos == 1){
							  var radians = 210 * Math.PI / 180;
							  nx = dest.x + nr * Math.cos(radians);
							  ny = dest.y + nr * Math.sin(radians);
						  }else if(pos == 2){
							  var radians = 150 * Math.PI / 180;
							  nx = dest.x + nr * Math.cos(radians);
							  ny = dest.y + nr * Math.sin(radians);
						  }else if(pos == 3){
							  var radians = 90 * Math.PI / 180;
							  nx = dest.x + nr * Math.cos(radians);
							  ny = dest.y + nr * Math.sin(radians);
						  }else if(pos == 4){
							  var radians = 30 * Math.PI / 180;
							  nx = dest.x + nr * Math.cos(radians);
							  ny = dest.y + nr * Math.sin(radians);
						  }else if(pos == 5){
							  var radians = -30 * Math.PI / 180;
							  nx = dest.x + nr * Math.cos(radians);
							  ny = dest.y + nr * Math.sin(radians);
						  }
						  if(!isPointInside(nx,ny,item.r,siblings)){
						  	break b;
						  }
					  }
				  }
			  }
			  item.g.forEach(function (element) {
				  element.translate(nx-item.x,ny-item.y);
			  });
			  
			  item.x = nx;
			  item.y = ny;
			  siblings.push(item);
			  group.push(item.g);
		  });
		  var bbox = group.getBBox();
		  var centerX = bbox.x + bbox.width / 2;
		  var centerY = bbox.y + bbox.height / 2;
		  //根据中心到边距离计算中心到顶点距离
		  var outEdge = Math.max(bbox.width,bbox.height)/2;
		  var outR = (2 / Math.sqrt(3)) * outEdge;
		  outR = (2 / Math.sqrt(3)) * (outR + padding);
	  	  var wai = this.drawHexagon(node,centerX,centerY,outR);
	 	  group.push(wai);
		  return {r:outR,x:centerX,y:centerY,g:group,h:wai};
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
					const image = require("../img/weiguan/"+(['Firewall','IDS','IPS','Router','Switch'].includes(data.type)?data.type:'Host')+".png");
					circle = paper.image(image,obj.x-25,obj.y-33,52,52);
					this.wggraps[data.id] = circle;
					//图标下方文字
					var text = paper.text(obj.x,obj.y+22,data.ip);
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
					    'stroke-width':1
					});
					if(obj.children){
						this.createWeiguan(obj.children);
					}
				}
				//绑定数据
				circle.data('data',data);
			}
		}
    },
    //主图攻击路线
    createAttack(){
    	var self = this;
    	this.attack.forEach(function(item,index){
    		var color = index<self.colors.length?self.colors[index]:self.colors[self.colors.length-1];
			var lines = item.lines;
			for(var j=0;j<lines.length;j++){
				var g = self.graps[lines[j].source];
				var g1 = self.graps[lines[j].target];
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
				    var ps = this.lines[this.path[i].id];
				    if(!ps){
				    	ps = [];
				    	this.lines[this.path[i].id] = ps;
				    }
				    ps.push(line);
				    ps.push(arrow);
				}
			}
		});
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
.layout-path .title input{float:right;font-family: Source Han Sans;font-weight: 500;background:none;border:0;color:white;margin-right:10px;cursor:pointer;}
.layout-path .path{flex-grow:1;position:relative;}
.layout-path .path .box{position:absolute;left:0;top:0;right:0;bottom:0;overflow-y:auto;padding:5px 10px;}
.layout-path .path .box.nopath{background:url('../img/nopath.png') no-repeat center center;}
.layout-path .path .item{margin:5px 0;}
.layout-path .path .header{height:36px;line-height:36px;font-family: Source Han Sans;font-size: 14px;padding:0 0 0 10px;
	background:url('../img/down.png') no-repeat right center #292929;position:relative;
}
.layout-path .path .header.open{background:url('../img/up.png') no-repeat right center #292929;}
.layout-path .path .header .icon{display:inline-block;border-radius:4px;margin-right:8px;}
.layout-path .path .header .detail{display:inline-block;width:16px;height:16px;background:url('../img/4419.png') no-repeat;cursor:pointer;position:absolute;right:40px;top:10px;}
.layout-path .path .body{padding:10px 0 10px 17px;position:relative;}
.layout-path .path .host{display:flex;position:relative;}
.layout-path .path .host .arrow{position:absolute;width:25px;background:url('../img/37.png') no-repeat center bottom;cursor:pointer;top:49px;left:8px;bottom:2px;}
.layout-path .path .host .icon{height:44px;width:44px;background:url('../img/hip.png') no-repeat;background-size:100% 100%;cursor:pointer;}
.layout-path .path .host .icon.p{background:url('../img/lip.png') no-repeat;background-size:100% 100%;}
.layout-path .path .host .ip{flex-grow: 1;}
.layout-path .path .host .ip div{margin:5px 0 3px 0;font-family: Source Han Sans;font-size: 12px;}
.layout-path .path .host .ip span{font-family: Source Han Sans;font-size: 10px;color:#aaa;display:block;margin:5px 0;}
.layout-path .path .host .ip .pass{margin:15px 0;}
/*攻击路径详情*/
.layout-path .path .body.detail{position:absolute;z-index:1;background:black;left:0;top:0;right:0;bottom:0;}
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
/*微观图例*/
.tuli{position:absolute;bottom:50px;left:0;z-index:1;display:none;}
.tuli.show{display:block;}
.tuli div{font-family:'思源黑体';font-size:16px;text-align:center;}
.tuli img{display:block;margin-top:10px;}
/*主图图例*/
.ttuli{position:absolute;bottom:290px;left:0;z-index:1;display:none;}
.ttuli.show{display:block;}
/*返回按钮*/
.backbig{position:absolute;background:url('../img/weiguan/back.png') no-repeat;cursor:pointer;width:65px;height:24px;top:0;right:0;}
</style>