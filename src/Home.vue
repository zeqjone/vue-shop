<template>
	<div>
		<p>这里是首页</p>
	<span>当前时间：{{time}}</span>
	<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				time: '初始化中！'
			}
		},
		created: function(){
			var that = this;
			this.interval = setInterval(function(){
				that.time = new Date().toLocaleTimeString();
			},1000);
		},
		destroyed: function(){
			clearInterval(this.interval);
		}
	}
</script>
<style>
	@import url(reset.css);
	@import url(../node_modules/mint-ui/lib/style.min.css);
</style>