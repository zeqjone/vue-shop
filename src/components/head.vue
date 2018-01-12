<template>
	<div class="head">
		<a class="back" href="javascript:;">&lt;</a>
		{{title}}
	</div>
</template>

<script>
	export default {
		name: 'head',
		props:['title'],
		data() {
			return {}
		}
	}
</script>

<style scoped>
	.head{
		position: fixed;
		height: 4rem;
		top:0;
		left: 0;
		right: 0;
		background-color: #333;
		color:#f2f2f2;
		text-align: center;
		line-height: 4rem;
	}
	.head>.back{
		position: absolute;
		left: 0;
		height: 100%;
		width:4rem;
		color: #fff;
		text-align: center;
		text-decoration: none;
	}
</style>