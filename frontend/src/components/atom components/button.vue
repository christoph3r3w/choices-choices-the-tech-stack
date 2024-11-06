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
	--color:var(--D-t-support);
	/* --color:rgb(129, 50, 182); */
		width: fit-content;
		height: fit-content;
		padding: 10px;
		padding-inline: 1.5%;
		box-shadow: inset 0 -1px 5px color-mix(in oklch var(--color),var(--D-white2));		
		border-radius: max(1pc, 3pc);
		border: 2px solid;
		font-size: clamp(1rem, 0.0917rem + 4.3478vw, 1.6rem);
		text-wrap:nowrap ;
		
		contain:content;
		container-type:normal;
		container-name: button;
		
		border-color: color-mix(in oklch, var(--color) 15%, #fff3);
		background: color-mix(in oklch, var(--color), #0007);
		/* background-image: linear-gradient(1deg,var(--D-mid-bk) 5%, rgb(46, 200, 202) 46%); */
		color: color-mix(in lch longer hue,  var(--color) 28%, var(--LD-background) 100%);
		/* color: color-mix(in oklch, var(--color),#ffffff); */
}

.button:hover{
			background-image: 
			linear-gradient(
				180deg,
				color-mix(in oklch, var(--color) 5%, #fff3) 30%,
				color-mix(in oklch, var(--color), #0007) 96%
			);

}

</style>
