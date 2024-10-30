<template>
	<router-link v-if="isRoute" :to="task" class="button" @click="handleClick">
		{{ text }}
		<slot></slot>
	</router-link>
	<a v-else-if="isAnchor" :href="task" class="button" @click="handleClick">
		{{ text }}
		<slot></slot>
	</a>
	<button v-else class="button" @click="handleClick">
		{{ text }}
		<slot></slot>
	</button>
</template>

<script>
	export default{
		name:'Button',
		props:{
			text:{type:String, required:true},
			task:{type:String, default:''}
		},
		computed:{
			isRoute(){
				return this.task.startsWith('/');
			},
			isAnchor(){
				return this.task.startsWith('#');
			}
		},
		methods:{
			handleClick(e){
				
				// Emit click event for all button types
				this.$emit('click', e);
			}
		}
	}

</script>


<style scoped>

.button{
	--D-white2:rgba(255, 255, 255, 0.514);
		width: fit-content;
		height: fit-content;
		color: var(--D-white);
		border-radius: max(1pc, 3pc);
		padding: 10px;
		padding-inline: 1.5%;
		background-image: linear-gradient(1deg,var(--D-mid-bk) 5%, rgb(46, 200, 202) 46%);
		box-shadow: inset 0 -1px 5px var(--D-white2);		
		border: none;
		font-size: clamp(1rem, 0.0917rem + 4.3478vw, 1.6rem);
		contain:content;
		container-type:normal;
		container-name: button;
		text-wrap:nowrap ;
}

</style>
