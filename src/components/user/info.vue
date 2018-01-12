<template>
	<div>
	这里是用户信息。
	{{this.$route.params.id}}
	<router-view></router-view>
</div>
</template>

<script>
	export default {
		name: 'user-info',
		created() {
			this.$emit('topage');
		}
	}
</script>
