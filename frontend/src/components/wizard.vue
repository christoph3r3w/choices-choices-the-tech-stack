<template>
	<Window>
		<div class="window-list" v-for="(wini,winiIndex) in 9" :key="winiIndex">
			<label v-for=" n in 6" :key="n" :for="`wini${winiIndex + 1}-check${n}`">
				<input type="radio" :name="`wini${winiIndex}`" :id="`wini${winiIndex + 1}-check${n}`" required />
			</label>
		</div>

		<nav class="button-box">
			<Button>submit</Button>
			<Button>restard</Button>

			<Checkbox/>

		</nav>
	</Window>
</template>

<script>
import Window from "@/components/molecule component/window.vue";
import Button from "@/components/atom components/button.vue";
// import Checkbox from "@/components/atom components/checkbox.vue";

export default {
	name: "wizard",

	components: {
		Window,
		// Checkbox,
		Button,
	},
};
</script>

<style scoped>

	.window-list{
		display: flex;
		gap: 2vw;
		margin-block: 3%;
		height: auto;
		/* justify-content: space-between; */
		/* outline: solid green; */
		outline: solid red;
	}
	
	label{
		display: flex ;
		/* flex-basis: 3rem; */
		width: 7vw;
		height: 5rem;
		place-content: center;
		outline: solid grey;
		opacity: .4;

		border-radius: 10px;
	}

	label:has(input:checked){
		background-color: var(--D-mid-bk);
		opacity: 1;
	}



	.window-list:has(input:checked) {
		outline: none;

	}

</style>
