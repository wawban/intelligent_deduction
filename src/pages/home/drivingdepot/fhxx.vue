<!-- 防护信息、设备性能 -->
<template>
	<div class="popinfo" v-show="show" :style="popstyle()" :id="id">
		<div class="header">
			<span :class="{'text':true,'active':active==1}" @click="active=1">防护信息</span>
			<span class="line"></span>
			<span :class="{'text':true,'active':active==2}" @click="active=2">设备性能</span>
		</div>
		<div class="body">
			<ul v-if="active==1">
				<li>资产名称：{{data.dc.device_name}}</li>
				<li>资产类型：{{data.dc.device_type}}</li>
				<li>设备IP：{{data.dc.device_ip}}</li>
				<li>阻断攻击路径：{{data.dc.attack_paths_blocked}}</li>
				<li>
					<div class="item">
						<div>防护范围：</div>
						<div>
							<span v-for="(item,index) in data.dc.shielded_range" :key="index">{{item}}</span>
						</div>
					</div>
				</li>
			</ul>
			<ul v-else>
				<li>CPU使用率：{{data.dc.memory_usage}}</li>
				<li>内存使用率：{{data.dc.cpu_usage}}</li>
				<li>宽带使用率：{{data.dc.bandwidth_usage}}</li>
			</ul>
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
		      	active:1,
		      	data:{dc:{}},
		      	show:false
			};
		},
		methods: {
        	open:function(x,y,data){
				this.x = x;
				this.y = y;
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