<template>
	<div>
		this is {{name}} page.
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'good-index',
		created() {
			// this.$emit('topage');
		},
		data() {
			return {
				name:'good index'
			};
		}
	}
</script>