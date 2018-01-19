<template>
	<div>
		
	<router-view></router-view>
</div>
</template>

<script>
	export default {
		name: 'user-profile',
		created() {
		},
		computed:{
			userInfo(){
				console.log(this.$store.state.common);
				return JSON.stringify(this.$store.state.common.user);
			}
		}
	}
</script>
