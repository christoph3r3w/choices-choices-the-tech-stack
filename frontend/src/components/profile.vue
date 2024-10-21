<template>
		<Window 
		class="window window-profile"
		:title="'Hi, person name'"
		:context1="'see your package here'"
		id="top"
		>
			<div class="window-child" id="profile">

				<section v-if="1 > 0" class="profile-c start">
					
					<article class="start-profile">
						<img src="../assets/pexels-dan-voican-2624103-17854203.jpg" alt="">

					</article>
					<article class="start-wizard">

						<Button 
						class="start-w-button"
						:text="'start wizard'" 
						:task="'#wizard'"
						></Button>
					</article>
				</section>

				<Window 
				class="window-package profile-c" 
				v-else
				:title="'package ...'"
				:context1="''"

				>
					<ul>
						<li><p>name: package name</p></li>
						<li><p>duration: this will last this long</p></li>
						<li><p>end: it expires on this date</p></li>
						<li><p>vehicle: what for of transport are you using</p></li>
						<li><p>budget: how much it cost or how much money you get </p></li>
						<li><p>info</p></li>
						<li><p>info</p></li>
						<li><p>info</p></li>
						
					</ul>
					
					<router-link to="login">log-out</router-link>
					<router-link to="overview">info</router-link>
				</Window>


				
				<!-- <router-link to="/wizard">wizard</router-link> -->
			</div>

			<div class="window " id="wizard">
				<Wizard class="window window-wizard" />
			</div>

			<div class="window " id="overview">
				<Overview class= "window window-overview" />
			</div>
	
		</Window>
</template>

<script>
	import Window from '@/components/molecule component/window.vue'
	import Wizard from './wizard.vue';
	import Overview from './Overview.vue';
	import Button from './atom components/button.vue';

	export default {
		name:'Profile',
		components:{
			Window,
			Wizard,
			Overview,
			Button
		}
	}
</script>


<style scoped>


	.window-profile:has(.start) :deep(h1),
	.window-profile:has(.start) :deep(p) {
		translate: 0 40vh;
		margin-left: 5vw;
		
	}

	.window:has(#wizard:is(:target)) :deep(h1),
	.window:has(#wizard:is(:target)) :deep(p),
	:deep(.window :is(h1,p)){
		translate: 0 0 !important;
		margin-left: 0vw !important;
		
	}

	.window-profile:first-of-type:has(#wizard:is(:target)) .start-wizard {
		display: none;
	}

	


	.window-child{

		display: flex;
		flex-direction: column;
		gap: 3rem;
		height: 60vh;
		margin-block: 3%;
		
	}


	/* all sections */

	
	.profile-c{
		display: flex;
		height: 100%;
		width: fit-content;
		width: 100cqw;
		border-radius: 50px ;
		/* flex-direction: column; */
		align-items: center;
		/* background-color: red; */
	}

	


	
	.profile-c .start-profile{
		width: 50cqw;
		height: 100%;
		/* aspect-ratio: 1; */
		/* border-radius: 50%; */
		overflow: hidden;
		/* margin-bottom: 5cqh; */
		/* background-color: aqua; */
		/* display: none; */
		
	}
	
	.profile-c .start-profile img{
		width: 15cqw ;
		/* height: 100%; */
		aspect-ratio: 1;
		/* object-position: center; */
		/* object-fit: cover; */
		display: none;
		
	}
	
	.start-wizard{
		display: grid;
		/* place-content: center; */
		
		width: 50cqw;
		height: 100%;
		background-color: var(--D-light-bk);
		border-radius: inherit;
		outline: 1px solid rgba(0, 0, 0, 0.138);
		z-index: 0;
	}

	.start-w-button{
		width: 100%;
		height: 100%;
		border-radius: inherit;
		background-color: bisque;
		display: grid;
		place-content: center;
		font-size: 3rem;
		
	}

	#wizard{
		padding-top: 11%;
		scroll-snap-align:start ;
		/* translate: 0 -71vh; */
		/* width: fit-content; */

	}

	#wizard:is(:target){
		/* margin: 0 -70vh; */
		margin-top: -70vh;
	}

	.window-wizard{
		position: relative;
		/* translate: 0 30%; */
		border-radius: 50px !important;
	}

	.window-package{
		border: 1px solid;
		align-items: initial;
		flex-direction: column;
		position: relative;
		width: 70cqw;
		/* height: 1; */
		/* flex: initial; */
		transition: 1s ease;
		
		div{
			color:red;
		}

	}

	/* .window-package:is(:hover){
		flex: 0 1 90cqh;
	} */

	:deep(.window-package){

		h1{
			font-size: clamp(1rem, -3.8rem + 8vw, 3cqi);;

		}
	}

	.window-package ul{
		width: 100%;
		height: 100%;
		margin-top: 3%;

		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		gap: 2%;
		overflow: hidden;
		text-wrap-mode:wrap;
		text-wrap-style: balance;
		text-overflow: ellipsis;
	}

	.window-package li{
		height: fit-content;
		flex: 1 0 max-content;
		border-bottom: 1px solid;

		
		padding-top: 2%;
		/* outline: solid; */
		/* display: flex;
		align-content:first baseline;
		justify-content: last baseline ; */
		
	}
	
	.window-package li p{
		height: fit-content;
		min-width: 1rem;
		width: fit-content;

		font-size: clamp(1rem, -3.8rem + 8vw, 1cqi);
		text-wrap:balance;
		text-wrap:auto;
		/* text-decoration: underline; */
		/* outline: solid red; */
		
	}

	.window-package li p::before{
		content: '';
		color: var(--D-mid-bk);

		margin-right: 5px;
		
	}


	@media screen and (width < 1000px) {
		.profile-c{
			width: 100cqw;
			flex-direction: column;

		}

		.profile-c .start-profile{
			display:block;
		}

		.window:first-of-type:has(.start) :deep(h1),
		.window:first-of-type:has(.start) :deep(p) {
		translate: 0 0;
		margin-left: 0;
		
	}

		#wizard{
			padding-top: 13% ;

		}
	}


</style>

