<template>
	<div>
		<h1></h1>
		<p></p>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'Window',
	};
</script>


<style scoped>
	div{
		background-color:  rgba(255, 0, 0, 0.21);
		/* background-color: oklch(94.05% 0.0161 58.63); */
		height: 100%;
		width: 100%;
		padding: 5%;

	}


</style>
