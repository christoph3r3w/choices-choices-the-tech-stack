<template>
	<div class="WD">
		<h1>{{ title }}</h1>
		<p>{{ context1 }}</p>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'Window',
		props:{
			title:{type:String,	},
			context1:{type:String,	}
		}
	};
</script>


<style scoped>
	.WD{
		/* background-color:  rgba(255, 0, 0, 0.21); */
		/* background-color:  var(--D-mid-bk); */
		/* background-color: oklch(94.05% 0.0161 58.63); */
		height: 100%;
		width: 100%;
		padding: 5%;
		flex: 1 0 100%;
		/* contain: content; */
		container-type: inline-size;
	}

	h1{
		font-size: clamp(1.8rem, -3.8rem + 8vw, 5cqh);;

	}


</style>
