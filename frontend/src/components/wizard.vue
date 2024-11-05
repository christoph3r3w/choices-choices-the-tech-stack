<template>
	<Window
		class="window-box"
		:title="'wizard'"
		id="wizard"
		:context1="'read and choose carefully'"
	>
		<div class="window-list" v-for="(wini,winiIndex) in 11" :key="winiIndex">
			<label v-for=" n in 5" 
			:key="n" 
			:for="`wini${winiIndex + 1}-check${n}`" 
			>
				<input 
				type="radio" 
				:name="`wini${winiIndex}`" 
				:id="`wini${winiIndex + 1}-check${n}`" 
				:value="n"
				v-model="winiSelect[winiIndex]"
				required />
			</label>
		</div>

		<nav class="button-box">
			<Button 
			:text="'Submit'"
			:task="''"
			 @click.prevent="handleSubmit" 
			 />

			<Button 
			:text="'Restart agian'" 
			:task="''"
			@click="handleRestart" />
			<!-- <Checkbox/> -->
		</nav>
	</Window>
</template>

<script>
import Window from "@/components/molecule component/window.vue";
import Button from "@/components/atom components/button.vue";
import axios from "axios";
// import Checkbox from "@/components/atom components/checkbox.vue";

export default {
	name: "wizard",

	components: {
		Window,
		// Checkbox,
		Button,
	},
	data(){
		return{
			winiSelect: Array(11).fill(null),
		}
	},

	methods: {
		async handleSubmit(e) {
			e.preventDefault();
			
		
			const selections = this.winiSelect.map((value, index) => ({
				windowId: index + 1,
				selection: value
			})).filter(item => item.selection !== null);
			console.log('data', selections);
			
			try {
				const response = await axios.post('/users', {
					wini: selections,
				});
				
				if (response.status === 201) {
					this.$router.push('/profile');
					this.$emit('click');
					console.log(response);
				} else {
					console.warn('not good');
				}
			} catch (error) {
				console.error('Error submitting form:', error);
			}
			// go to #top
			window.location.hash = 'top';
		},

		handleRestart() {
			window.location.reload();
			
			window.location.hash = '';


		},
	},
};
</script>

<style scoped>

	.window-box{
		border-radius: clamp(0.5rem, 2.5vw, 50px);
		background-color: var(--D-base-bk);
		/* background-color: hsl(157, 37%, 93%); */
	}

	.wiz-list {
		display: flex;
		gap: 2vw;
		flex-wrap: wrap;
		margin-block: 3%;
		height: auto;
		justify-items: space-between;
		filter: grayscale(1);
		opacity: .4;
		pointer-events: none;
		user-select: none;
	}

	legend{
		font-size: clamp(1rem, -3.8rem + 9vw, 2.5cqh);
		padding-bottom: 1cqh;
	}
	
	label{
		display: flex ;
		width: clamp(19cqh, 1rem + 3.3478vw,fit-content);
		height: clamp(11cqw, 1rem + 3vw, 10cqh);
		padding-inline: 1cqh;
		place-content: center;
		outline: solid grey;
		/* opacity: .4; */

		border-radius: 10px;
	}

	p{
		user-select: none;
	}

	/* //////////////////// */
	/* checked answer logic */
	/* //////////////////// */

	label:has(input:checked){
		background-color: var(--D-dark-support);
		opacity: 1;
	}

	label:has(input:checked) p{
		color: white;
	}



	.wiz-list:nth-of-type(1){
		outline:none ;
		filter: grayscale(0);
		opacity: 1;
		pointer-events: initial;
		user-select:auto;


		& label:hover{
			background-color: var(--D-t-support);
		}
	}


	.wiz-list:has(input:checked) {
		outline: none;
		filter: grayscale(0);
		opacity: 1;
		user-select:auto;



	}

	.wiz-list:has(input:checked) + .wiz-list {
		outline: none;
		filter: grayscale(0);
		opacity: 1;
		pointer-events: initial;

		& label:hover{
			background-color: var(--D-t-support);
		}
	}

	.window-box:has(.wiz-list:nth-last-of-type(1) input:nth-of-type(n):checked) Button{
		animation: h .9s ease 1s 2 ;
		transition: .5s;
	}

	@keyframes h {
		0%,100%{
			outline: 1px solid;
		}

		50%{
			outline: 5px solid;
		}

		25%,75%{
			outline: 3px solid;
			outline-offset: 3px;
			opacity: .98;
		}
		
	}

	.button-box{
		display: flex;
		gap: 2%;
		justify-content: center;
		margin-top:5%;

	}
	
	.button-box Button{
		width: 20%;
		min-width: fit-content;
		font-size:  clamp(1rem, 0.0917rem + 4.3478vw, 1.3rem);

	}

	@media screen and (width < 500px) {
		
		.wiz-list {
			/* flex-direction: column; */
			/* outline: solid gold ; */
			/* outline: solid red !important; */
		}

		label{
			width: 100% ;
			margin-inline: 3% ;
		}

		.button-box{
			margin-inline: 3% ;

		}

		.button-box Button{
			width: 100%;
		}


	}

</style>
