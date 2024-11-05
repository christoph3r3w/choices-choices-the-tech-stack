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
		border-radius: 50px 50px 0 0;
		background-color: var(--D-light-bk);
	}

	.window-list{
		display: flex;
		gap: 2vw;
		margin-block: 3%;
		height: auto;
		/* justify-content: space-between; */
		/* outline: solid green; */
		/* outline: solid red; */
		filter: grayscale(1);
		opacity: .4;
		/* background-color: rgba(0, 0, 0, 0.514); */
		pointer-events: none;
	}
	
	label{
		display: flex ;
		/* flex-basis: 3rem; */
		width: 7vw;
		height: 5rem;
		place-content: center;
		outline: solid grey;
		/* opacity: .4; */

		border-radius: 10px;
	}

	label:has(input:checked){
		background-color: var(--D-mid-bk);
		opacity: 1;
	}

	/* label:has(input:checked) + label{
		background-color: var(--D-mid-bk);
		opacity: 1;
	} */

	.window-list:nth-of-type(1){
		outline:none ;
		filter: grayscale(0);
		opacity: 1;
		pointer-events: initial;

		& label:hover{
			background-color: var(--D-dark-support);
		}


	}


	.window-list:has(input:checked) {
		outline: none;
		filter: grayscale(0);
		opacity: 1;



	}

	.window-list:has(input:checked) +.window-list {
		outline: none;
		filter: grayscale(0);
		opacity: 1;
		pointer-events: initial;

		& label:hover{
			background-color: var(--D-t-support);
		}
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
