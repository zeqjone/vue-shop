<template>
	<div class="navbar">
		<a v-for="(item,index) in module" :href="item.link" :class="{on:item.state}">
			{{item.text}}
		</a>
	</div>
</template>

<script>
	export default {
		name: 'navbar',
		props:['module'],
		created() {
		},
		methods: {
			clkNav(message,event) {//注意这个参数名必须是message，event
				// this.$emit('topage',message + '');
			}
		},
		computed: {

		}
	}
</script>

<style scoped>
	.navbar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 5rem;
		line-height: 5rem;
		display: flex;
		background-color: #444;
	}
	.navbar>a{
		flex-basis: 0;
		flex-shrink: 0;
		flex-grow: 0.25;
		text-align: center;
		text-decoration: none;
		color:#fff;
		font-size: 1.4rem;
	}
	.navbar>a.on{
		background-color: #f44;
	}
</style>