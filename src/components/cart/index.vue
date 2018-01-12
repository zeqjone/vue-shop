<template>
	<div>
		this is cart index page.
	</div>
</template>

<script>
	export default {
		name: 'cart',
		created(){
			this.$emit('topage');
		}
	}
</script>