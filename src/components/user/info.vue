<template>
	<div>
	这里是用户信息。
	{{userId}}
	<router-view></router-view>
</div>
</template>

<script>
	export default {
		name: 'user-info',
		created() {
		},
		computed:{
			userId(){
				return JSON.stringify(this.$store.state.common.user);
			}
		}
	}
</script>
