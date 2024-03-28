<!-- 资产详情、爆破范围 -->
<template>
	<div class="popinfo" v-show="show" :style="popstyle()" :id="id">
		<div class="header">
			<span :class="{'text':true,'active':active==1}" @click="active=1">资产详情</span>
			<span class="line"></span>
			<span :class="{'text':true,'active':active==2}" @click="active=2">爆破范围</span>
		</div>
		<div class="body">
			<ul v-if="active==1">
				<li>资产名称：{{data.name}}</li>
				<li>资产类型：{{data.category}}</li>
				<li>操作系统：{{data.os}}</li>
				<li>IP地址：{{data.ip}}</li>
				<li>来源：{{data.source}}</li>
				<li>业务重要程度：{{data.value==0?'未知':data.value}}</li>
				<li>存活状态：{{data.state==1?'存活':'不存活'}}</li>
			</ul>
			<ul v-else>
				<li>评估分值：{{data.er.score}}</li>
				<li>
					<div class="item">
						<div>风险画像：</div>
						<div>
							<span v-for="(item,index) in data.er.risk_portrait" :key="index">{{item}}</span>
						</div>
					</div>
				</li>
				<li>
					<div class="item">
						<div>潜在受感染目标：</div>
						<div>
							<span v-for="(item,index) in data.er.potential_affected_targets" :key="index">{{item}}</span>
						</div>
					</div>
				</li>
				<li>
					<div class="item">
						<div>已获得权限：</div>
						<div>
							<span v-for="(item,index) in data.er.permissions" :key="index">{{item}}</span>
						</div>
					</div>
				</li>
				<li>
					<div class="item">
						<div>影响业务：</div>
						<div>
							<span v-for="(item,index) in data.er.affected_business" :key="index">{{item}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {host_info} from "@/api/steer";
    export default {
		data(){
			return {
				id:'id'+Math.random(),
				x:0,
		      	y:0,
		      	show:false,
		      	active:1,
		      	data:{er:{}}
			};
		},
		methods: {
        	open:function(x,y,data){
				this.x = x;
				this.y = y;
				this.active = 1;
				this.data = data;
				
				this.show = true;
				var me = this;
				setTimeout(function(){
					var box = document.getElementById(me.id);
				    var width = box.offsetWidth;
				    var height = box.offsetHeight;
				    if(window.innerWidth - width < x){
				    	me.x = window.innerWidth - width - 20;
				    }
				    if(window.innerHeight - height < y){
				    	me.y = window.innerHeight - height - 20;
				    }
				},100);
				
				host_info(data.id).then((res) => {
					if(res.meta){
						for (let key in res.meta) {
							me.$set(me.data,key,res.meta[key]);
						}
					}
				});
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
.popinfo{position:absolute;z-index:2;border-radius:5px;border:2px #C67320 solid;background:#242423;top:200px;left:200px;width:300px;}
.popinfo .header{height:50px;line-height:50px;text-align:center;}
.popinfo .header .line{display:inline-block;width:1px;height:10px;background:#D8D8D8;margin:0 30px;}
.popinfo .header .text{cursor:pointer;}
.popinfo .header .text.active{border-bottom:2px #FA9600 solid;padding-bottom:5px;}
.popinfo .body{background:#1E1E1D;margin:0 20px 20px 20px;padding:10px;max-height:350px;overflow-y:auto;}
.popinfo .body li{line-height:18px;margin:15px 0;word-break:break-all;word-wrap: anywhere;}
.item{overflow:hidden;}
.item div{float:left;}
.item span{display:block;}
</style>