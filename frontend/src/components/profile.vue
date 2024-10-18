<template>
		<Window >
			<div class="window-container">
				profile page
				<router-link to="/login">log-out</router-link>
				<router-link to="/wizard">wizardt</router-link>
			</div>

		</Window>
</template>

<script>
	import Window from '@/components/molecule component/window.vue'

	export default {
		name:'Profile',
		components:{
			Window
		}
	}
</script>


<style>

	.window-container{
		display: flex;
		flex-direction: column;
		gap:3rem;
	}


</style>
